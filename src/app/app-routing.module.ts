import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then(m => m.ServicePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'detail2', loadChildren: './detail2/detail2.module#Detail2PageModule' },
  { path: 'detail3', loadChildren: './detail3/detail3.module#Detail3PageModule' },
  { path: 'detail4', loadChildren: './detail4/detail4.module#Detail4PageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
