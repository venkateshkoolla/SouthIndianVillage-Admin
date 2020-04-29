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
        //let body = JSON.stringify(user);
        // let body = JSON.stringify({
        //     "grant_type": 'password',
        //     "client_id": 'angular_southindianvillage_admin',
        //     client_secret: 'secret',
        //     // username: user.email,
        //     // password: user.password,
        //     scope: 'api.read'
        // });

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
            .pipe(map(response =>response.json()))
            .pipe(catchError(this.handleError));
        console.log("Login response", result);
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

        var applicationError = error.headers.get('Application-Error');

        // either application-error in header or model error in body
        if (applicationError) {
            console.log(applicationError);
            return throwError(applicationError);
        }

        var modelStateErrors: string = '';

        // for now just concatenate the error descriptions, alternative we could simply pass the entire error response upstream
        for (var key in error.error) {
            if (error.error[key]) modelStateErrors += error.error[key].description + '\n';
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        console.log("model state error", modelStateErrors);
        return throwError(modelStateErrors || 'Server error');
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


