import type { RoomPort } from "$lib/server/ports/room-port";

export function JoinRoom(RoomPort: RoomPort) {
  return async function (roomid: string, playername: string) {
    const player = await RoomPort.addPlayer(roomid, playername)
    const room = await RoomPort.getRoom(roomid)

    return { player, room }
  };
}