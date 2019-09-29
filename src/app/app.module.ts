import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpModule } from '@angular/http';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RepositoriesComponent} from './repositories/repositories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShortenPipe } from './shorten.pipe';
import { RedblackDirective } from './redblack.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GithubprofileComponent,
    NotfoundComponent,
    RepositoriesComponent,
    NavbarComponent,
    ShortenPipe,
    RedblackDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
