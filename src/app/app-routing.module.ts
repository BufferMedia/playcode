import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {SiteLayoutComponent} from './layouts/site-layout/site-layout.component';
import {ForgotPasswordComponent} from './pages/auth/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './pages/auth/reset-password/reset-password.component';
import {LoginGuard} from './auth/guard/login/login.guard';
import {RegisterWelcomeComponent} from './pages/auth/register-welcome/register-welcome.component';
import {RegisterGenderComponent} from './pages/auth/register-gender/register-gender.component';
import {RegisterPersonalizationComponent} from './pages/auth/register-personalization/register-personalization.component';
import {ProfileComponent} from "./pages/auth/profile/profile.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {CategoryComponent} from "./pages/category/category.component";
import {CategoryGameListComponent} from "./pages/category-game-list/category-game-list.component";
import {GameProfileComponent} from "./pages/game-profile/game-profile.component";
import {GameProfileReviewComponent} from "./pages/game-profile-review/game-profile-review.component";
import {PlaygroundComponent} from "./pages/playground/playground.component";


const routes: Routes = [


  // No Login Required
  {
    path : '',
    component : SiteLayoutComponent,
    children : [
      { path : '', component : HomepageComponent},
      { path : 'login', component : LoginComponent},
      { path : 'register', component : RegisterComponent},
      { path : 'forgot_password', component : ForgotPasswordComponent},
      { path : 'reset_password', component : ResetPasswordComponent},
      // might be guarded
      { path : 'game/category', component : CategoryComponent},
      { path : 'game/category/list', component : CategoryGameListComponent},
      { path : 'game/profile', component : GameProfileComponent},
      { path : 'game/profile/review', component : GameProfileReviewComponent},
      { path : 'game/playground', component : PlaygroundComponent},
    ]
  },

  // Login Required
  {
    path : '',
    component : SiteLayoutComponent,
    // canActivate: [LoginGuard],
    children : [
      { path : 'register/welcome', component : RegisterWelcomeComponent},
      { path : 'register/gender', component : RegisterGenderComponent},
      { path : 'register/personalize', component : RegisterPersonalizationComponent},
      { path : 'profile', component : ProfileComponent},
      { path : 'dashboard', component : DashboardComponent},
    ]
  },

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
