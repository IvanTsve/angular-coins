import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/logout', component: LogoutComponent },
  { path: '', component: MainComponent },
  { path: 'user/:id/profile', component:  PortfolioComponent},
  { path: 'coins/details/:id', component: DetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
