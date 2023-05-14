import z, { ZodError } from 'zod'
import { error } from '@sveltejs/kit'
import { JoinRoom } from '$lib/server/usecases/join-room'
import { MemoRoom } from '$lib/server/adapters/memo-room'
import type { PageServerLoad } from '../../$types'

export const load = (async (event) => {
  const schema = z.object({
    id: z.string(),
    player: z.string()
  })


  const id = (event.params as any).id as string
  const player = event.url.searchParams.get('player') as string

  try {
    schema.parse({ id, player })
  } catch (err: any) {

    const message = err.errors.map((error: any) => ({ [error.path[0]]: error.message }))[0]

    throw error(400, {
      message
    })
  }

  
  
  try {
    const usecase = JoinRoom(MemoRoom())
    const data = await usecase(id, player)

    return data

  } catch (err: any) {
    throw error(500, {
      message: err.message
    })
  }

}) satisfies PageServerLoad
