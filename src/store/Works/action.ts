import { api } from 'services/api'
import { AppDispatch, AppThunk, RootState } from 'store'
import { addWorks, search, searchRemove, searchRemoveAll, loading } from '.'

export function fetchWorks(): AppThunk {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(loading(true))
      const response = await api.get('works')

      dispatch(addWorks(response.data))
    } catch (err: any) {
      console.log(err.response)
    } finally {
      dispatch(loading(false))
    }
  }
}

export function searchLanguages(lang: string): AppThunk {
  return function (dispatch: AppDispatch) {
    dispatch(search(lang))
  }
}

export function searchRemoveLanguages(lang: string): AppThunk {
  return function (dispatch: AppDispatch) {
    dispatch(searchRemove(lang))
  }
}

export function searchRemoveLanguagesAll(): AppThunk {
  return function (dispatch: AppDispatch) {
    dispatch(searchRemoveAll([]))
  }
}

export const worksState = (state: RootState) => state.works
