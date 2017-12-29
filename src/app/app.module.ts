import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponentComponent } from './dashboard/dashboard-component/dashboard-component.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { UrlservicesComponent } from './urlservices/urlservices.component';
import { HttpClientModule } from '@angular/common/http';
//import { DashboardchildComponent } from './dashboard/dashboardchild/dashboardchild.component';
//import { FilterPipe } from './filter.pipe';


@NgModule({
    declarations: [
    AppComponent,
    ChildComponent,
    WelcomeComponent,
    PagenotfoundComponent,
  //  UrlservicesComponent
  //  FilterPipe
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HttpClientModule,
  //  RouterModule.forRoot([
   // {path: 'welcome',component: WelcomeComponent},
    //{path:  'student/:id',  component: DashboardchildComponent },
    //{path: 'student',component: DashboardComponentComponent},
    //{path: "",redirectTo:'/welcome',pathMatch:'full'},
    //{path: '**',component: PagenotfoundComponent }

    
 // ]),
  ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
