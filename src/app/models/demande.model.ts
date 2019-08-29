import {User} from "./user.model";
import {Offre} from "./offre.model";
import {Resultatquiz} from "./resultatquiz.model";

export class Demande {

  id: string;
  lettreMotivation: string;
  date: string;
  etat: string;
  candidat: User;
  offre: Offre;
  dateEntretien: Date;
  resultatQuiz: Resultatquiz;
}
