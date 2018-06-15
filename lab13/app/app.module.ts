import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FarmersMarketModule, EAGER_ROUTES } from './farmers-market/farmers-market.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FarmersMarketModule,
    RouterModule.forRoot(EAGER_ROUTES)
    /*RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'eager', children: EAGER_ROUTES }
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
