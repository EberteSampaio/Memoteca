import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ThoughtComponent} from "../thought/thought.component";
import {NgForOf, NgIf} from "@angular/common";

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
export class ListComponent {

  listThoughts = [
    // {
    //   content: 'Conteúdo passado do pai para filho',
    //   author: 'Componente pai',
    //   model: 'model2',
    // },
    // {
    //   content: 'I love Alura',
    //   author: 'Eberte Sampaio',
    //   model: 'model1',
    // }
  ];
}
