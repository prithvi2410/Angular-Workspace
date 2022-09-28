import { PersonService } from './Person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  //providers:[PersonService],
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {

  persons: Person[] = [];
  personService: PersonService;

  constructor(service:PersonService) {
    this.personService=service;
   }

  ngOnInit(): void {
  }
  getService()
  {
    this.persons=this.personService.getPersons();
  }

}
