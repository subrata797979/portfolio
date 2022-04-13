import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {

  @Input() 
  pobj!: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
