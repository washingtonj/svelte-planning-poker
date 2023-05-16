import z from 'zod'
import { CreateRoom } from '$lib/server/usecases/create-room'
import { MemoRoom } from '$lib/server/adapters/memo-room'
import { zPayload } from '$lib/server/utils/validator'

/*
  Is you a croupier and want to create a room? This is the endpoint for you.
  Tell us the name of the room and your name and we will create a room for you.
*/
export async function POST(event) {
  const { name, croupier } = await event.request.json()

  zPayload(z.object({
    name: z.string(),
    croupier: z.string()
  }), { name, croupier })

  const userId = event.cookies.get('session_id')!

  const usecase = CreateRoom(MemoRoom())
  const data = await usecase({ roomName: name, croupierName: croupier, croupierId: userId })

  return new Response(JSON.stringify(data))
}