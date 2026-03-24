import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Models } from './pages/models/models';
import { Info } from './pages/info/info';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: Main },
  { path: 'models', component: Models },
  { path: 'info', component: Info }

];
