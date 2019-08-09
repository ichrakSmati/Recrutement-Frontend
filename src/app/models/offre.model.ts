import {User} from "./user.model";

export class Offre {

  id: string;
  titre: string;
  description:string;
  type: string;
  departement:string;
  etat: boolean;
  recruteur: User;
}
