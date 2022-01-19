import styled, { css } from 'styled-components'

interface IProps {
  featured: boolean
}

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  list-style: none;
  gap: 48px;

  @media only screen and (min-width: 1280px) {
    gap: 32px;
  }

  @media only screen and (min-width: 1480px) {
    gap: 32px;
  }

  .loading {
    width: 100%;
    text-align: center;
  }
`

export const List = styled.li<IProps>`
  display: block;
  width: 100%;

  a {
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (min-width: 1280px) {
      flex-direction: row;
      align-items: center;
    }

    @media only screen and (min-width: 1480px) {
      flex-direction: row;
      align-items: center;
    }

    ${props =>
      props.featured
        ? css`
            border-left: 6px solid #5ea4a2;
            padding: 18px 18px 18px 12px;

            @media only screen and (min-width: 1280px) {
              padding: 28px 28px 28px 22px;
            }

            @media only screen and (min-width: 1480px) {
              padding: 28px 28px 28px 22px;
            }
          `
        : css`
            padding: 18px 18px 18px 12px;

            @media only screen and (min-width: 1280px) {
              padding: 28px 28px 28px 22px;
            }

            @media only screen and (min-width: 1480px) {
              padding: 28px 28px 28px 22px;
            }
          `}

    &:hover {
      opacity: 0.7;
    }
  }

  .logo-description {
    position: relative;
    display: block;
    align-items: center;
    width: 100%;

    @media only screen and (min-width: 1280px) {
      display: flex;
    }

    @media only screen and (min-width: 1480px) {
      display: flex;
    }

    .logo {
      display: block;
      position: absolute;
      z-index: 99;
      top: -50px;
      left: 0;

      img {
        width: 50px;
      }

      @media only screen and (min-width: 1280px) {
        position: relative;
        top: 0;

        img {
          width: auto;
        }
      }

      @media only screen and (min-width: 1480px) {
        position: relative;
        top: 0;

        img {
          width: auto;
        }
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      padding-left: 8px;
      margin-top: 12px;

      @media only screen and (min-width: 1280px) {
        margin-top: 0;
        padding-left: 16px;
      }

      @media only screen and (min-width: 1480px) {
        margin-top: 0;
        padding-left: 16px;
      }

      .sub-title {
        display: flex;
        color: #5ea4a2;
        font-weight: 700;
        margin-bottom: 8px;

        .tags {
          display: flex;
          margin-left: 8px;

          .new {
            background: #5ea4a2;
          }

          .featured {
            background: #323e3e;
          }

          span {
            padding: 2px 8px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 700;
            color: #fff;

            & + span {
              margin-left: 6px;
            }
          }
        }
      }

      .title {
        font-size: 18px;
        color: #000;
        font-weight: 700;
      }

      .footer {
        display: block;
        border-bottom: 1px solid #ccc;
        padding-bottom: 14px;
        margin-bottom: 14px;
        margin-top: 8px;

        @media only screen and (min-width: 1280px) {
          border: 0;
          padding-bottom: 0;
          margin-bottom: 0;
          margin-top: 0;
        }

        @media only screen and (min-width: 1480px) {
          border: 0;
          padding-bottom: 0;
          margin-bottom: 0;
          margin-top: 0;
        }

        ul {
          display: flex;
          margin-top: 6px;
          list-style: none;

          li {
            display: block;
            color: #999;

            & + li {
              margin-left: 12px;
            }

            & + li::before {
              content: '•';
              margin-right: 12px;
            }
          }
        }
      }
    }
  }

  .grid-languages {
    display: flex;

    button:disabled {
      background: hsl(180, 29%, 50%);
      color: #fff;
    }

    button {
      border: none;
      padding: 6px 14px;
      border-radius: 4px;
      background: #eef6f6;
      font-size: 14px;
      color: hsl(180, 29%, 50%);
      font-weight: 700;

      &:hover {
        background: #5ea4a2;
        color: #fff;
      }

      & + button {
        margin-left: 14px;
      }
    }
  }
`
