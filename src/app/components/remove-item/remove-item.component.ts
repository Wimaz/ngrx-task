import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { removeItem } from 'src/app/state/list/list.actions';
import { selectItems } from 'src/app/state/list/list.selectors';


@Component({
  selector: 'app-remove-item',
  template: `
  <mat-card>
    <mat-card-title>Removals</mat-card-title>
    <mat-card-subtitle>Say your goodbyes</mat-card-subtitle>
    <mat-card-content>
        <mat-list>
            <mat-list-item *ngFor="let item of itemList$ | async">
                <span>
                    <p>{{ item }}</p>
                    <button mat-button color="warn" (click)="remove(item)"><span class="material-icons">remove_circle</span></button>
                </span>
            </mat-list-item>
        </mat-list>
    </mat-card-content>
  </mat-card>
  `,
  styles: [
    `span
      display: flex
      justify-content: space-between
      align-items: center
      width: 100%
      p
        margin: 0
    `
  ]
})
export class RemoveItemComponent implements OnInit {

  public itemList$ = this.store.select(selectItems);

  constructor(private store: Store<AppState>) { }

  items: string[] = ['Item', 'Another Item'];

  ngOnInit(): void {
  }

  remove(item: string){
    this.store.dispatch(removeItem({item}))
  }

}
