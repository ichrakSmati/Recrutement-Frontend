import {Question} from "./question.model";

export class Reponse {
  id: string;
  reponse: string | number | string[];
  validate: boolean;
  active: boolean;
  question: Question;
}
