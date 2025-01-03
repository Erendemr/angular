import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', loadChildren:() => import('./home/home.module').then ((m) =>m.HomeModule),
    
  },
  {path: 'movies', loadChildren:() => import('./movies/movies.module').then ((m) =>m.MoviesModule),
    
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
