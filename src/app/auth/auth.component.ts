import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})


export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmitForm(form: NgForm) {
        if (!form.valid) {
            return;
        }

        const email = form.value.email;
        const password = form.value.password;

        this.isLoading = true;

        this.authService.signUp(email, password)
            .subscribe(
                resData => {
                    this.isLoading = false;
                    console.log(resData);
                },
                errorRes => {
                    switch (errorRes.error.error) {
                        case 'EMAIL_EXISTS':
                            this.error = 'The email address is already in use';
                    }
                    this.isLoading = false;

                }
            );

        form.reset();
    }
}
