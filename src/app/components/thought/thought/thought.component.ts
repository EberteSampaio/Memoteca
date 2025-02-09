import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-thought',
  standalone: true,
  imports: [],
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css'
})
export class ThoughtComponent implements OnInit {

  @Input() thought ={
    content: "I love Alura",
    author: "Eberte Sampaio",
    model: "model1"
  }

  constructor() {

  }

  ngOnInit() {

  }
}
