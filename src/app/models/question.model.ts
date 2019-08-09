import {Quiz} from "./quiz.model";
import {Reponse} from "./reponse.model";

export class Question {
  id: string;
  question: string;
  valeur: number;
  active : boolean;
  quiz: Quiz;
  reponses: Reponse[];
}
