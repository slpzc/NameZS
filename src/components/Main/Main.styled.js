import styled from 'styled-components';

export const Header = styled.header`
  //min-height: 924px;
  position: relative;
  padding-bottom: 80px;

  &::before {
    position: absolute;
    right: 0;
    bottom: -20px;
    content: "";
    background-image: url('https://i.imgur.com/AmvgF7T.png');
    width: 383px;
    height: 429px;
  }

  .global-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 207px;
  }

  .logo {
    padding-top: 52px;
    text-align: center;
  }

  .description {
    display: flex;
    align-items: flex-start;
    gap: 9.375vw;
    font-family: 'mononoki';

    &-title {
      font-style: normal;
      font-size: 24px;
      line-height: 27px;
      color: #999999;
    }

    &-pointers {
      display: flex;
      align-items: flex-start;
      gap: 317px;

      &_point {
        span {
          font-size: 16px;
          line-height: 18px;
          font-feature-settings: 'pnum' on, 'lnum' on;
          color: #666666;
        }

        p {
          padding-top: 16px;
          font-size: 24px;
          line-height: 27px;
          color: #999999;
        }
      }
    }
  }
  @media (max-width: 1240px){
    &::before{
      display: none;
    }
  }
  @media (max-width: 1400px) {
    .description {
      flex-direction: column;
      align-items: center;
      gap: 24px;

      &-pointers {
        gap: 16.510vw;
      }
    }
  }
  @media (max-width: 760px) {
    .logo {
      svg {
        width: 400px;
        height: 400px;
      }
    }

    .global-wrapper {
      gap: 10.781vw;
    }
  }
  @media (max-width: 760px) {
    .global-wrapper {
      gap: 171px;
    }

    .logo {
      svg {
        width: 400px;
        height: 400px;
      }
    }

    .description {
      flex-direction: column;
      align-items: center;
      gap: 24px;

      &-pointers_point {
        span {
          font-size: 13px;
        }

        p {
          padding-top: 8px;
          font-size: 16px;
        }
      }

      &-title {
        font-size: 18px;
      }

      &-pointers {
        gap: 16.510vw;
      }
    }
  }

  @media (max-width: 536px) {
    .logo {
      svg {
        width: 300px;
        height: 300px;
      }
    }
    .description-pointers{
      width: 100%;
      gap: 0;
      justify-content: space-between;
    }
    .description-pointers_point{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
export const Main = styled.main`
  margin-top: 80px;

  .about {
    .global-wrapper {
      border-top: 1px solid #666666;
      border-bottom: 1px solid #666666;
      display: flex;
    }

    .main-links {
      flex-shrink: 0;
      padding-top: 48px;
      border-right: 1px solid #666666;
      padding-right: 13.563rem;

      ul {
        position: sticky;
        list-style: none;
        top: 100px;
        transition: top .3s ease 0s;

        &.scroll {
          top: 0;
        }

        li {
          cursor: pointer;
          font-weight: 450;
          padding: 8px 0;
          font-size: 36px;
          line-height: 42px;
          font-feature-settings: 'pnum' on, 'lnum' on;
          color: #666666;
          transition: color .2s ease;
        }
      }
    }

    .main-content {
      padding-top: 48px;
      width: 100%;

      section {
        font-feature-settings: 'pnum' on, 'lnum' on;

        &#stek {
          padding-bottom: 312px;
          border-top: 1px solid #666666;

          .inner {
            padding-top: 40px;
            padding-left: 32px;
            display: flex;
            gap: 16.61vw;
            justify-content: flex-start;

            ul {
              list-style: none;
              display: flex;
              flex-direction: column;

              li {
                flex-shrink: 0;
                font-weight: 600;
                font-size: 36px;
                line-height: 42px;
                font-feature-settings: 'pnum' on, 'lnum' on;
                color: #FAFAFA;
                padding: 16px 0;
              }
            }
          }
        }

        &#partners {
          padding-bottom: 503px;

          p {
            margin-top: 40px;
            font-weight: 450;
            font-size: 24px;
            line-height: 120%;
            letter-spacing: 0.02em;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: #666666;
          }

          div.inner {
            padding-top: 48px;
            padding-left: 32px;
          }

          .partners-blocks {
            margin-top: 100px;
            display: flex;
            flex-wrap: wrap;
            gap: 13px;

            &_block {
              text-transform: capitalize;
              width: 340px;
              height: 78px;
              background: #181A1B;
              border-radius: 4px;
              display: flex;
              align-items: center;
              justify-content: center;

              font-weight: 600;
              font-size: 32px;
              line-height: 120%;
              letter-spacing: 0.02em;
              font-feature-settings: 'pnum' on, 'lnum' on;
              color: #666666;
            }
          }
        }

        span {
          font-weight: 450;
          font-size: 36px;
          line-height: 42px;
        }

        p {
          padding-top: 73px;
          font-weight: 400;
          font-size: 32px;
          line-height: 120%;
          letter-spacing: 0.02em;
          color: #666666;
        }

        p:last-child {
          padding-top: 37px;
        }
      }
    }

  }

  .projects {
    margin-top: 80px;
  }

  @media (max-width: 1240px) {
    .about .main-content section#stek .inner {
      gap: 100px;
    }

    .about .main-content section#partners {
      padding-bottom: 300px;
    }
  }

  @media (max-width: 1100px) {
    .about .main-content section#stek .inner {
      gap: 50px;
    }
  }
  @media (max-width: 1048px) {
    .about .main-content section#stek .inner {
      flex-direction: column;
      gap: 0;
    }

    .about .main-content section span, .about .main-content section#stek .inner ul li {
      font-size: 30px;
    }
  }
  @media (max-width: 900px) {
    .about .global-wrapper {
      flex-direction: column;
    }

    .about .main-links {
      border-right: 0;
      padding-right: 0;
    }

    .inner {
      padding-left: 0 !important;
    }

    .about .main-content section#partners .partners-blocks {
      margin-top: 48px;
    }

    .about .main-content section#partners p {
      margin-top: 16px;
    }

    .about .main-content section#stek {
      padding-bottom: 100px;
    }

    .about .main-content section#stek .inner ul li {
      font-size: 40px;
    }

    .about .main-content section#partners {
      padding-bottom: 100px;
    }
  }
  @media (max-width: 500px) {
    .about .main-content section span, .cLjQKy .about .main-content section#stek .inner ul li, .about .main-links ul li {
      font-size: 26px;
    }

    .about .main-links ul li {
      padding: 6px 0;
      line-height: 31px;
    }

    .about .main-content section#stek .inner ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        font-size: 26px;
        line-height: 31px;
      }
    }
    
  }
`