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
        github!: "https://github.com/subrata797979/100_angularTodoList",
        image!: "../../../assets/projects/group1/angular.png"
      },
      {
        pid!: 2,
        name!: "Angular Date Store App (Birthday Reminder)",
        start_date!: new Date("2021-07-11"),
        end_date!: new Date("2020-08-24"),
        description!: "Angular Date Store App that remindes and store birthday",
        type!: "Individual",
        role!: "Designing and Developing",
        technology!: "Angular, Router, Bootstrap, Json, LocalStorage",
        conclusion!: "Improvement over Angular Todo List app",
        github!: "https://github.com/subrata797979/200_DateStore_BirthDay",
        image!: "../../../assets/projects/group1/angular.png"
      },
      {
        pid!: 3,
        name!: "Java EE App (1. DateStore  GUI, 2. Calculator) using JDBC",
        start_date!: new Date("2021-08-02"),
        end_date!: new Date("2021-08-21"),
        description!: "Simple Java GUI app using Java Swing and JDBC",
        type!: "Individual",
        role!: "Frontend, Backend Design and Implementation",
        technology!: "Java EE, Java Swing, JDBC, AWT",
        conclusion!: "Learned Manual JDBC connections without ORM and Design using Javax Swing",
        github!: "https://github.com/subrata797979/JavaDesktop/tree/main/JavaSwing",
        image!: "../../../assets/projects/group2/java.png"
      }
    ]
  }


  ngOnInit(): void {
  }

}
