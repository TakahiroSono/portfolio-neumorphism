import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { LinksComponent } from './pages/links/links.component';
import { TitleComponent } from './common/title/title.component';
import { CardComponent } from './common/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    FavoriteComponent,
    SkillsComponent,
    LinksComponent,
    TitleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
