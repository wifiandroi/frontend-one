import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import * as Sentry from '@sentry/browser';
import { environment } from './environments/environment.stage';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/*
Sentry.init({
      dsn: "https://5c67a48ba26ca515079da654ae50d854@o4507753129312256.ingest.us.sentry.io/4507759350579200",
      integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.browserProfilingIntegration(),
            Sentry.replayIntegration(),
    ],
          // Performance Monitoring
          tracesSampleRate: 1.0, //  Capture 100% of the transactions
          // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
          tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
          // Session Replay
          replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
          replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
          // Set profilesSampleRate to 1.0 to profile every transaction.
          // Since profilesSampleRate is relative to tracesSampleRate,
          // the final profiling rate can be computed as tracesSampleRate * profilesSampleRate
          // For example, a tracesSampleRate of 0.5 and profilesSampleRate of 0.5 would
          // results in 25% of transactions being profiled (0.5*0.5=0.25)
          profilesSampleRate: 1.0,
    });
  
        enableProdMode();
        platformBrowserDynamic();
    */
        
        Sentry.init({
            dsn: "https://af9cfa30dd7e1192d255b6b63dbe2728@o4507753129312256.ingest.us.sentry.io/4507761689559040",
            integrations: [
              Sentry.browserTracingIntegration(),
              Sentry.replayIntegration(),
            ],
            // Performance Monitoring
            tracesSampleRate: 1.0, //  Capture 100% of the transactions
            // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
            // Session Replay
            replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
            replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
          });
          
      //     enableProdMode();
      //     platformBrowserDynamic();

        

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
