import type { RoomPort } from '../ports/room-port';
import type { Player } from '../entities/player';
import type { Room } from '../entities/room'

export function MemoRoom(RoomPersistence: Room[]): RoomPort {

  function createHash() {
    return Buffer.from(Math.random().toString() + new Date().getMilliseconds()).toString('base64');
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
        id: createHash(),
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