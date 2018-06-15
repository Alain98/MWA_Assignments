import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class FarmDetailsGuard implements CanActivate {

  constructor(private router: Router, private db: DbService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (next.params['id']) {
      if (this.db.getDataFromId(next.params['id'])) {
        return true;
      }
      else {
        this.router.navigate(['error']);
      }
    }
    else {
      this.router.navigate(['error']);
    }
  }
}
