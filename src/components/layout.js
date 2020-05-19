/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import {Global, css, jsx} from '@emotion/core';
import emotionReset from 'emotion-reset';
import PropTypes from 'prop-types';
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
  `)

  return (
    <div css={css`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    `}>
      <Global styles={css`
        ${emotionReset}

        body {
          color: #3e4449;
          font-family: rooney-web, serif;
          font-size: 19px;
          line-height: 1.78em;
        }

        p {
          margin-bottom: 19px;
        }

        h1 {
          font-size: 49px;
          font-weight: bold;
          line-height: 1.5em;
        }

        h2 {
          font-size: 33px;
          font-weight: bold;
          line-height: 1.5em;
        }

        h3 {
          font-size: 19px;
          font-weight: bold;
        }

        strong {
          font-weight: bold;
        }
        em {
          font-style: italic;
        }

        a {
          color: #007ecc;
          font-style: italic;
          text-decoration: none;

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
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
