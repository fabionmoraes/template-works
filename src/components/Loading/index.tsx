import React from 'react'
import { Container } from './styles'

export const Loading: React.FC = () => {
  return (
    <Container>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  )
}
