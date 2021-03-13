// app-routing.module.ts

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BlogIndexComponent } from './blog/index/index.component';

const appRoutes: Routes = [
  { path: 'blogs', component: BlogIndexComponent },
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
