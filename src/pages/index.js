import React from 'react';
import {css, jsx} from '@emotion/core';

import Meta from 'src/components/meta';
import Scene from 'src/components/scene';

import {ReactComponent as GHIcon} from 'src/images/gh-icon.svg';
import {ReactComponent as LIIcon} from 'src/images/li-icon.svg';

const IndexPage = () => (
  <>
    <Meta title='Home'/>
    <main css={css`
      flex: 1 1 auto;
    `}>
      <div css={css`
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,1) 48%);
      `}>
        <div css={css`
          max-width: 40.53rem;
          margin: 0 auto 5.22rem;
          padding: 3.48rem 1rem 0;
        `}>
          <p css={css`
            margin-bottom: 0;

            &::after {
              content: "—";
              display: block;
              color: #6e7175;
            }
          `}>
            Hi, I'm <strong>Thomas Liu</strong>&mdash;I'm currently a machine learning
            engineer at&nbsp;
            <a href='https://www.amazon.com' rel='noopener noreferrer' target='_blank'>
              Amazon
            </a>,
            specializing in natural language, ranking, and user behavior.
          </p>
          <div css={css`
            display: flex;
            padding-top: 0.5rem;
            padding-bottom: 0.73rem;

            a {
              margin-right: 0.42rem;
              flex-basis: 1.74rem;
            }
          `}>
            <a href='https://github.com/tyangliu' rel='noopener noreferrer' target='_blank'>
              <GHIcon height='1.74rem' />
            </a>
            <a href='https://linkedin.com/in/tyangliu' rel='noopener noreferrer' target='_blank'>
              <LIIcon height='1.74rem' />
            </a>
          </div>
        </div>
      </div>
    </main>
    <div css={css`
      position: fixed;
      bottom: 0;
      height: 380px;
      width: 100%;
      z-index: -1;
    `}>
      <Scene />
    </div>
  </>
);

export default IndexPage;
