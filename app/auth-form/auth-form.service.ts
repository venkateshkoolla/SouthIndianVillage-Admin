import {Injectable} from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const AUTH_API: string  = "https://localhost:44395/login";

@Injectable()
export class AuthFormService{
    
    constructor(private http: Http){

    }
    getAccessToken(Email: string) : Observable<string>{
        let body = JSON.stringify({ Email });

        let headers = new Headers({
            'content-type': 'application/json; charset=utf8'
        });
        // let options = new RequestOptions(
        //    {headers : headers}
        // );
        console.log("request",this.http.request);
        return this.http.post(`${AUTH_API}`, body, {
            headers: headers
          })
        .pipe(map((response: Response) => response.json()))
    }
}