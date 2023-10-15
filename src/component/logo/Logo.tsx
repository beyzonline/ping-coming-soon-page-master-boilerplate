import React from 'react';
import { Image } from 'antd';


import logoImage from '../../../public/images/logo.svg';



const Logo: React.FC = () => {

  return (
    <Image
      height={30}
      src={logoImage}
      preview={false}
    />
  );
};

export default Logo;