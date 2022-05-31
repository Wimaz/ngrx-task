import { createAction, props  } from '@ngrx/store'




export const loadTest = createAction('[TEST] LOAD TEST')
export const loadSuccess = createAction('[TEST] Load Successful', props<TestObj>())
