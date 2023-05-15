import z from 'zod'
import { error } from '@sveltejs/kit'
import { JoinRoom } from '$lib/server/usecases/join-room'
import { MemoRoom } from '$lib/server/adapters/memo-room'
import { zPayload } from '$lib/server/utils/validator'
import type { PageServerLoad } from '../../$types'

export const load = (async (event) => {
  const id = (event.params as any).id as string
  const player = event.url.searchParams.get('player') as string

  zPayload(z.object({
    id: z.string(),
    player: z.string()
  }), { id, player })

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
