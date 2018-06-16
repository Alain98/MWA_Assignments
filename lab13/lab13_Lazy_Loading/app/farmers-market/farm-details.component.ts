import { Component, OnInit, OnDestroy } from '@angular/core';
import { DbService } from './db.service';
import { FarmDetailsGuard } from './farm-details.guard';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farm-details',
  template: `
    <p>
      ##### Details about the Farm  ####
    </p>
    <p>
      Name: {{farm.Farm}}
    </p>
    <p>
      Produce: {{farm.produce}}
    </p>
  `,
  styles: []
})
export class FarmDetailsComponent implements OnDestroy {

  private farm: object;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, db: DbService) {
    this.sub = route.params.subscribe(param => {
      console.log(param['id']);
      this.farm = db.getDataFromId(param['id']);
      console.log(this.farm);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
