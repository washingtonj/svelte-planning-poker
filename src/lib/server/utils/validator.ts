import { error } from '@sveltejs/kit'
import type { ZodObject, TypeOf } from 'zod'

export function zPayload(z: ZodObject<{}>, data: TypeOf<typeof z>) {
  try {
    z.parse(data)
    return data
  } catch (err: any) {
    const message = err.errors.map((error: any) => ({ [error.path[0]]: error.message }))[0]
    throw error(400, { message })
  }
}