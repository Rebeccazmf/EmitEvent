import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Input() name;
  getNotification(evt) {
    console.log('Message received...'); 
    this.name = "World";
  }
}
