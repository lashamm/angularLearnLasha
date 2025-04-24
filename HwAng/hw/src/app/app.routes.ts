import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'user', component: UserComponent}
];

