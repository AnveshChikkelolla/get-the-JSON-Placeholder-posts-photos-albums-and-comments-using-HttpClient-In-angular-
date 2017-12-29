import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";




@Injectable()

export class GithubAuthIntercepter implements HttpInterceptor {

intercept ( req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
 
     const authReq=req.clone({
         headers:req.headers.set ('Authorization','token 7041f767e9a9d44a85416ae936d8e7c042b9402f')

     } );
 
    return next.handle(authReq);


}

}
