import React from 'react';
import {css, jsx} from '@emotion/core';

import Layout from 'src/components/layout';
import Meta from 'src/components/meta';

const PhotosPage = () => (
  <Layout>
    <Meta title='Photos'/>
    <main css={css`
      flex: 1;
    `}>
    </main>
  </Layout>
);

export default PhotosPage;
