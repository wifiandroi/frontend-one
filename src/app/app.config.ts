import { ApplicationConfig, APP_INITIALIZER, ErrorHandler, NgModule  } from '@angular/core';
import { Router, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';


import * as Sentry from "@sentry/angular";


export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes), provideClientHydration()]
providers: [
    provideRouter(routes),
    provideClientHydration(),
   // provideHttpClient(),
    provideHttpClient(withFetch()) // Habilita fetch
  ],
  

};
