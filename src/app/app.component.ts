import { APP_INITIALIZER, ErrorHandler, Component, NgModule } from '@angular/core';
import {  Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import * as Sentry from "@sentry/angular";

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, HeaderComponent, FooterComponent, DashboardComponent,
    RouterModule, //Llama al selector: <app-header/>, <app-footer/>
  ],
  
                        // ...
                        providers: [{
                          provide: ErrorHandler,
                          // useValue: Sentry.createErrorHandler({
                          //   showDialog: true,
                          // }),
                          useValue: Sentry.createErrorHandler(),                         
                        }, {
                          provide: Sentry.TraceService,
                          deps: [Router],
                        },
                        {
                          provide: APP_INITIALIZER,
                          useFactory: () => () => {},
                          deps: [Sentry.TraceService],
                          multi: true,
                        },
                      ],
                      // ...

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-one';
 
}
