import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .content {
    display: block;
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 60px auto;
`
export const Grid = styled.div`
  display: block;
  width: 100%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 18px 2px rgba(94, 164, 162, 0.4);
`
