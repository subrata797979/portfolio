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
        name!: "Spring Boot Student CRUD API with Separate Frontend",
        start_date!: new Date("2022-01-05"),
        end_date!: new Date("2022-02-12"),
        description!: "A simple Java Spring Boot Rest API for Create, Read, Delete and Update operations on Students with Separate Frontend",
        type!: "Individual",
        role!: "Fullstack Developer, developing from scratch",
        technology!: "Java Spring Boot Framwork, HTML, CSS, JS, Bootstrap",
        conclusion!: "A challenging project for understanding REST API calls",
        github!: "https://github.com/subrata797979/12_StudentAPI_CRUD_Backend",
        image!: "../../../assets/projects/group1/springBoot.png"
      },
      {
        pid!: 2,
        name!: "College Gate Website",
        start_date!: new Date("2018-01-05"),
        end_date!: new Date("2018-04-17"),
        description!: "A website for guiding student to choose best college",
        type!: "Group",
        role!: "Frontend and Database Management",
        technology!: "HTML, CSS, JS, PHP",
        conclusion!: "A good team work is always the key",
        github!: "https://github.com/subrata797979/21_CollegeGate",
        image!: "../../../assets/projects/group1/php.png"
      },
      {
        pid!: 1,
        name!: "Spring Boot Student CRUD API with Separate Frontend",
        start_date!: new Date("2022-01-05"),
        end_date!: new Date("2022-02-12"),
        description!: "A simple Java Spring Boot Rest API for Create, Read, Delete and Update operations on Students with Separate Frontend",
        type!: "Individual",
        role!: "Fullstack Developer, developing from scratch",
        technology!: "Java Spring Boot Framwork, HTML, CSS, JS, Bootstrap",
        conclusion!: "A challenging project for understanding REST API calls",
        github!: "https://github.com/subrata797979/12_StudentAPI_CRUD_Backend",
        image!: "../../../assets/projects/group1/springBoot.png"
      },
      {
        pid!: 2,
        name!: "College Gate Website",
        start_date!: new Date("2018-01-05"),
        end_date!: new Date("2018-04-17"),
        description!: "A website for guiding student to choose best college",
        type!: "Group",
        role!: "Frontend and Database Management",
        technology!: "HTML, CSS, JS, PHP",
        conclusion!: "A good team work is always the key",
        github!: "https://github.com/subrata797979/21_CollegeGate",
        image!: "../../../assets/projects/group1/php.png"
      }
    ]
  }

  ngOnInit(): void {
  }

}
