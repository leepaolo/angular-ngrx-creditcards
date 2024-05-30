import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card.model';

export const verifyCard = createAction(
  '[Card] Verify',
  props<{ cardId: string; formData: any }>()
);

export const verifyCardSuccess = createAction(
  '[Card] Verify Success',
  props<{ card: Card }>()
);

export const verifyCardFail = createAction(
  '[Card] Verify Fail',
  props<{ error: any }>()
);

export const updateSelectedCardIndex = createAction(
  '[Card] Update Selected Card Index',
  props<{ selectedCardIndex: number }>()
);
