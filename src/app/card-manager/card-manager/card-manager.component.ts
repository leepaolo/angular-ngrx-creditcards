import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, take } from 'rxjs';

import * as CardSelectors from '../../store/card.selectors';
import * as CardActions from '../../store/card.actions';
import { Card } from '../../models/card.model';
import { AppState } from '../../models/card.interface';

@Component({
  selector: 'app-card-manager',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>Card Manager</h2>
      <ul>
        <li *ngFor="let card of cards$ | async; let i = index">
          {{ card.name }} - {{ card.number }}
          <button (click)="confirmCard(i)">Confirm</button>
        </li>
      </ul>
      <div *ngIf="selectedCard$ | async as selectedCard">
        <h3>Selected Card</h3>
        <p>{{ selectedCard.name }} - {{ selectedCard.number }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class CardManagerComponent {
  cards$: Observable<Card[]>;
  selectedCard$: Observable<Card>;

  constructor(private store: Store<AppState>) {
    this.cards$ = this.store.pipe(select(CardSelectors.selectCardList));
    this.selectedCard$ = this.store.pipe(
      select(CardSelectors.selectSelectedCard)
    );
  }

  confirmCard(selectedCardIndex: number) {
    this.cards$.pipe(take(1)).subscribe((cards) => {
      const cardId = cards[selectedCardIndex].id;
      console.log('Confirming card with ID:', cardId);
      this.store.dispatch(CardActions.verifyCard({ cardId, formData: {} }));
      this.store.dispatch(
        CardActions.updateSelectedCardIndex({ selectedCardIndex })
      );
    });
  }
}
