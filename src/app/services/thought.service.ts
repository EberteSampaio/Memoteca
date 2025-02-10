import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Thought} from "../interfaces/thought";
import {Observable} from "rxjs";
import {ThoughtComponent} from "../components/thought/thought/thought.component";

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private  readonly API_URL = "http://localhost:3000/thought";

  constructor(private http: HttpClient) { }

  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API_URL);
  }

  create(thougth: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API_URL, thougth);
  }

  delete(id:number):Observable<Thought> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<Thought>(url);
  }

  findById(id:number): Observable<Thought> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Thought>(url);
  }

  update(thought: Thought): Observable<Thought> {
    const url = `${this.API_URL}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }
}
