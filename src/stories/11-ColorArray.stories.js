import React from 'react';
import ColorArray from '../components/ColorArray/ColorArray';

export default {
    title: "Color array",
    component: ColorArray,
};


export const defaultColor = () => (
    <ColorArray onChange={() => console.log('i am changed') } />
  );

