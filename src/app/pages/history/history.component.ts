import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgxTypedJsModule } from 'ngx-typed-js';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { ApiCallService } from '../../services/api-call.service';
//import { LiveMatchCardComponent } from '../../components/live-match-card/live-match-card.component';

@Component({
  selector: 'app-all-matches',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})



export class HistoryComponent  implements OnInit {
loading=false
  allMatches: any;

  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
   this.loadMatchHistory()
  }
  loadMatchHistory(){

    this._api.getAllMatches()
    .subscribe({
      next:data=>{
        this.allMatches=data;
      }
    })

  }


}

