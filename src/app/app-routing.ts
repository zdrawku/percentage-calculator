import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './master-view/master-view';
import './with-global-inputs/with-global-inputs';
import './other-components/other-components';

export const routes: Route[] = [
  { path: 'other-components', component: 'app-other-components', name: 'Other components' },
  { path: 'with-global-inputs', component: 'app-with-global-inputs', name: 'WIth Global inputs' },
  { path: 'master-view', component: 'app-master-view', name: 'Master View' },
  { path: '', component: 'app-master-view', name: 'Master View' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
