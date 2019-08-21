import {User} from "./user.model";
import {Quiz} from "./quiz.model";

export class Offre {
  id: string;
  titre: string;
  description: string;
  type: string;
  departement: string;
  etat: string;
  recruteur: User;
  ville: string;
  quiz: Quiz;
  dateDebut: Date;
  dateAjout: Date;
  days: number;
}
