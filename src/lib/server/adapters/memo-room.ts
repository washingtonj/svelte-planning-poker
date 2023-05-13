import type { RoomPort } from '../ports/room-port';
import type { Player } from '../entities/player';
import type { Room } from '../entities/room'

const rooms: [] = [];

export function MemoRoom(RoomPersistence: Room[] = rooms): RoomPort {

  function createHash() {
    const left = Math.random().toString(36).substring(2, 8);
    const right = new Date().getMilliseconds();

    return Buffer.from(left + right).toString('base64url')
  }

  function incrementPlayerId(players: Player[]) {
    const lastPlayerId = players[players.length - 1]?.id || 0;
    const playersLength = players.length.toString();

    if (lastPlayerId === playersLength) {
      return lastPlayerId + 1;
    }

    return playersLength;
  }

  function findRoom(id: string) {
    const room = RoomPersistence.find(room => room.id === id);
    if (!room) throw new Error('Room not found');
    return room;
  }

  return {
    createRoom(name) {
      const room: Room = {
        id: createHash(),
        name,
        players: []
      };

      RoomPersistence.push(room);

      return Promise.resolve({ roomid: room.id });
    },

    addPlayer(roomId, playerName) {
      const room = findRoom(roomId);
      
      const player: Player = {
        id: incrementPlayerId(room.players),
        name: playerName
      };
      
      room.players.push(player);
      return Promise.resolve({ playerid: player.id });
    },

    setCroupier(roomId, playerId) {
      const room = findRoom(roomId);
      const player = room.players.find(player => player.id === playerId);
      if (!player) throw new Error('Player not found');
      room.croupier = player;
      return Promise.resolve();
    },
  }
}