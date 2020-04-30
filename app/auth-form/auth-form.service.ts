import { Injectable } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from './auth-form.interface';
import { UserRegistration } from './user-registration.interface';

const TOKEN_ENDPOINT: string = "https://localhost:44393/connect/token";
const IDENTITY_SERVER: string = "https://localhost:44393";

@Injectable()
export class AuthFormService {

    private user: User | null;
    constructor(private http: Http) {
    }

    login(user: User): Observable<boolean> {
        this.user = user;
        let body = JSON.stringify(user);
        let headers = new Headers({
            'content-type': 'application/json'
        });
        let options = new RequestOptions(
            {
                headers: headers,
                body: body
            }
        );

        var result = this.http.post(`${IDENTITY_SERVER}/api/Account/Login`, user, options)
            .pipe(map((response: Response) => {
                if (response.ok) {
                    this.user.isAuthenticated = true;
                    return response.ok;
                }
            }))
            .pipe(catchError(this.handleError));
        console.log("Login response", result);
        return result;
    }

    logout(): Observable<string> {
        let headers = new Headers({
            'content-type': 'application/json'
        });
        let options = new RequestOptions(
            {
                headers: headers,
            }
        );
        let result = this.http.get(`${IDENTITY_SERVER}/api/Account/Logout`, options)
            .pipe(map((response: Response) => {
                if (response.ok) {
                    this.user.access_token = '';
                    this.user.isAuthenticated = false
                    return response.text();
                }
            }))
            .pipe(catchError(this.handleError));
        return result;
    }

    isAuthenticated(): boolean {
        return this.user != null && this.user.isAuthenticated ? true : false
    }

    getToken(): Observable<string> {

        let formData = new FormData();
        formData.append('grant_type', 'client_credentials');
        formData.append('client_id', 'angular_southindianvillage_admin');

        console.log("clientid", formData.get('client_id'));
        console.log("grant", formData.get('grant_type'));
        // Do not try to send the headers. 
        var result = this.http.post(`${IDENTITY_SERVER}/connect/token`, formData)
            .pipe(map((response: Response) => {
                this.user.access_token = response.text();
                return response.text()
            }))
            .pipe(catchError(this.handleError));
        return result;
    }

    //https://localhost:44393/api/Account
    register(userRegistration: UserRegistration) {
        let body = JSON.stringify(userRegistration);
        let headers = new Headers({
            'content-type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers,
            body: body
        });

        console.log("userRegistration", body);
        return this.http.post(`${IDENTITY_SERVER}/api/Account`, userRegistration, options)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            //client side error..
            errorMessage = `Error:${error.error.errorMessage}`;
        }
        else {
            // server side error..
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}

export function getClientSettings()//: UserManagerSettings 
{
    return {
        authority: 'https://localhost:44393',
        client_id: 'angular_southindianvillage_admin',
        redirect_uri: 'http://localhost:4001/customers',
        post_logout_redirect_uri: 'http://localhost:4001/',
        response_type: "id_token token",
        scope: "openid profile email api.read",
        filterProtocolClaims: true,
        loadUserInfo: true,
        automaticSilentRenew: true,
        silent_redirect_uri: 'http://localhost:4001/silent-refresh.html',
        //        userStore: new WebStorageStateStore({ store: window.localStorage })

    };
}


