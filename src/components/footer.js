import React from 'react';
import {Link} from 'gatsby';
import {css, jsx} from '@emotion/core';

import {ReactComponent as Logo} from 'src/images/logo.svg';
import {ReactComponent as GHIcon} from 'src/images/gh-icon.svg';
import {ReactComponent as LIIcon} from 'src/images/li-icon.svg';

const Footer = () => (
  <footer css={css`
    padding: 0 1rem;
    background: rgb(255,255,255);
  `}>
    <div
      css={css`
        max-width: 57.9rem;
        margin: 0 auto;
        padding: 1.16rem 0 1.16rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 1rem;
      `}
    >
      <div css={css`
        display: flex;
        align-items: center;
        a {
          margin-right: 0.32rem;
          flex-basis: 1.16rem;
          line-height: 1.16rem;
          display: flex;
          align-items: center;
        }
      `}>
        <a href='https://github.com/tyangliu' rel='noopener noreferrer' target='_blank'>
          <GHIcon height='1.16rem'/>
        </a>
        <a href='https://linkedin.com/in/tyangliu' rel='noopener noreferrer' target='_blank'>
          <LIIcon height='1.16rem'/>
        </a>
      </div>
      <div css={css`
        display: flex;
        align-items: center;
      `}>
        <button
          css={css`
            display: flex;
            align-items: center;
            margin: 0;
          `}
          onClick={() => window.scrollTo(0, 0)}
        >
          <Logo height='1rem' css={css`
            margin-top: -0.21rem;
            margin-right: 0.53rem;
            flex-basis: 1.78rem;
          `}/>
          <span css={css`
            font-size: 0.84rem;
            font-weight: bold;
          `}>
            Top
          </span>
        </button>
        <span css={css`
          color: #6e7175;
          margin: 0 0.42rem;
        `}>
          &#183;
        </span>
        <Link to='/' css={css`
          font-size: 0.84rem;
          font-weight: bold;
        `}>
          Home
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
