import type { RoomPort } from '../ports/room-port';
import type { Player } from '../entities/player';
import type { Room, Card } from '../entities/room'

const rooms: [] = [];

const cards: Card[] = [
  {
    id: "1",
    value: '1',
    description: "30 minutes",
  },
  {
    id: "2",
    value: '2',
    description: "Half an hour",
  },
  {
    id: "3",
    value: '3',
    description: "A day",
  },
  {
    id: "4",
    value: '5',
    description: "A week",
  },
  {
    id: "5",
    value: '8',
    description: "Two weeks",
  },
  {
    id: "6",
    value: "☕️",
    description: "Coffee break",
  },
];

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
        cards,
        players: []
      };

      RoomPersistence.push(room);

      return Promise.resolve(room);
    },

    addPlayer(roomId, playerName) {
      const room = findRoom(roomId);
      
      const player: Player = {
        id: incrementPlayerId(room.players),
        name: playerName
      };
      
      room.players.push(player);
      return Promise.resolve(player);
    },

    setCroupier(roomId, playerId) {
      const room = findRoom(roomId);
      const player = room.players.find(player => player.id === playerId);
      if (!player) throw new Error('Player not found');
      room.croupier = player;
      return Promise.resolve();
    },

    getRoom(roomId) {
      const room = findRoom(roomId);
      return Promise.resolve(room);
    },
  }
}