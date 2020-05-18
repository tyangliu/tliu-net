import React from 'react';
import {css, jsx} from '@emotion/core';

import Layout from 'src/components/layout';
import Meta from 'src/components/meta';
import Footer from 'src/components/footer';

const NotFoundPage = () => (
  <Layout>
    <Meta title='404 Not Found' />
    <main css={css`
      flex: 1;
    `}>
      <div css={css`
        max-width: 770px;
        margin: 60px auto;
        padding: 0 19px;
      `}>
      <h1>Does this page exist?</h1>
      <p><strong>4</strong>r<strong>0</strong>bably no<strong>4</strong>.</p>
      </div>
    </main>
    <Footer/>
  </Layout>
);

export default NotFoundPage;