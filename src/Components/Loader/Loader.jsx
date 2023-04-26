import { Rings } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';
import React from 'react';

export const Loader = () => {
  return (
    <Overlay>
      <Rings
        height="100"
        width="100"
        color="#fff"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </Overlay>
  );
};
