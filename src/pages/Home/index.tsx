import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import {
  fetchWorks,
  searchLanguages,
  searchRemoveLanguages,
  searchRemoveLanguagesAll,
  worksState,
} from 'store/Works/action'

import { Layout } from 'components/Layout'
import { GridList } from 'components/GridList'
import { FilterList } from 'components/FilterList'

export const Home: React.FC = () => {
  const dispatch = useDispatch()

  const { data: works, filterWorks, search, loading } = useSelector(worksState)

  useEffect(() => {
    dispatch(fetchWorks())
  }, []) //eslint-disable-line

  const handleLanguage = (lang: string) => {
    dispatch(searchLanguages(lang))
  }

  const handleRemoveLanguage = (lang: string) => {
    dispatch(searchRemoveLanguages(lang))
  }

  const handleRemoveLanguageAll = () => {
    dispatch(searchRemoveLanguagesAll())
  }

  return (
    <Layout>
      {search.length > 0 && (
        <FilterList
          data={search}
          handleRemove={handleRemoveLanguage}
          handleRemoveAll={handleRemoveLanguageAll}
        />
      )}
      <GridList
        works={filterWorks.length > 0 ? filterWorks : works}
        search={search}
        handleLanguage={handleLanguage}
        loading={loading}
      />
    </Layout>
  )
}
