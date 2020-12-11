import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'livraria-lista',
    pathMatch: 'full'
  },
  {
    path: 'livraria-lista',
    loadChildren: () => import('./livraria-lista/livraria-lista.module').then( m => m.LivrariaListaPageModule)
  },
  {
    path: 'livraria-imagens/:param',
    loadChildren: () => import('./livraria-imagens/livraria-imagens.module').then( m => m.LivrariaImagensPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
