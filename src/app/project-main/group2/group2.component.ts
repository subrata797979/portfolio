import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'app-group2',
  templateUrl: './group2.component.html',
  styleUrls: ['./group2.component.css']
})
export class Group2Component implements OnInit {

  group2_projects!: Project[];

  constructor() {
    this.group2_projects = [
      {
        pid!: 1,
        name!: "Angular Todo List",
        start_date!: new Date("2020-05-05"),
        end_date!: new Date("2020-07-17"),
        description!: "Angular SPA (Single Page Application) Todo List for increasing efficiency in our day to day life",
        type!: "Individual",
        role!: "Designing and Developing",
        technology!: "Angular, Router, Bootstrap, Json, LocalStorage",
        conclusion!: "First angular project, got astonished after knowing angular features",
        github!: "https://github.com/subrata797979/angularTodoList",
        image!: "../../../assets/projects/group1/angular.png"
      }
    ]
  }


  ngOnInit(): void {
  }

}
