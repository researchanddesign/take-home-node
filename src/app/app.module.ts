import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TodosModule } from './todos/todos.module';
import { ListsModule } from './lists/lists.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorHandlerService } from './_shared/services/error-handler.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatSidenavModule,
		MatListModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatTableModule,
		ListsModule,
		TodosModule
	],
	providers: [ErrorHandlerService],
	bootstrap: [AppComponent]
})
export class AppModule {}
