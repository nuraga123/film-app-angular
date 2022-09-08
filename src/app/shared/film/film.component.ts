import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input()
  film!: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
