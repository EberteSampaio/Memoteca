import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ThoughtComponent} from "../thought/thought.component";
import {NgForOf, NgIf} from "@angular/common";
import {Thought} from "../../../interfaces/thought";
import {ThoughtService} from "../../../services/thought.service";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink,
    ThoughtComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  listThoughts:Thought[] = [];

  constructor(private thoughtService: ThoughtService) {}

  ngOnInit() {
    this.thoughtService.list().subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }
}
