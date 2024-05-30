import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cardReducer } from './store/card.reducer';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false })
    ),
    provideStore({ card: cardReducer }),
    provideEffects([]),
  ],
};
