import { Injectable } from '@angular/core';
 import { CanActivate, ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
                                                               
@Injectable()
                                                               
   export class AuthenticationService implements CanActivate {
  constructor( private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
                                                               
     let id=(route.params['id']);
     if(id >= 5) { 
                alert("no permission to access data  because it's id is greater 5 ");
                this.router.navigate(['/welcome']);  
                return false;
                 }
                 return true;
                                                               
         //throw new Error("Method not implemented.");
      }
                                                                
    }
                                                                                                                           