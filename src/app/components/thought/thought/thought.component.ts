import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-thought',
  standalone: true,
  imports: [
    NgClass
  ],
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

  widthThought(): string {
    if(this.thought.content.length > 256){
      return "pensamento-g";
    }

    return "pensamento-p";
  }
}
