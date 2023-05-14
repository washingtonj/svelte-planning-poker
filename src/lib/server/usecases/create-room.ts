import type { RoomPort } from "$lib/server/ports/room-port";

export function CreateRoom(RoomPort: RoomPort) {
  return async function (name: string, croupier: string) {
    
    const room = await RoomPort.createRoom(name);
    const player = await RoomPort.addPlayer(room.id, croupier)
    await RoomPort.setCroupier(room.id, player.id);
    
    return { player, room };
  };
}