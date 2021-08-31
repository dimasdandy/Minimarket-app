import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  @Input() typeName: string = ""
  @Input() label: string = ""
  @Input() model: string = ""
  @Output() modelChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
