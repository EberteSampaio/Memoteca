import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{

  thought ={
    id: '1',
    content: 'Aprendendo Angular',
    author: 'Eberte C. S. Junior',
    model: 'model1'
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
