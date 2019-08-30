import {User} from "./user.model";
import {Offre} from "./offre.model";
import {Resultatquiz} from "./resultatQuiz.models";

export class Demande {

  id: string;
  lettreMotivation: string;
  datePostulation: Date;
  etat: string;
  candidat: User;
  offre: Offre;
  dateEntretien: Date;
  resultatQuiz: Resultatquiz;
}
