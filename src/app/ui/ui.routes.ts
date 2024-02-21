import { Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CounterComponent } from './counter/counter.component';
import { FlightBookerComponent } from './flight-booker/flight-booker.component';
import { GenerateTableComponent } from './generate-table/generate-table.component';
import { HolyGrailComponent } from './holy-grail/holy-grail.component';
import { MainUiComponent } from './main-ui/main-ui.component';

export const UiRoute: Routes = [
  {
    path: '',
    component: MainUiComponent,
    children: [
      {
        path: 'counter',
        component: CounterComponent,
      },
      {
        path: 'accordion',
        component: AccordionComponent,
      },
      {
        path: 'contact-form',
        component: ContactFormComponent,
      },
      {
        path:'flight-booker',
        component: FlightBookerComponent
      },
      {
        path:'generate-table',
        component:GenerateTableComponent
      },
      {
        path:'holy-grail',
        component: HolyGrailComponent
      }
    ],
  },
];
