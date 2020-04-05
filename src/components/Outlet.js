import React from 'react'

const Outlet = props => (
  <>
    <div className="outlet">
      <div className="outlet__block">
        <div className="outlet__socket-container">
          <div className="outlet__socket">
            <div className="outlet__left-socket">
              <div className="outlet__hole"/>
            </div>
            <div className="outlet__right-socket">
              <div className="outlet__hole"/>
            </div>
          </div>
        </div>
        <div className="outlet__socket-container">
          <div className="outlet__socket">
            <div className="outlet__left-socket">
              <div className="outlet__hole"/>
            </div>
            <div className="outlet__right-socket">
              <div className="outlet__hole"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .outlet {
          background-color: #eff7f9;
          width: 100%;
          border-radius: 7%;
          box-shadow: 0 -3px 10px 1px rgba(200,200,200,0.4) inset;
          display: flex;
          justify-content: center;
          align-items: center;
          &:before {
            content: "";
            display: block;
            padding-top: 161.8%;
          }
          &__block {
            width: 42%;
            box-shadow: 0px 0px 2px -1px #999, 0px -1px 0px -1px #999;
            border-radius: 3px;
            position: relative;
            &:before {
              content: "";
              display: block;
              padding-top: 240%;
            }
          }
          &__socket-container {
            position: absolute;
            left: 0;
            height: 50%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            &:nth-child(1) {
              top: 0;
            }
            &:nth-child(2) {
              bottom: 0;
            }
          }
          &__socket {
            width: 72%;
            height: 40%;
            display: flex;
            justify-content: space-between;
          }
          &__left-socket {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 1px 3px 1px rgba(200,200,200,0.4) inset;
            border-radius: 100% 10% 10% 100%;
          }
          &__right-socket {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 1px 3px 1px rgba(200,200,200,0.4) inset;
            border-radius: 10% 100% 100% 10%;
          }
          &__hole {
            height: 72%;
            width: 24%;
            background-color: #333;
            border-radius: 2px;
          }
        }
      `}
    </style>
  </>
)
export default Outlet
