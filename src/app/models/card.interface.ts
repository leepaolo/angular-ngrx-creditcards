import { Card } from './card.model';

export interface AppState {
  cards: { [key: string]: Card };
  selectedCardIndex: number;
  flagReveal: number;
  idE2E: string;
  allCardsConfirmed: boolean;
  messageList: string[];
  headerIndex: number;
}

// cards: { [key: string]: Card };: Questa proprietà rappresenta una collezione di carte.
// Le chiavi di questo oggetto sono stringhe (key: string), e i valori sono di tipo Card.
// Questa struttura permette di accedere rapidamente a qualsiasi carta tramite il suo identificatore univoco (la chiave).
