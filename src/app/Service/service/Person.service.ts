import { Injectable } from "@angular/core";
import { Person } from "./Person";

//@Injectable({providedIn:'root'})
export class PersonService
{
  getPersons():Person[]
  {
    let persons:[Person];
    persons=[new Person('prithvi',23)];
    persons.push(new Person('vinoth',24))
    return persons;
  }
}
