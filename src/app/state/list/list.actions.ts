
import { createAction, props } from "@ngrx/store";
import { List } from "src/app/types/list.type";

export const addItem = createAction('[List] Add Item', props<{item: string}>());
export const removeItem = createAction('[List] Remove Item', props<{ item: string }>());
export const loadList = createAction('[List] Loading...');
export const loadSuccess = createAction('[List] Loaded!', props<{items: string[], count: number}>());
export const loadError = createAction('[List] idk something bad happened :(', props<{error: string}>());