import z from 'zod'
import { CreateRoom } from '$lib/server/usecases/create-room'
import { MemoRoom } from '$lib/server/adapters/memo-room'

/*
  Is you a croupier and want to create a room? This is the endpoint for you.
  Tell us the name of the room and your name and we will create a room for you.
*/
export async function POST(event) {
  const { name, croupier } = await event.request.json()

  const schema = z.object({
    name: z.string(),
    croupier: z.string()
  })

  try {
    schema.parse({ name, croupier })
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 400 })
  }

  const usecase = CreateRoom(MemoRoom())
  const data = await usecase(name, croupier)

  return new Response(JSON.stringify(data))
}