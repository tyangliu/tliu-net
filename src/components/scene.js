import React from 'react';
import PropTypes from 'prop-types';
import { Global, css ,jsx } from '@emotion/core';
import {ReactComponent as SceneMain} from 'src/images/scene-main.svg';
import {ReactComponent as SceneLeft} from 'src/images/scene-left.svg';
import {ReactComponent as SceneRight} from 'src/images/scene-right.svg';

const Scene = ({ ...props }) => (
  <div
    css={css`
      height: 380px;
      position: relative;
      overflow: hidden;
    `}
    {...props}
  >
    <Global styles={css`
      @keyframes scene-main-water-body {
        0% {transform: translate(0, 0);}
        50% {transform: translate(5px, -10px);}
        100% {transform: translate(0, 0);}
      }
      @keyframes scene-main-water-wave {
        0% {transform: translate(0, 0);}
        50% {transform: translate(-10px, -15px);}
        100% {transform: translate(0, 0);}
      }
      @keyframes scene-left-boat {
        0% {transform: translate(0, 0) rotate(0deg);}
        25% {transform: translate(0, -13px) rotate(1deg);}
        50% {transform: translate(0, 0) rotate(0deg);}
        75% {transform: translate(0, -10px) rotate(-2deg);}
        100% {transform: translate(0, 0) rotate(0deg);}
      }

      @keyframes star-forward {
        0% {fill: #0882cd;}
        50% {fill: #c14093;}
        100% {fill: #0882cd;}
      }
      @keyframes star-reverse {
        0% {fill: #c14093;}
        50% {fill: #0882cd;}
        100% {fill: #c14093;}
      }

      #scene-main-water-body {
        animation: scene-main-water-body 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
      }
      #scene-main-water-wave {
        animation: scene-main-water-wave 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
      }
      #scene-left-boat {
        animation: scene-left-boat 6s cubic-bezier(0.37, 0, 0.63, 1) infinite;
      }

      /* Star sequence
        main 0 1 2
        left 0 1 2 3 4 5
        right 0 1 2 3
        main 3 4

        Initial purple
        main 0
        left 0
        right 0 2
        main 3

        Initial blue
        main 1 2
        left 1 2 3 4 5
        right 1 3
        main 4
      */
      #scene-main-star-0, #scene-right-star-2, #scene-main-star-3 {
        animation: star-reverse 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
      }
      #scene-left-star-0, #scene-right-star-0 {
        animation: star-reverse 6s cubic-bezier(0.37, 0, 0.63, 1) infinite;
      }
      #scene-main-star-1, #scene-left-star-5, #scene-right-star-3 {
        animation: star-forward 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
      }
      #scene-main-star-2, #scene-left-star-3, #scene-right-star-1, #scene-main-star-4 {
        animation: star-forward 6s cubic-bezier(0.37, 0, 0.63, 1) infinite;
      } 
      #scene-left-star-1, #scene-left-star-4 {
        animation: star-forward 2s cubic-bezier(0.37, 0, 0.63, 1) infinite;
      }
      #scene-left-star-2 {
        animation: star-forward 4s cubic-bezier(0.37, 0, 0.63, 1) infinite;
      }

    `}/>
    <div css={css`
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
    `}>
      <div css={css`
        position: absolute;
        right: -60px;
      `}>
        <SceneRight width={699} height={318}/>
      </div>
      <div css={css`
        position: absolute;
        left: 0;
      `}>
        <SceneLeft width={397} height={305}/>
      </div>
    </div>
    <div css={css`
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      margin: 24px auto 0;
      width: 1920px;
    `}>
      <SceneMain width={1920} height={739}/>
    </div>
  </div>
);

export default Scene;
