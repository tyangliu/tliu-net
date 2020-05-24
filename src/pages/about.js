import React from 'react';
import {css, jsx} from '@emotion/core';

import Meta from 'src/components/meta';
import Footer from 'src/components/footer';

const AboutPage = () => (
  <>
    <Meta title='About'/>
    <main css={css`
      flex: 1 1 auto;
    `}>
      <div css={css`
        max-width: 40.53rem;
        margin: 3.48rem auto 5.22rem;
        padding: 0 1rem;

        .date-range {
          font-style: italic;
          color: #6e7175;
          &::after {
            content: '·';
            margin: 0 0.42rem;
          }
        }

        ul {
          margin-bottom: 1.74rem;
        }
      `}>
        <h2 css={css`
          &::after {
            font-size: 1rem;
            line-height: 1.74em;
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
  </>
);

export default AboutPage;
