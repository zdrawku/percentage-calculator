import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { WIthGlobalInputsComponent } from './with-global-inputs/with-global-inputs.component';
import { OtherComponentsComponent } from './other-components/other-components.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master-View' } },
  { path: 'with-global-inputs', component: WIthGlobalInputsComponent, data: { text: 'With-Global-Inputs' } },
  { path: 'other-components', component: OtherComponentsComponent, data: { text: 'Other-Components' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
