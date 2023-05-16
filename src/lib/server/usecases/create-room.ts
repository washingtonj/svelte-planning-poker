import type { RoomPort } from "$lib/server/ports/room-port";

type CreateRoomArgs = {
  roomName: string
  croupierName: string
  croupierId: string
}

export function CreateRoom(RoomPort: RoomPort) {
  return async function ({ croupierId, croupierName,  roomName }: CreateRoomArgs) {
    
    const room = await RoomPort.createRoom(roomName);
    const player = await RoomPort.addPlayer(room.id, croupierName, croupierId);
    await RoomPort.setCroupier(room.id, player.id);

    return { player, room };
  };
}