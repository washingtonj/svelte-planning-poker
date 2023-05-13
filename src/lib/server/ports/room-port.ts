export interface RoomPort {
  createRoom(name: string): Promise<{ roomid: string }>;
  addPlayer(roomId: string, playerName: string): Promise<{ playerid: string }>;
  setCroupier(roomId: string, playerId: string): Promise<void>;
}