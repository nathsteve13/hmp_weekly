import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pastadetail/:id',
    loadChildren: () => import('./pastadetail/pastadetail.module').then( m => m.PastadetailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
  },
  
  {
    path: 'tabs', children: [
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
        { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule) },
        { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule) },
      ]
    },
  {
    path: 'pasta',
    loadChildren: () => import('./pasta/pasta.module').then( m => m.PastaPageModule)
  },
  {
    path: 'pastadetail',
    loadChildren: () => import('./pastadetail/pastadetail.module').then( m => m.PastadetailPageModule)
  },
  {
    path: 'newpasta',
    loadChildren: () => import('./newpasta/newpasta.module').then( m => m.NewpastaPageModule)
  },
  {
    path: 'editpasta/:id',
    loadChildren: () => import('./editpasta/editpasta.module').then(m => m.EditpastaPageModule)
  },
    
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
