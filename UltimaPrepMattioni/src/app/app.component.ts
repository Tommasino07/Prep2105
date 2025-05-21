import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vegetable } from './vegetables.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VegetableListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UltimaPrepMattioni';
  vegetableList!: Vegetable[]
  o!:Observable<Vegetable[]>
  loading:boolean =false

  constructor(public http: HttpClient){}

  makeRequest(){
    this.loading = true
    this.o = this.http.get<Vegetable[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure")
    this.o.subscribe(data => this.getData(data))
  }
  getData(d: Vegetable[]){
    this.vegetableList = d
    console.log(this.vegetableList)
    this.loading = false
  }
  ngOnInit(): void {
    this.makeRequest()
  }


}
