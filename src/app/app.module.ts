import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AddItemComponent } from './components/add-item/add-item.component';
import { RemoveItemComponent } from './components/remove-item/remove-item.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { listReducer } from './state/list/list.reducer';
import { ListEffects } from './state/list/list.effects';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    RemoveItemComponent,
    ListPageComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('ListFeature', { ListFeature: listReducer }),
    EffectsModule.forRoot([ ListEffects ]),
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [HttpClientModule, ApiService, CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
