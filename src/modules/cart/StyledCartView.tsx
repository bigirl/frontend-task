import styled from "styled-components";

const StyledCartView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  max-width: 1920px;
  margin: 0 auto;

  .CartView__header {
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
  }

  .CartView__grid {
    margin: 24px 0;

    &>div:first-child {
      border: 1px solid #C9C9C9;
      border-radius: 4px;
      background: #FFFFFF;
      font-family: 'Lato';
      box-shadow: none;

      table {
        width: 100%;
        border-collapse: revert;
        border-radius: 4px;

        th, td {
          font-family: 'Lato';
          font-size: 14px;
          line-height: 150%;
          padding: 6px 20px !important;
        }

        thead {
          tr {
            height: 53px;
          }

          th {
            font-weight: 700;
            color: #565C70;
            
          }
        }

        tbody {
          tr {
            animation: fadein .3s ease-in forwards;
            height: 53px;

            td {
              color: #909090;
            }
          }
        }
        img {
          border-radius: 2px;
          max-width: 35px;
          max-height: 35px;
        }
  
        svg {
          fill: #565C70;
        }
      }

      @media (min-width: 600px) {
        height: 70vh;
        overflow: hidden;
        overflow-y: auto;

        table {
          thead {
            background: #ffffff;
            position: sticky;
            z-index: 1;
            top: 0;
          }

          tr {
            border-bottom: 1px solid #F5F5F5;
            
            &:nth-child(odd){
              background-color: #FCFCFC;
              border-bottom: 1px solid #F5F5F5;
            }
  
            &:last-child {
              border-bottom:none;
            }

            td {
              display: table-cell;
              vertical-align: middle;
            }
          }
        }
      } 

      @media (max-width: 600px) {
        table-layout: fixed;
        border: transparent;
        border-radius: 0;
        background: transparent;

        thead {
          display:none;
        }

        table tbody {
          tr {
            
            background: #ffffff;
            display: grid; 
            grid-template-columns: 64px 1fr 64px;
            grid-template-rows: 1fr;
            gap: 2px 0; 
            grid-template-areas: 
              "a b e"
              "a c e"
              "a d e";

            border: 1px solid #C9C9C9;
            margin: 1px 0 10px;
            border-radius: 4px;
            height: auto;
          }

          td {
            border: none;
           
          }

          td:first-child {
            grid-area: a;
            justify-self: center;
            display: flex;
            align-items: center;
            padding: 0 10px !important
          }

          td:nth-child(2)
            grid-area: b;
          }

          td:nth-child(3)
            grid-area: c;;
          }

          td:nth-child(4)
            grid-area: d;
          }

          td:last-child {
            grid-area: e;
            justify-self: center;
            display: flex;
            align-items: center;
            padding: 0 10px !important
          }
        }
      }
    }
  }

  @keyframes fadein {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

`;

export default StyledCartView;
