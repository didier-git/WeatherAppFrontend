import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BillingComponent } from './components/billing/billing.component';
import { RtlComponent } from './components/rtl/rtl.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TablesComponent } from './components/tables/tables.component';
import { VirtualRealityComponent } from './components/virtual-reality/virtual-reality.component';
import { LayoutComponent } from './components/layout/layout.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { SearchCitiesComponent } from './components/search-cities/search-cities.component';
import { ListFavoriteComponent } from './components/list-favorite/list-favorite.component';

const routes: Routes = [

  {path: '', component: DashboardComponent,
    children: [
      { path: '', component: SearchCitiesComponent },
      { path: 'weather-detail', component: WeatherDetailComponent },
      { path: 'list-favorites', component: ListFavoriteComponent },
    ]
  },
  {path: 'billing', component: BillingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'rtl', component: RtlComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'virtual-reality', component: VirtualRealityComponent},
  {path: 'layout', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }