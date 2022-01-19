import React from 'react'

import { Header } from './Header'

import { Container, Content } from './styles'

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />

      <div className="content">
        <Content>{children}</Content>
      </div>
    </Container>
  )
}
