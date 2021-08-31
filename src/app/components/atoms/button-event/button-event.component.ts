import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-event',
  templateUrl: './button-event.component.html',
  styleUrls: ['./button-event.component.css']
})
export class ButtonEventComponent implements OnInit {

@Input() label : string = ""
@Input() btnClass : string = ""
@Output() click = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick(): void {
    this.click.emit()
  }

}
