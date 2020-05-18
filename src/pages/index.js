import React from 'react';
import {css, jsx} from '@emotion/core';

import Layout from 'src/components/layout';
import Meta from 'src/components/meta';
import Scene from 'src/components/scene';

import {ReactComponent as GHIcon} from 'src/images/gh-icon.svg';
import {ReactComponent as LIIcon} from 'src/images/li-icon.svg';

const IndexPage = () => (
  <Layout>
    <Meta title='Home'/>
    <main css={css`
      flex: 1;
    `}>
      <div css={css`
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,1) 48%);
      `}>
        <div css={css`
          max-width: 770px;
          margin: 0 auto;
          padding: 60px 19px 0;
          
        `}>
          <p css={css`
            &::after {
              content: "—";
              display: block;
              color: #6e7175;
            }
          `}>
            Hi, I'm <strong>Thomas Liu</strong>&mdash;I'm currently a machine learning
            engineer at&nbsp;
            <a href='https://www.yelp.com' rel='noopener noreferrer' target='_blank'>
              Yelp
            </a>,
            working on making inferences from reviews, photos, and usage patterns.
          </p>
          <div css={css`
            display: flex;
            margin-top: 10px;

            a {
              margin-right: 8px;
            }
          `}>
            <a href='https://github.com/tyangliu' rel='noopener noreferrer' target='_blank'>
              <GHIcon height={33} />
            </a>
            <a href='https://linkedin.com/in/tyangliu' rel='noopener noreferrer' target='_blank'>
              <LIIcon height={33} />
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
  </Layout>
);

export default IndexPage;
