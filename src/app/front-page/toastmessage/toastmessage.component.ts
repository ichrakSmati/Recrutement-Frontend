import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'toast-messages',
  templateUrl: './toastmessage.component.html',
  styleUrls: ['./toastmessage.component.scss']
})
export class ToastMessagesComponent implements OnInit {

  messages: any;

  constructor(private toast: ToastService) { }

  ngOnInit() {
    this.messages = this.toast.getMessages()
  }

  dismiss(itemKey) {
    this.toast.dismissMessage(itemKey)
  }
  infoMessage() {
    const message = "I have some useful information for you..."
    this.toast.sendMessage(message, 'info')
  }

}
