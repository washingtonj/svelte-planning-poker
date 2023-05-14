import type { Player } from '$lib/server/entities/player';

export interface Card {
  id: string;
  value: string;
  description: string;  
}
export interface Room {
  id: string;
  name: string;
  croupier?: Player;
  players: Player[];
  cards: Card[]
}