import type { RoomPort } from "$lib/server/ports/room-port";

type JoinRoomArgs = {
  roomId: string
  playerName: string
  playerId: string
}

export function JoinRoom(RoomPort: RoomPort) {
  return async function ({ roomId, playerName, playerId }: JoinRoomArgs) {

    const room = await RoomPort.getRoom(roomId)
    const playerAlreadyExists = room.players.find(player => player.id === playerId)

    if (playerAlreadyExists) {
      return { player: playerAlreadyExists, room }
    }

    const player = await RoomPort.addPlayer(roomId, playerName, playerId)

    return { player, room }
  };
}