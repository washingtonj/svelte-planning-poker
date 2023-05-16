import type { Room } from '$lib/server/entities/room'
import type { Player } from '$lib/server/entities/player'
export interface RoomPort {
  createRoom(name: string): Promise<Room>;
  getRoom(roomId: string): Promise<Room>;
  addPlayer(roomId: string, playerName: string, playerId: string): Promise<Player>;
  setCroupier(roomId: string, playerId: string): Promise<void>;
}