import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-form',
  templateUrl: './label-form.component.html',
  styleUrls: ['./label-form.component.css']
})
export class LabelFormComponent implements OnInit {

  @Input() label: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
