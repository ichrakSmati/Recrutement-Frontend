import {Questioon} from "./question.model";

export class Reponse {
  id: string;
  reponse: string;
  validate: boolean;
  active: boolean;
  question: Questioon;
}
