import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: -94px;
  margin-bottom: 60px;

  .content {
    display: flex;
    justify-content: space-between;
    padding: 24px;

    ul {
      display: flex;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        padding-left: 14px;
        border-radius: 4px;
        background: #eef6f6;
        font-size: 14px;
        color: hsl(180, 29%, 50%);
        font-weight: 700;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: hsl(180, 29%, 50%);
          width: 28px;
          height: 28px;
          margin-left: 8px;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;

          &:hover {
            background: #000;
          }
        }

        & + li {
          margin-left: 14px;
        }
      }
    }

    .clear {
      border: none;
      color: hsl(180, 29%, 50%);
      background: none;
      font-size: 18px;
      font-weight: 700;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
