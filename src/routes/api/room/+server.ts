import { RoomAdapter } from '$lib/server/adapters/room-adapter'

export async function GET({ url }) {
  const id = url.searchParams.get('id')
  const username = url.searchParams.get('username')

  if (!id || !username) {
    return new Response(JSON.stringify({ error: 'Need some params' }), { status: 400 })
  }

  const { joinRoom } = RoomAdapter.getInstance()
  const room = await joinRoom(id, username)

  return new Response(JSON.stringify(room))
}


export async function POST({ url }) {
  const name = url.searchParams.get('name')

  if (!name) {
    return new Response(JSON.stringify({ error: 'No name provided' }), { status: 400 })
  }

  const { createRoom } = RoomAdapter.getInstance()
  const room = await createRoom(name)


  return new Response(JSON.stringify(room))
}