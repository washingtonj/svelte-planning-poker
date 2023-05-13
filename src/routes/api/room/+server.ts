import z from 'zod'
import { MemoRoom } from '$lib/server/adapters/memo-room'
import { CreateRoom } from '$lib/server/usecases/create-room'
import { JoinRoom } from '$lib/server/usecases/join-room'

const rooms: [] = []

export async function GET(event) {
  const schema = z.object({
    id: z.string(),
    player: z.string()
  })

  const id = event.url.searchParams.get('id') as string
  const player = event.url.searchParams.get('player') as string

  const params = { id, player }

  try {
    schema.parse(params)
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 400 })
  }

  const usecase = JoinRoom(MemoRoom(rooms))
  const info = await usecase(params.id, params.player)

  return new Response(JSON.stringify(info))
}

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