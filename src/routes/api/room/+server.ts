import { MemoRoom } from '$lib/server/adapters/memo-room'
import { CreateRoom } from '$lib/server/usecases/create-room'
import z from 'zod'

const rooms: [] = []

export async function POST(event) {
  const { roomName, croupierName } = await event.request.json()

  const schema = z.object({
    roomName: z.string(),
    croupierName: z.string()
  })

  try {
    schema.parse({ roomName, croupierName })
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 400 })
  }

  const usecase = CreateRoom(MemoRoom(rooms))
  const room = await usecase(roomName, croupierName)

  return new Response(JSON.stringify(room))
}