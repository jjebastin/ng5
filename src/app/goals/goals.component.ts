import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals=[];
  goalId: number;
  selGoal:string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _data: DataService) {
                //this.route.params.subscribe(params => console.log(params.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals=res);
    this.route.params.subscribe(
      params => {
         let id= +params['id'];
         if(id)
         this.getGoal(id);
      });
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

  getGoal(id){
    this.goals.forEach((element,index) => {
      if(index+1==id)
      {
        this.selGoal=element;
      }
    });
  }

}
