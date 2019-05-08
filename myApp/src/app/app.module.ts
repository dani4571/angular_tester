import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { AnimalComponent } from './animal/animal.component';
import { HomeComponent } from './home/home.component';
import { SportsListComponent } from './sports/sports-list/sports-list.component';
import { SportDetailComponent } from './sports/sport-detail/sport-detail.component';
import { PercipioExerciseComponent } from './percipio-exercise/percipio-exercise.component';
import { VowelPickerComponent } from './vowel-picker/vowel-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QDashboardDemoComponent } from './q-dashboard-demo/q-dashboard-demo.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { QDemoNavigationComponent } from './q-demo-navigation/q-demo-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    AnimalComponent,
    HomeComponent,
    SportsListComponent,
    SportDetailComponent,
    PercipioExerciseComponent,
    VowelPickerComponent,
    QDashboardDemoComponent,
    QDemoNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VowelPickerComponent]
})
export class AppModule { 

  constructor(private injector:Injector) {

    //creating custom element
    const vowelPicker = createCustomElement(VowelPickerComponent, {injector});

    //registering custom element
    customElements.define("app-vowel-picker", vowelPicker);
  }

  ngDoBootstrap(){}
}
