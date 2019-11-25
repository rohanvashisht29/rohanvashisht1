import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MessageComponent } from './message/message.component';
import { MessageSecondComponent } from './message-second/message-second.component';
import { RouterModule, Routes } from '@angular/router';

// added for msg
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'message-one', component: MessageComponent },
  { path: 'message-second', component: MessageSecondComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    BlogComponent,
    PortfolioComponent,
    MessageComponent,
    MessageSecondComponent

  ],
  imports: [
    BrowserModule,

    // added for msg
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
