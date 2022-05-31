import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ListState } from './list.reducer';
import { AppState } from '../app.state'


export const selectList = (state: AppState) => state.ListFeature;

export const getListState = createFeatureSelector<ListState>('ListFeature')

export const getter = createSelector(
    selectList,
    getListState
)
export const selectCount = createSelector(
    getter,
    (state: ListState) => state.list.count
)
export const selectItems = createSelector(
    getter,
    (state: ListState) => state.list.items
)

export const selectStatus = createSelector(
    selectList,
    (state: ListState) => state.status
)

export const selectError = createSelector(
    selectList,
    (state: ListState) => state.error
)

