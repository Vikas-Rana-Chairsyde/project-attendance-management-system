import React from 'react';
import MultiInputForm from '../app/components/input';

export default {
  title: 'Input/MultiInputForm',
  component: MultiInputForm,
};

export const Default = () => (
  <MultiInputForm onSubmit={(data) => alert(JSON.stringify(data))} />
);
