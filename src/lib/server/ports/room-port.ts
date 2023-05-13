import type { Room } from '$lib/server/entities/room'

export interface RoomPort {
  createRoom(name: string): Promise<Room>;
  joinRoom(id: string, username: string): Promise<Room>;
}