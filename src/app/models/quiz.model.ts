import {Question} from "./question.model";

export class Quiz {
  id: number;
  titre: string;
  type : string;
  active : boolean;
  questions: Question[];
}
