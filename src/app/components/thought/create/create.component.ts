import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Thought} from "../../../interfaces/thought";
import {ThoughtService} from "../../../services/thought.service";

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

  thought:Thought ={
    content: '',
    author: '',
    model: ''
  };


  constructor(
    private thousService: ThoughtService,
    private router: Router,
  ) {

  }

  ngOnInit(): void
  {

  }

  createThought(): void
  {
    this.thousService.create(this.thought).subscribe(() =>{
      this.router.navigate(['/list']);
    });
  }

  cancelThought(): void
  {
    this.router.navigate(['/list']);
  }
}
