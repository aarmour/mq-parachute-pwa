import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { SoundsLocalComponent } from './sounds-local/sounds-local.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'articles/topic/:topic', component: ArticleListComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'sounds-local', component: SoundsLocalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    NotFoundComponent,
    SearchComponent,
    SoundsLocalComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    // App
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
