import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IndexListsComponent } from './components/index-lists.component';
import { ListsService } from './services/lists.service';
import { ListsGetResolverService } from './services/lists-get-resolver.service';
import { ViewListComponent } from './components/view-list.component';

@NgModule({
	imports: [MatTableModule, RouterModule, MatButtonModule],
	declarations: [IndexListsComponent, ViewListComponent],
	providers: [ListsService, ListsGetResolverService],
	exports: []
})
export class ListsModule {}
