import React from 'react';
import { Button } from './Button'; // Update the path to your actual component

export default {
  title: 'Components/Button', // This is how it shows up in Storybook's sidebar
  component: Button,
};

export const Primary = () => <Button label="Primary Button" />;
export const Secondary = () => <Button label="Secondary Button" />;

