import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/core';

import {ReactComponent as Logo} from 'src/images/logo.svg';
import {ReactComponent as GHIcon} from 'src/images/gh-icon.svg';
import {ReactComponent as LIIcon} from 'src/images/li-icon.svg';

const Footer = () => (
  <footer css={css`
    padding: 0 19px;
    background: rgb(255,255,255);
  `}>
    <div
      css={css`
        max-width: 1100px;
        margin: 0 auto;
        padding: 28px 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 1em;
      `}
    >
      <div css={css`
        display: flex;
        align-items: center;
        a {
          margin-right: 6px;
        }
      `}>
        <a href='https://github.com/tyangliu' rel='noopener noreferrer' target='_blank'>
          <GHIcon height={22} />
        </a>
        <a href='https://linkedin.com/in/tyangliu' rel='noopener noreferrer' target='_blank'>
          <LIIcon height={22} />
        </a>
      </div>
      <div css={css`
        display: flex;
        align-items: center;
      `}>
        <a href='' css={css`
          display: flex;
          align-items: center;
          margin: 0;
        `}>
          <Logo height={19} css={css`
            margin-top: -4px;
            margin-right: 10px;
          `}/>
          <span css={css`
            font-size: 16px;
            font-weight: bold;
          `}>
            Top
          </span>
        </a>
        <span css={css`
          color: #6e7175;
          margin: 0 8px;
        `}>
          &#183;
        </span>
        <Link to='/' css={css`
          font-size: 16px;
          font-weight: bold;
        `}>
          Home
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
