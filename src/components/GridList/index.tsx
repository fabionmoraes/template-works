import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

import { IWork } from 'store/Works/type'

import { GridLayout } from 'components/Layout/grid'

import { Grid, List } from './styles'
import { Loading } from 'components/Loading'

interface IGridList {
  works: IWork[]
  search: string[]
  loading: boolean
  handleLanguage(event: string): void
}

export const GridList: React.FC<IGridList> = ({
  works,
  search,
  loading,
  handleLanguage,
}) => {
  return (
    <Grid>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <Fade>
          {works.map((work, index) => (
            <GridLayout key={String(index)}>
              <List featured={work.featured}>
                <Link to="/">
                  <div className="logo-description">
                    <div className="logo">
                      <img src={work.logo} alt={work.company} />
                    </div>
                    <div className="description">
                      <div className="sub-title">
                        {work.company}{' '}
                        <div className="tags">
                          {work.new && <span className="new">NEW!</span>}
                          {work.featured && (
                            <span className="featured">FEATURED</span>
                          )}
                        </div>
                      </div>
                      <div className="title">{work.position}</div>
                      <div className="footer">
                        <ul>
                          <li>{work.postedAt}</li>
                          <li>{work.contract}</li>
                          <li>{work.location}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid-languages">
                    {work.languages.map((lang, i) => (
                      <button
                        type="button"
                        key={String(i)}
                        onClick={() => handleLanguage(lang)}
                        disabled={search.includes(lang)}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </Link>
              </List>
            </GridLayout>
          ))}
        </Fade>
      )}
    </Grid>
  )
}
