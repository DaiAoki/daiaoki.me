import React from 'react'

const Mug = props => (
  <>
    <div className="mug">
      <div className="mug__top">
        <div className="mug__top-inner-container">
          <div className="mug__top-inner"/>
        </div>
      </div>
      <div className="mug__holding">
        <div className="mug__holding-inner"/>
      </div>
      <div className="mug__label">Coffee</div>
      <div className="mug__bottom"/>
    </div>
    <style jsx>
      {`
        .mug {
          width: 100%;
          max-width: 300px;
          position: relative;
          background: linear-gradient(90deg, #ddd, #f4f4f4 10%, #fff 50%, #f4f4f4 calc(100% - 5%), #ddd);
          transform: perspective(10rem) rotateX(-2deg);
          transform-origin: bottom;
          z-index: 100;
          &:before {
            content: "";
            display: block;
            padding-top: 112.5%;
          }
          &__top {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: #fff;
            box-shadow: 0 3px 2px 1px rgba(200,200,200,0.4) inset;
            border-radius: 50%;
            transform: translateY(-50%);
            &:before {
              content: "";
              display: block;
              padding-top: 22.5%;
            }
          }
          &__top-inner-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 4px;
            border-radius: 50%;
          }
          &__top-inner {
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at 20% 80%,#ababab,#fff 100%);
            border-radius: 50%;
          }
          &__holding {
            position: absolute;
            top: 0;
            right: 0;
            height: 64%;
            width: 30%;
            max-width: 90px;
            background: linear-gradient(to left, #ddd, #f4f4f4 20%, #f4f4f4);
            box-shadow: 0 3px 2px 1px rgba(200,200,200,0.4) inset;
            border-radius: 0 60% 100% 0;
            transform: translate(100%, 16%);
          }
          &__holding-inner {
            position: absolute;
            top: 13%;
            left: 0;
            height: 74%;
            width: 64%;
            box-shadow: 1px 3px 9px 4px rgba(160,160,160,1.0);
            border-radius: 0 60% 100% 0;
          }
          &__label {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-80%, -50%);
            font-weight: bold;
            font-size: 4.6rem;
            @import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@700&display=swap&text=Cofe');
            font-family: 'Yanone Kaffeesatz', sans-serif;
            color: #396;
          }
          &__bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(90deg, #ddd, #f4f4f4 10%, #fff 50%, #f4f4f4 calc(100% - 5%), #ddd);
            box-shadow: 0 -3px 2px 0px rgba(200,200,200,0.3) inset;
            border-radius: 50%;
            transform: translateY(50%);
            &:before {
              content: "";
              display: block;
              padding-top: 22.5%;
            }
          }
        }
        @media screen and (max-width: 1042px) {
          .mug {
            &__label {
              font-size: 3.8rem;
            }
          }
        }
        @media screen and (max-width: 768px) {
          .mug {
            &__holding-inner {
              box-shadow: 1px 2px 5px 2px #c0c0c0;
            }
            &__label {
              font-size: 2.2rem;
            }
          }
        }
        @media screen and (max-width: 420px) {
          .mug {
            &__holding-inner {
              box-shadow: 1px 2px 5px 2px #c0c0c0;
            }
            &__label {
              font-size: 1.6rem;
            }
          }
        }
      `}
    </style>
  </>
)
export default Mug
