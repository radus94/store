import React from 'react';
import { action } from '@storybook/addon-actions';
import { 
  Button,
  Grid,
  CardMedia
 } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const ContainedPrimary = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Button variant="contained" color="primary"> Primary</Button>        
    </CssBaseline>
  </ThemeProvider>   
);

export const ContainedSecondary = () => 
<Button variant="contained" color="secondary">
  Secondary
</Button>

export const ContainedDisabled = () =>
<Button variant="contained" disabled>
  Disabled
</Button>

export const ContainedLink = () =>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>
