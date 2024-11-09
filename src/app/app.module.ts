import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './components/billing/billing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RtlComponent } from './components/rtl/rtl.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TablesComponent } from './components/tables/tables.component';
import { VirtualRealityComponent } from './components/virtual-reality/virtual-reality.component';
import { LayoutComponent } from './components/layout/layout.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { SearchCitiesComponent } from './components/search-cities/search-cities.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListFavoriteComponent } from './components/list-favorite/list-favorite.component';
import { AuthInterceptor } from './auth.interceptor';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    DashboardComponent,
    ProfileComponent,
    RtlComponent,
    SignInComponent,
    SignUpComponent,
    TablesComponent,
    VirtualRealityComponent,
    LayoutComponent,
    WeatherDetailComponent,
    SearchCitiesComponent,
    ListFavoriteComponent,
    LoadingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule // Import HttpClientModule for making HTTP requests in Angular
    
    
  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
