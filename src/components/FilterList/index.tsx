import React from 'react'
import { Slide } from 'react-awesome-reveal'

import { GridLayout } from 'components/Layout/grid'

import { Container } from './styles'

interface IFilterList {
  data: string[]
  handleRemove(event: string): void
  handleRemoveAll(): void
}

export const FilterList: React.FC<IFilterList> = ({
  data,
  handleRemove,
  handleRemoveAll,
}) => {
  return (
    <Slide>
      <Container>
        <GridLayout>
          <div className="content">
            <ul>
              {data.map((item, index) => (
                <li key={String(index)}>
                  {item}{' '}
                  <button type="button" onClick={() => handleRemove(item)}>
                    <img src="/static/icon-remove.svg" alt="Clear" />
                  </button>
                </li>
              ))}
            </ul>

            <button type="button" className="clear" onClick={handleRemoveAll}>
              Clear
            </button>
          </div>
        </GridLayout>
      </Container>
    </Slide>
  )
}
