import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PlatformDetailsDrawer } from './PlatformDetailsDrawer';
import { mockPlatform } from '../../utils/mocks';

export default {
  title: 'PlatformDetails',
  component: PlatformDetailsDrawer,
};

export const Default = () => (
  <PlatformDetailsDrawer
    open={boolean('open', true)}
    onClose={action('onClose called')}
    platform={mockPlatform()}
  />
);
