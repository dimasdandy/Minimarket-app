import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() typeName : string = "text"
  @Input() model : string = ""
  @Output() modelChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
