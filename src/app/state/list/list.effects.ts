import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from '../app.state';
import { ApiService } from '../../api.service'
import { loadList, loadSuccess, loadError, addItem, removeItem } from "./list.actions";
import { selectCount, selectItems } from "./list.selectors";
import { from, of } from "rxjs";
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class ListEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private api: ApiService
    ) { }

    loadList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadList),
            switchMap(() =>
                from(this.api.getItems()).pipe(
                    map((items: string[]) => {                        
                        return loadSuccess({ items: items, count: items.length })
                    }),
                    catchError((error) => of(loadError({ error })))
                )
            )
        )
    );
    saveList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addItem, removeItem),
            switchMap(() =>
                from(this.api.saveItems(this.store.select(selectItems))).pipe(
                    map((items: string[]) => {
                        return loadSuccess({ items: items, count: items.length })
                    }),
                    catchError((error) => of(loadError({ error })))
                )
            )
        ), {dispatch: false}
    );
}
