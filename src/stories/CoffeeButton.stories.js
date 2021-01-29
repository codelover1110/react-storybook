import React from 'react';
import { storiesOf } from '@storybook/react';
import CoffeeButton from './CoffeeButton';
storiesOf('CoffeeButton', module)
  .add('Black', () => (
    <CoffeeButton>
      <span role="img" aria-label="without-milk">
         🏿
      </span>
    </CoffeeButton>
  ))
  .add('White', () => (
    <CoffeeButton>
      <span role="img" aria-label="with-milk">
        🏼
      </span>
    </CoffeeButton>
));