import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {AppState} from 'src/app/state/app.state';
import { addItem  } from '../../state/list/list.actions'

@Component({
  selector: 'app-add-item',
  template: `
    <mat-card>
      <mat-card-title>
          Add
      </mat-card-title>
      <mat-card-subtitle>
          Add an item to list
      </mat-card-subtitle>
      <mat-card-content>
          <mat-form-field [formGroup]="itemForm">
              <input matInput formControlName="item">
          </mat-form-field>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="accent" (click)='add()' >Save</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
  ]
})
export class AddItemComponent implements OnInit {

  textList: string[] = [];
  loading: boolean = false;

  itemForm: FormGroup;

  get item(): string {
    return this.itemForm.get('item')?.value;
  }
  set item (value: string) {
    this.itemForm.get('item')?.setValue(value);
  }

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { 
    this.itemForm = this.fb.group({ item: '' });
  }

  ngOnInit(): void {
  
  }

  add() {      
      this.store.dispatch(addItem({item: this.item}));
      this.item = '';
  }
}
