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

  const params = { id, player }

  try {
    schema.parse(params)
  } catch (err: any) {

    const message = err.errors.map((error: any) => ({ [error.path[0]]: error.message }))[0]

    throw error(400, {
      message
    })
  }

  const usecase = JoinRoom(MemoRoom())


  try {
    const info = await usecase(params.id, params.player)

    return {
      props: {
        info
      }
    }

  } catch (err: any) {
    throw error(500, {
      message: err.message
    })
  }

}) satisfies PageServerLoad
