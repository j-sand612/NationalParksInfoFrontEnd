import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { State } from 'src/app/models/State.module'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  states = [];
  private req: any
  url: string = '/getData/'

  constructor(private http:Http) { }

  ngOnInit() {
    this.req = this.http.get(this.url).subscribe(data => {
      console.log(data.json())
      this.states = data.json() as [State]
    })
  }

}
