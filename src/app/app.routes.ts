import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormAnswersComponent } from './form-answers/form-answers.component';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full',
      },
      {
        path: 'form',
        component: AppComponent,
        children: [
          {
            path: '',
            redirectTo: 'builder',
            pathMatch: 'full',
          },
          {
            path: 'builder',
            component: FormBuilderComponent,
          },
          {
            path: 'answers',
            component: FormAnswersComponent,
          },
        ],
      },
    ],
  },
];
