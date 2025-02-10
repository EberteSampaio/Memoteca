import { Component } from '@angular/core';
import {Thought} from "../../../interfaces/thought";
import {ThoughtService} from "../../../services/thought.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  thought: Thought = {
    content: '',
    author: '',
    model: ''
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.thoughtService.findById(parseInt(id!)).subscribe((thougth) => {
      this.thought = thougth
    });
  }

  editThought():void {
    this.thoughtService.update(this.thought).subscribe();
    this.router.navigate(['/']);
  }

  cancelEdit(){
    this.router.navigate(['/']);
  }
}
