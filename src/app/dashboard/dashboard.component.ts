import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { State } from 'src/app/models/State.module'
import { Park } from 'src/app/models/Park.module'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  states = [];
  parks = [];
  private req: any
  url: string = '/getData/'
  selectedStateId: number;

  constructor(private http:Http) { }

  ngOnInit() {
    this.req = this.http.get(this.url).subscribe(data => {
      console.log(data.json())
      this.states = data.json() as [State]
    })
  }

  getParks(){
    this.req = this.http.get('/getParkByState/?stateId=' + this.selectedStateId.toString()).subscribe(data => {
      console.log(data);
      console.log(data.json())
      this.parks = data.json() as [Park]
    })
  }

}
