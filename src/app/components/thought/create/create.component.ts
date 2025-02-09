import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{

  thought ={
    id: '',
    content: '',
    author: '',
    model: ''
  };


  constructor() {

  }

  ngOnInit(): void
  {

  }

  createThought(): void
  {
    alert("Created Thought");
  }


  cancelThought(): void
  {
    alert("Canceled Thought");
  }
}
