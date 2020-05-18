import React from 'react';
import {css, jsx} from '@emotion/core';

import Layout from 'src/components/layout';
import Meta from 'src/components/meta';
import Footer from 'src/components/footer';

const AboutPage = () => (
  <Layout>
    <Meta title='About'/>
    <main css={css`
      flex: 1;
    `}>
      <div css={css`
        max-width: 770px;
        margin: 60px auto;
        padding: 0 19px;

        .date-range {
          font-style: italic;
          color: #6e7175;
          &::after {
            content: '·';
            margin: 0 8px;
          }
        }

        ul {
          margin-bottom: 1em;
        }
      `}>
        <h2 css={css`
          &::after {
            font-size: 19px;
            line-height: 1.78em;
            display: block;
            content: '—';
            color: #6e7175;
          }
        `}>
          More About Me
        </h2>
        <p>I like turtles</p>

        <h3>Education:</h3>
        <ul>
          <li>
            <span className='date-range'>
              Sept 2013&ndash;May 2018
            </span>
            <em>University of British Columbia</em>,
            Bachelor of Science,
            Major in Computer Science
          </li>
        </ul>

        <h3>Where I've Been:</h3>

        <ul>
          <li>
            <span className='date-range'>
              Jun 2018&ndash;Present
            </span>
            <em>Yelp</em>, Machine Learning Engineer
          </li>
          <li>
            <span className='date-range'>
              Apr 2017&ndash;Jul 2017
            </span>
            <em>Facebook</em>, Software Engineer Intern
          </li>
          <li>
            <span className='date-range'>
              Jan 2017&ndash;Apr 2017
            </span>
            <em>Yelp</em>, Software Engineer Intern
          </li>
          <li>
            <span className='date-range'>
              Apr 2016&ndash;Jul 2016
            </span>
            <em>Facebook</em>, Software Engineer Intern
          </li>
        </ul>

        {/*
        <h3>Random:</h3>
        <ul>
          <li><a href=''>ACNH Catalog</a></li>
        </ul>
        */}
        
        <h2 css={css` 
          &::after {
            font-size: 19px;
            line-height: 1.78em;
            display: block;
            content: '—';
            color: #6e7175;
          }
        `}>
          Contact Me
        </h2>
        <p>Drop an email at <strong>hello (at) tliu.net</strong>!</p>
      </div>
    </main>
    <Footer/>
  </Layout>
);

export default AboutPage;
