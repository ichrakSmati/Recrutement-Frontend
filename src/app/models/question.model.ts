import {Quiz} from "./quiz.model";

export class Questioon {
  id: string;
  question: string;
  valeur: number;
  active : boolean;
  quiz: Quiz;
}
