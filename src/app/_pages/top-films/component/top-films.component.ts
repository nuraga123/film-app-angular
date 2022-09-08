import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.css']
})
export class TopFilmsComponent implements OnInit {

  moviesList!: IMovie[];

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService
      .getFilms()
      .subscribe(({ data }: any) => {
        const { movies } = data;
        console.log(data)

        this.moviesList = movies.map(
          (item: any) => {
            debugger
            return {
              idIMDB: item.idIMDB,
              title: item.title,
              trailer: item.trailer,
              urlPoster: item.urlPoster
            }
          })
    })
  }
}
