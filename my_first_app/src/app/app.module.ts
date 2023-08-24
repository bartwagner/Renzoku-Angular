import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent }  from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, CustomersModule, SharedModule, CoreModule ],
  declarations: [ AppComponent  ],
  bootstrap:    [ AppComponent  ]
})
export class AppModule {}