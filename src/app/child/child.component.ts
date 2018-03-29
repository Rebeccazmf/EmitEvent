import { Component, OnInit, Input, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() name;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  
      notify(){
        console.log('Notify clicked...');
        this.notifyParent.emit('Here is an Emit from the Child...');
        alert("Message clicked...");
    }
}
