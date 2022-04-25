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
        name!: "Spring Boot Student CRUD API Backend",
        start_date!: new Date("2022-01-05"),
        end_date!: new Date("2022-02-12"),
        description!: "A simple Java Spring Boot Rest API for Create, Read, Delete and Update operations on Students",
        type!: "Individual",
        role!: "Developing REST API for CRUD operations and storing in database",
        technology!: "Java Spring Boot Framwork, Spring Data JPA and Spring AOP",
        conclusion!: "A challenging project for developing REST API",
        github!: "https://github.com/subrata797979/12_StudentAPI_CRUD_Backend",
        image!: "../../../assets/projects/group1/springBoot.png"
      },
      {
        pid!: 2,
        name!: "Spring Boot Student CRUD Frontend",
        start_date!: new Date("2022-01-05"),
        end_date!: new Date("2022-02-12"),
        description!: "Responsive HTML, CSS, JS frontend for Spring Boot Student CRUD API Backend",
        type!: "Individual",
        role!: "DOM manipulation and request to Rest endpoints using javascript Fetch API",
        technology!: "HTML, CSS, Javascript, Bootstrap",
        conclusion!: "Gathered knowledge of Dynamic content loading and fetch calls",
        github!: "https://github.com/subrata797979/11_StudentAPI_CRUD_Frontend",
        image!: "../../../assets/projects/group1/htmlcssjs.png"
      },
      {
        pid!: 3,
        name!: "College Gate Website",
        start_date!: new Date("2018-01-05"),
        end_date!: new Date("2018-04-17"),
        description!: "A website for guiding student to choose best college",
        type!: "Group",
        role!: "Some parts of Frontend, some parts of Backend and Database Management",
        technology!: "HTML, CSS, JS, PHP",
        conclusion!: "A good team work is always the key",
        github!: "https://github.com/subrata797979/21_CollegeGate",
        image!: "../../../assets/projects/group1/php.png"
      },
      {
        pid!: 4,
        name!: "Book Management Backend",
        start_date!: new Date("2021-06-11"),
        end_date!: new Date("2021-07-29"),
        description!: "Book Management System built on Node js backend and MongoDB as database management system",
        type!: "Individual",
        role!: "Developing data flow and internal API",
        technology!: "Node Js, MongoDB, Express Js, Mongoose",
        conclusion!: "Quick development and implementation is the strongest side of Node",
        github!: "https://github.com/subrata797979/42_Book_Management_Backend",
        image!: "../../../assets/projects/group1/node.jpg"
      },
      {
        pid!: 5,
        name!: "Book Management Frontend",
        start_date!: new Date("2021-07-23"),
        end_date!: new Date("2021-08-12"),
        description!: "Responsive Angular frontend for Book Management Backend",
        type!: "Individual",
        role!: "UI/UX design, dashboard design and management, data visualization using chart js, providing HTTP services",
        technology!: "Angular, Angular Material, Angular Form, Angular Animations, Chart Js, RXJS",
        conclusion!: "Elegent UI/UX design and modularity provided by Angular is incomparable",
        github!: "https://github.com/subrata797979/41_Book_Management_Frontend",
        image!: "../../../assets/projects/group1/angular.png"
      },
      {
        pid!: 6,
        name!: "Hospital Management System with COVID module and Dark mode",
        start_date!: new Date("2021-05-02"),
        end_date!: new Date("2021-07-09"),
        description!: "Vanila PHP frontend and backend HMS, Mysql as database",
        type!: "Group",
        role!: "Some parts of Frontend, some parts of Backend and Database Management",
        technology!: "HTML, CSS, Javascript, Bootstrap, PHP, Mysql",
        conclusion!: "Embedding php with HTML and managing modularity is indeed tough but having a good control over develompnet is a strong point for php",
        github!: "https://github.com/subrata797979/51_Hospital_Management_System",
        image!: "../../../assets/projects/group1/php.png"
      }
    ]
  }

  ngOnInit(): void {
  }

}
