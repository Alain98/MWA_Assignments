import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { CommonModule } from '@angular/common';
import { FarmsComponent } from './farms.component';
import { FarmDetailsComponent } from './farm-details.component';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';
export const FARMS_ROUTES = [
    { path: '', component: FarmsComponent },
];
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'farms', component: FarmsComponent },
            { path: 'farm-details/:id', component: FarmDetailsComponent },
            { path: 'farm-details', component: ErrorComponent },
            { path: '**', redirectTo: '/' }
        ])
    ],
    declarations: [FarmsComponent, FarmDetailsComponent, ErrorComponent]
})
export class FarmersMarketModule { }
