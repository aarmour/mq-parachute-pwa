import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SharedModule } from './shared/shared.module';
import { ArticlesModule, ArticleListPanelComponent, ArticleDetailPanelComponent } from './articles';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { SoundsLocalModule, SoundsLocalComponent } from './sounds-local';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'articles/topic/:topic', component: ArticleListPanelComponent },
  { path: 'articles/:id', component: ArticleDetailPanelComponent },
  { path: 'search', component: SearchComponent },
  { path: 'sounds-local', component: SoundsLocalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    // App
    SharedModule,
    ArticlesModule,
    SoundsLocalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
