import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 140px;
  background: hsl(180, 29%, 50%) url('/static/bg-header-desktop.svg') right;
  background-size: cover;

  @media only screen and (min-width: 1280px) {
    height: 180px;
    background: hsl(180, 29%, 50%) url('/static/bg-header-desktop.svg');
    background-size: cover;
  }

  @media only screen and (min-width: 1480px) {
    height: 180px;
    background: hsl(180, 29%, 50%) url('/static/bg-header-desktop.svg');
    background-size: cover;
  }
`
