import React from 'react';
import Button from '../component/button'; // Update the path to your actual component

export default {
  title: 'Components/Button', // This is how it shows up in Storybook's sidebar
  component: Button,
};

export const Primary = () => <Button>Primary Button</Button>;
export const Secondary = () => <Button>Secondary Button</Button>;

