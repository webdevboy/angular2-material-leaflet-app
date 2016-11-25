import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LeafmapComponent } from './leafmap/leafmap.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leafmap', component: LeafmapComponent},
  { path: 'user', component: UserComponent}
];

export const routing = RouterModule.forRoot(routes);
