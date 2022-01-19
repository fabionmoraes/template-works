import { createSlice } from '@reduxjs/toolkit'
import { IWork } from './type'

const store = createSlice({
  name: 'stores',
  initialState: {
    data: [] as IWork[],
    filterWorks: [] as IWork[],
    search: [] as string[],
    loading: false,
  },
  reducers: {
    addWorks: (state, action) => {
      state.data = action.payload
    },
    search: (state, action) => {
      const data = state.filterWorks.length ? state.filterWorks : state.data
      const searchLang = state.search.concat(action.payload)

      const filter = data.filter(item =>
        item.languages.join(', ').includes(searchLang.join(', ')),
      )

      state.search = searchLang
      state.filterWorks = filter
    },
    searchRemove: (state, action) => {
      const lang = action.payload
      const searchIndex = state.search.findIndex(item => item === lang)
      const removeSearch = state.search.slice(0, searchIndex)

      const filter = state.data.filter(item =>
        item.languages.join(', ').includes(removeSearch.join(', ')),
      )

      state.search = state.search.slice(0, searchIndex)
      state.filterWorks = filter
    },
    searchRemoveAll: (state, action) => {
      state.filterWorks = []
      state.search = action.payload
    },
    loading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { addWorks, search, searchRemove, searchRemoveAll, loading } =
  store.actions
export default store.reducer
