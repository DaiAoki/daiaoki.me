import React from 'react'

const MockBookPro = props => (
  <>
    <div className="mockbook" style={props.style}>
      <div className="mockbook__display">
        <div className="mockbook__outer-frame">
          <div className="mockbook__middle-frame">
            <div className="mockbook__inner-frame">
              <div className="mockbook__screen">
                <div className="mockbook__screen-inner">{ props.children }</div>
                <div className="mockbook__name">
                  <span>Mockbook Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mockbook__keyboard">
        <div className="mockbook__bottom"/>
      </div>
    </div>
    <style jsx>
      {`
        .mockbook {
          width: 92%;
          max-width: 980px;
          &__display {
            position: relative;
            width: 92%;
            background-color: #0d0d0d;
            border-radius: 12px;
            box-shadow: inset 0 0 0 2px #767a7d;
            padding: 2px;
            margin: 0 auto;
          }
          &__outer-frame {
            width: 100%;
            border-radius: 9px;
            box-shadow: inset 0 0 0 2px #929292;
            padding: 1px;
          }
          &__middle-frame {
            width: 100%;
            border-radius: 9px;
            box-shadow: inset 0 0 0 2px #000;
            padding: 1px;
          }
          &__inner-frame {
            width: 100%;
            border-radius: 9px;
            box-shadow: inset 0 0 0 1px #232323;
            position: relative;
            &:before {
              content: "";
              display: block;
              padding-top: 62.5%;
            }
          }
          &__screen {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
          }
          &__screen-inner {
            flex-grow: 1;
            border-radius: 9px;
            overflow: hidden;
            background-color: #0d0d0d;
            padding: 24px 12px 8px;
            position: relative;
            &:before {
              content: "";
              display: block;
              height: 8px;
              width: 8px;
              background-color: #222;
              border-radius: 50%;
              position: absolute;
              top: 8px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          &__name {
            display: inline-flex;
            justify-content: center;
            width: 100%;
            color: #c8cacb;
            background-color: #272626;
            line-height: 1;
            text-align: center;
            padding: 6px 0 10px;
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;
            span {
              display: inline-block;
              font-size: 1.2rem;
            }
          }
          &__keyboard {
            background-color: #909496;
            border: solid #d5d6d8;
            border-radius: 2px 2px 0 0;
            border-width: 2px 4px 0 4px;
            border-color: #767a7d;
            position: relative;
            transform: translateY(-7px);
            &:before {
              content: "";
              display: block;
              padding-top: 1.8%;
            }
            &:after {
              content: '';
              position: absolute;
              top: -2px;
              left: 50%;
              height: 5px;
              width: 12%;
              background-color: #83878a;
              border-radius: 0 0 10px 10px;
              box-shadow: inset 0 0 4px 2px #6a6d70;
              transform: translateX(-50%);
            }
          }
          &__bottom {
            position: absolute;
            bottom: -14px;
            left: -4px;
            height: 14px;
            width: calc(100% + 8px);
            background-color: #515456;
            border-radius: 0 0 180px 180px/ 0 0 12px 12px;
            box-shadow: inset 0 -2px 6px 0 #000;
          }
        }
        @media screen and (max-width: 768px) {
          .mockbook {
            &__screen-inner {
              border-radius: 9px;
              padding: 16px 8px 6px;
              &:before {
                height: 6px;
                width: 6px;
                top: 6px;
              }
            }
            &__name {
              padding: 4px 0 10px;
              span {
                font-size: 1rem;
              }
            }
            &__keyboard {
              border-width: 2px 4px 0 4px;
              transform: translateY(-7px);
              &:before {
                padding-top: 0.8%;
              }
              &:after {
                height: 3px;
                width: 8%;
              }
            }
            &__bottom {
              bottom: -10px;
              height: 10px;
            }
          }
        }
        @media screen and (max-width: 420px) {
          .mockbook {
            &__screen-inner {
              padding: 8px 5px 3px;
              &:before {
                height: 3px;
                width: 3px;
                top: 3px;
              }
            }
            &__name {
              padding: 0 0 6px;
              span {
                font-size: 1rem;
                transform: scale(0.6);
              }
            }
            &__keyboard {
              border-width: 2px 4px 0 4px;
              transform: translateY(-7px);
              &:before {
                padding-top: 0.8%;
              }
              &:after {
                height: 3px;
                width: 8%;
              }
            }
            &__bottom {
              bottom: -6px;
              height: 6px;
            }
          }
        }
      `}
    </style>
  </>
)
export default MockBookPro
