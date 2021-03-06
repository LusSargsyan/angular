import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';



interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;

}


@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) {}

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3rrMKOms4F9ViZ0c12t19LmW3dc-Y-xw',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
    }
}
