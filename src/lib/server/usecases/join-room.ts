import type { RoomPort } from "$lib/server/ports/room-port";

export function JoinRoom(RoomPort: RoomPort) {
  return async function (roomid: string, playername: string) {
    const { playerid } = await RoomPort.addPlayer(roomid, playername)
    return { playerid };
  };
}