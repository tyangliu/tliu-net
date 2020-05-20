/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import {Global, css, jsx} from '@emotion/core';
import emotionReset from 'emotion-reset';
import {useStaticQuery, graphql} from 'gatsby';

import Header from './header'

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div css={css`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    `}>
      <Global styles={css`
        ${emotionReset}

        html, body {
          color: #3e4449;
          font-family: Rooney, serif;
          font-size: 19px;
          line-height: 1.74rem;
        }

        p {
          margin-bottom: 1.74rem;
        }

        h1 {
          font-size: 2.58rem;
          font-weight: bold;
          line-height: 3.48rem;
        }

        h2 {
          font-size: 1.74rem;
          font-weight: bold;
          line-height: 1.74rem;
        }

        h3 {
          font-size: 1rem;
          font-weight: bold;
        }

        strong {
          font-weight: bold;
        }

        em {
          font-style: italic;
        }

        button {
          background: none;
          border: none;
          outline: none;
          font-family: inherit;
          padding: 0;
        }

        a, button {
          color: #007ecc;
          font-style: italic;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .gh-icon {
          .gh-icon-inner {
            transition: fill 0.2s;
          }
        }
        .gh-icon:hover {
          .gh-icon-inner {
            fill: #333333;
          }
        }
        .li-icon {
          .li-icon-inner {
            transition: fill 0.2s;
          }
        }
        .li-icon:hover {
          .li-icon-inner {
            fill: #0077b5;
          }
        }
      `}/>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
    </div>
  );
};

export default Layout;
