import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private tarefa = false;

    task(tarefa: string, descricao: string): boolean {
        // Implemente a lógica de autenticação aqui.
        // Verifique se as credenciais são válidas.
        // Se forem válidas, defina this.loggedIn como true.
        return this.tarefa;
    }

}
