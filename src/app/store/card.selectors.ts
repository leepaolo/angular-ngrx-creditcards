import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../models/card.interface';

export const selectCardState = createFeatureSelector<AppState>('card');

export const selectCardList = createSelector(selectCardState, (state) => {
  const cardList = [];
  for (const key in state.cards) {
    const card = { ...state.cards[key], id: key };
    cardList.push(card);
  }
  return cardList;
});

export const selectSelectedCard = createSelector(selectCardState, (state) => {
  const cardKeys = Object.keys(state.cards);
  return state.cards[cardKeys[state.selectedCardIndex]];
});


// selectCardState: Crea un selettore per accedere alla porzione dello stato globale relativa alle carte.

// selectCardList: Crea un selettore che trasforma l'oggetto delle carte in un array di oggetti Card, ciascuno con il proprio ID.

// selectSelectedCard: Crea un selettore che restituisce la carta attualmente selezionata basandosi sull'indice della carta selezionata.
