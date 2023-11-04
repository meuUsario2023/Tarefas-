import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private loggedIn = false;

    login(username: string, password: string): boolean {
        // Implemente a lógica de autenticação aqui.
        // Verifique se as credenciais são válidas.
        // Se forem válidas, defina this.loggedIn como true.
        return this.loggedIn;
    }

    logout(): void {
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }
}
