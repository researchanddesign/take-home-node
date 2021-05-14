import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
