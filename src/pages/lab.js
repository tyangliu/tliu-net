import React from 'react';
import {css, jsx} from '@emotion/core';

import Layout from 'src/components/layout';
import Meta from 'src/components/meta';

const LabPage = () => (
  <Layout>
    <Meta title='Lab'/>
    <main css={css`
      flex: 1;
    `}>
    </main>
  </Layout>
);

export default LabPage;
