import type { RoomPort } from "$lib/server/ports/room-port";

export function CreateRoom(RoomPort: RoomPort) {
  return async function (roomname: string, croupier: string) {
    
    const { roomid } = await RoomPort.createRoom(roomname);
    const { playerid } = await RoomPort.addPlayer(roomid, croupier)
    await RoomPort.setCroupier(roomid, playerid);
    
    return { id: roomid, name: roomname, croupier: playerid };
  };
}