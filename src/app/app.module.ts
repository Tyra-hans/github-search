import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpModule } from '@angular/http';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RepositoriesComponent} from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GithubprofileComponent,
    NotfoundComponent,
    RepositoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
