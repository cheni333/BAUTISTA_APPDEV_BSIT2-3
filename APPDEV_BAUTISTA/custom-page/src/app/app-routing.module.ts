import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPageWithIdPage } from './my-custom-page/custom-page-with-id/custom-page-with-id';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my-custom-page',
    loadChildren: () => import('./my-custom-page/my-custom-page.module').then( m => m.MyCustomPagePageModule)
  },
  {
    path: 'my-custom-page/custom-page-with-id/:id',
    component: MyCustomPageWithIdPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
