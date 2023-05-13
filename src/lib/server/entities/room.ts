import type { Player } from '$lib/server/entities/player';

export interface Room {
  id: string;
  name: string;
  croupier?: Player;
  players: Player[];
}