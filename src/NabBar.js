import React from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';
import Colors from './Colors';

const NavBar = () => (
  <header
    css={css`
      background-color: ${Colors.secondary};
      padding: 15px;
      margin-bottom: 16px;
    `}
  >
    <Link to="/">Adop</Link>
    <span
      css={css`
        font-size: 60px;
        &:hover {
          text-decoration: underline;
        }
      `}
      aria-label="logo"
      role="img"
    >
      🐶
    </span>
  </header>
);

export default NavBar;
