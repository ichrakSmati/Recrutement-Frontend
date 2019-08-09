import {User} from "./user.model";
import {Offre} from "./offre.model";
import {Choixdate} from "./choixdate.model";

export class Demande {

  id: string;
  lettreMotivation: string;
  date: string;
  etat: string;
  candidat: User;
  offre: Offre;
  Choixdate:Choixdate;
}
