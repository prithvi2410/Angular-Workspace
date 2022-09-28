import { AuthGaurdService } from './AuthGaurd.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
})
export class RoutingComponent implements OnInit {
  id: number = 0;
  role: boolean = false;
  service: AuthGaurdService;

  codeExample1:string=`
  app-routing.module.ts :

  {path : 'authGaurd-component',component : AuthGaurdComponent, canActivate:[AuthGaurdService]},

  AuthGaurd.service.ts :

  @Injectable()
  export class AuthGaurdService implements CanActivate
  {
    role:boolean=false;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
      return this.role
    }

    //other code...
  }
  `;

  codeExample2:string=`
  app-routing.module.ts :

  {
    path : 'routing-component/:id', component : RoutingComponent, children:[ {path : 'child-route',component : RoutingChildComponent} ]
  }`;

  codeExample3:string=`
  routing.component.html:
  
  <input [routerLink]="['child-route']" type="button" value="click for child route">`;


  constructor(
    private _ActivatedRoute: ActivatedRoute,
    service: AuthGaurdService
  ) {
    this.service = service;
  }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params) => (this.id = params['id']));
  }
  setRole() {
    this.service.setRole(this.role);
  }
}
