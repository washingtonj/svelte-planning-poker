import type { Player } from '../entities/player';
import type { Room } from '../entities/room'
import type { RoomPort } from '../ports/room-port'

export class RoomAdapter implements RoomPort {
  private static instance: RoomAdapter;
  private static rooms: Room[] = [];

  private constructor() {}

  static getInstance(): RoomAdapter {
    if (!RoomAdapter.instance) {
      RoomAdapter.instance = new RoomAdapter();
    }
    return RoomAdapter.instance;
  }

  private static generateRoomId(name: string): string {
    return Buffer.from(name + new Date().getMilliseconds()).toString('base64');
  }

  private static generatePlayerId(name: string): string {
    return Buffer.from(name + new Date().getMilliseconds()).toString('base64');
  }

  private static findRoom(id: string): Room {
    const room = RoomAdapter.rooms.find((room) => room.id === id);
    if (!room) throw new Error('Room not found');
    return room;
  }

  public createRoom(name: string): Promise<Room> {
    const room: Room = {
      id: RoomAdapter.generateRoomId(name),
      name,
      players: [],
    };
    RoomAdapter.rooms.push(room);
    return Promise.resolve(room);
  }

  public joinRoom(id: string, username: string): Promise<Room> {
    const room = RoomAdapter.findRoom(id);
    const player: Player = {
      id: RoomAdapter.generatePlayerId(username),
      name: username
    } 
    room.players.push(player);
    return Promise.resolve(room);
  }
}