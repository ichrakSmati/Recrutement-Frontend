import {Role} from './role.model';

export class User {
    id: string;
    nom: string;
    prenom: string
    pass: string;
    role: Role;
    dateNaissance:string;
    photo: string;
    email: string;
}
