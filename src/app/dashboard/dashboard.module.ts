import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { DashboardchildComponent } from './dashboardchild/dashboardchild.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AuthenticationService } from './authentication.service';
import { StudentServiceService } from './student-service.service';
import { AddColorDirective } from './add-color.directive';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { HttpurlserviceService } from './servicecomponent/httpurlservice.service';
import { JsonplaceholderUsersComponent } from './jsonplaceholder-users/jsonplaceholder-users.component';
import { HttpJsonUserService } from './jsonplaceholder-users/http-json-user.service';
import { InterceptorExampleComponent } from './interceptor-example/interceptor-example.component';
import { GithubAuthIntercepter } from './interceptor-example/github-auth-intercepter';
import { GithubIntercepterService } from './interceptor-example/github-intercepter.service';
import { PaginationService } from './pagination.service';
import { PlaceholdercommentsComponent } from './placeholdercomments/placeholdercomments.component';
import { HttpcommentsService } from './placeholdercomments/httpcomments.service';
//import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
        {path:  'student/:id',  component: DashboardchildComponent,canActivate : [AuthenticationService] },
        {path: 'welcome',component: WelcomeComponent},
        {path: 'student',component: DashboardComponentComponent},
        {path:'Imagealbum', component :ServicecomponentComponent},
        {path:'JsonUsers',component:JsonplaceholderUsersComponent},
        {path:'Posts',component:InterceptorExampleComponent},
        {path:'Comments',component: PlaceholdercommentsComponent},  
        {path: "",redirectTo:'/welcome',pathMatch:'full'},
        {path: '**',component: PagenotfoundComponent },
        
    ]),
    HttpClientModule
  ],
  declarations: [DashboardComponentComponent, FilterByNamePipe, DashboardchildComponent, AddColorDirective, ServicecomponentComponent, JsonplaceholderUsersComponent, InterceptorExampleComponent, PlaceholdercommentsComponent],
  exports:[DashboardComponentComponent,FilterByNamePipe,  FormsModule,RouterModule,
],
providers: [AuthenticationService,StudentServiceService,HttpurlserviceService,HttpJsonUserService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: GithubAuthIntercepter,
    multi:true
  },
  HttpcommentsService,
GithubIntercepterService,PaginationService



]
})
export class DashboardModule {


 }

 