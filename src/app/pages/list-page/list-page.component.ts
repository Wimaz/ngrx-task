import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loadList } from 'src/app/state/list/list.actions';
import { selectItems, selectCount, selectStatus } from 'src/app/state/list/list.selectors';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.sass']
})
export class ListPageComponent implements OnInit {

  public itemList$ = this.store.select(selectItems);
  public count$ = this.store.select(selectCount);
  public status$ = this.store.select(selectStatus);
  public loading: boolean = false;
  constructor(private store: Store<AppState>) { }
 
  items: string[] = ['String', 'Other String', 'More String'];

  ngOnInit(): void {
      this.store.dispatch(loadList());
  }
}
