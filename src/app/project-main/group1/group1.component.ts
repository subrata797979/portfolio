import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'app-group1',
  templateUrl: './group1.component.html',
  styleUrls: ['./group1.component.css']
})
export class Group1Component implements OnInit {

  group1_projects!: Project[];

  constructor() { 
    this.group1_projects = [
      {
        pid!: 1,
        name!: "Demo1",
        start_date!: new Date("2019-01-16"),
        end_date!: new Date("2019-03-12"),
        description!: "This is a demo project",
        type!: "Group",
        role!: "Developed the forntend of the application",
        technology!: "Java SpringBoot",
        conclusion!: "This have many real time component for data gathering",
        github!: "www.google.co.in"
      },
      {
        pid!: 1,
        name!: "Demo1",
        start_date!: new Date("2019-01-16"),
        end_date!: new Date("2019-03-12"),
        description!: "This is a demo project",
        type!: "Group",
        role!: "Developed the forntend of the application",
        technology!: "Java SpringBoot",
        conclusion!: "This have many real time component for data gathering",
        github!: "www.google.co.in"
      },
      {
        pid!: 1,
        name!: "Demo1",
        start_date!: new Date("2019-01-16"),
        end_date!: new Date("2019-03-12"),
        description!: "This is a demo project",
        type!: "Group",
        role!: "Developed the forntend of the application",
        technology!: "Java SpringBoot",
        conclusion!: "This have many real time component for data gathering",
        github!: "www.google.co.in"
      },
      {
        pid!: 1,
        name!: "Demo1",
        start_date!: new Date("2019-01-16"),
        end_date!: new Date("2019-03-12"),
        description!: "This is a demo project",
        type!: "Group",
        role!: "Developed the forntend of the application",
        technology!: "Java SpringBoot",
        conclusion!: "This have many real time component for data gathering",
        github!: "www.google.co.in"
      }
    ]
  }

  ngOnInit(): void {
  }

}
