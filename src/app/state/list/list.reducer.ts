import { createReducer, on } from "@ngrx/store";
import type { List } from "src/app/types/list.type";
import { addItem, removeItem, loadList, loadError, loadSuccess} from "./list.actions";


export interface ListState {
    list: List;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'loaded';
}

export const initialState: ListState = {
    list: {
        items: [],
        count: 0
    },
    error: null,
    status: 'pending'
}

export const listReducer = createReducer(
    initialState,
    on(addItem, (state, { item }) => ({ 
        ...state, 
        list: { 
            items: [...state.list.items, item], 
            count: state.list.count + 1 
        } 
    })),
    on(removeItem, (state, { item }) => ({
        ...state, 
        list: { 
            items: [...state.list.items.filter(t => t !== item)], 
            count: state.list.count - 1 
        }
    })),
    on(loadList, (state) => ({ ...state, status: 'loading' })),
    on(loadSuccess, (state, { items, count }) => { return ({
        ...state,
        list: {
            items: items,
            count: count
        },
        error: null,
        status: 'loaded'
    })}),
    on(loadError, (state, {error}) => ({
        ...state,
        error: error,
        status: 'error'
    }))
)

