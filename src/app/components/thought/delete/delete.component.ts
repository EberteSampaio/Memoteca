import {Component, OnInit} from '@angular/core';
import {ThoughtService} from "../../../services/thought.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Thought} from "../../../interfaces/thought";

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit{
  thought:Thought ={
    content: '',
    author: '',
    model: ''
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.thoughtService.findById(id).subscribe(thought => {
      this.thought = thought;
    });
  }

  deleteThought(): void {
    if (this.thought.id){
      this.thoughtService.delete(this.thought.id).subscribe(() =>{});
      this.router.navigate(['/']);
    }
  }

  cancelThought(): void {
    this.router.navigate(['/']);
  }
}
