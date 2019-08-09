import {Message} from "../models/message.model";
import {Injectable} from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ToastService {


  constructor(private db: AngularFireDatabase) {

  }

  getMessages() {
    this.db.list('/messages') ;
  }

  sendMessage(content, style) {
    const message = new Message(content, style)
    this.db.list('/messages').push(message)
  }

  dismissMessage(messageKey) {
    this.db.object(`messages/${messageKey}`).update({'dismissed': true})
  }

}
