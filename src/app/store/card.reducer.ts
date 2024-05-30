import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from '../models/card.interface';
import * as CardActions from './card.actions';
import { mockCards } from '../mocks/card.mock';

export const initialState: AppState = {
  cards: mockCards,
  selectedCardIndex: 0,
  flagReveal: 0,
  idE2E: '',
  allCardsConfirmed: false,
  messageList: [],
  headerIndex: 0,
};

const _cardReducer = createReducer(
  initialState,
  on(CardActions.verifyCardSuccess, (state, { card }) => {
    console.log('Card verification successful:', card);
    return {
      ...state,
      cards: { ...state.cards, [card.id]: card },
    };
  }),

  on(CardActions.verifyCardFail, (state, { error }) => {
    console.error('Card verification failed:', error);
    return {
      ...state,
      messageList: [...state.messageList, error],
    };
  }),

  on(CardActions.updateSelectedCardIndex, (state, { selectedCardIndex }) => {
    console.log('Updating selected card index to:', selectedCardIndex);
    return {
      ...state,
      selectedCardIndex,
    };
  })
);

export function cardReducer(state: AppState | undefined, action: Action) {
  return _cardReducer(state, action);
}
