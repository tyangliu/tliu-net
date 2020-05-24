import React, {useState, useRef} from 'react';
import {Link} from 'gatsby';
import {css, jsx} from '@emotion/core';
import PageVisibility from 'react-page-visibility';

import {ReactComponent as Logo} from 'src/images/logo.svg';

const Header = ({siteTitle}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isRefocused, setIsRefocused] = useState(false);

  const logoRef = useRef(null);
  const isHoveringRef = useRef(false);
  const isRefocusedRef = useRef(false);

  isHoveringRef.current = isHovering;
  isRefocusedRef.current = isRefocused;

  const pauseHandler = () => {
    if (isHoveringRef.current || isRefocusedRef.current) {
      return;
    }
    setIsRunning(false);
    if (logoRef.current) {
      logoRef.current.removeEventListener(
        'animationiteration',
        pauseHandler,
      );
    }
  };
  const focusHandler = isVisible => {
    if (!isVisible) {
      return;
    }
    setIsRefocused(true);
    // When re-focusing tab, skip the next pauseHandler iteration
    // to allow animation to complete from where it was paused after blur.
    setTimeout(() => setIsRefocused(false), 10);
  };

  const enterHandler = () => {
    setIsHovering(true);
    setIsRunning(true);
  };
  const leaveHandler = () => {
    setIsHovering(false);
    if (logoRef.current) {
      logoRef.current.addEventListener(
        'animationiteration',
        pauseHandler,
      );
    }
  };

  return (
    <PageVisibility onChange={focusHandler}>
      <header css={css`
        padding: 0 1rem;
        background: rgb(255,255,255);
      `}>
        <div
          css={css`
            max-width: 57.9rem;
            margin: 0 auto;
            padding: 1.26rem 0 1.37rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <h1 css={css`
            flex-basis: 1.84rem;
            margin: 0;
            line-height: 1em;
          `}>
            <Link to='/' draggable={false}>
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div
                ref={logoRef}
                onMouseEnter={enterHandler}
                onMouseLeave={leaveHandler}
                onTouchStart={enterHandler}
                onTouchEnd={() => setTimeout(leaveHandler, 10)}
                onContextMenu={leaveHandler}
                css={css`
                  @keyframes tliu-top {
                    0%, 100% {
                      transform: rotate(0deg);
                    }
                    10%, 90% {
                      transform: rotate(-2deg);
                    }
                    25%, 75% {
                      transform: rotate(-8deg);
                    }
                    40%, 60% {
                      transform: rotate(-13deg);
                    }
                    50% {
                      transform: rotate(-15deg);
                    }
                  }
                  animation: tliu-top 2s linear infinite;
                  animation-play-state: ${isRunning ? 'running': 'paused'};
                `}
              >
                <Logo height='2.21rem'/>
              </div>
            </Link>
          </h1>
          <nav css={css`
            a {
              color: #6e7175;
              font-size: 0.84rem;
              font-weight: bold;
              font-style: italic;
              text-decoration: none;
              margin-left: 2.5rem;
              display: inline-block;
              position: relative;

              &:hover {
                text-decoration: none;
              }

              &::after {
                content: "—";
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                margin: auto;
                width: 1rem;
                opacity: 0;
                transition: opacity 0.2s;
              }

              &.active::after, &:hover::after {
                opacity: 1;
              }
            }
          `}>
            {/*
            <Link to='/lab' activeClassName='active' draggable={false}>
              Lab
            </Link>
            <Link to='/photos' activeClassName='active' draggable={false}>
              Photos
            </Link>
            */}
            <Link to='/about' activeClassName='active' draggable={false}>
              About
            </Link>
          </nav>
        </div>
      </header>
    </PageVisibility>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
