import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { cardReducer } from './app/store/card.reducer';

const ngrxProviders = [
  importProvidersFrom(
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false })
  ),
  provideStore({ card: cardReducer }),
  provideEffects([]),
];

bootstrapApplication(AppComponent, {
  providers: [...appConfig.providers, ...ngrxProviders],
}).catch((err) => console.error(err));
