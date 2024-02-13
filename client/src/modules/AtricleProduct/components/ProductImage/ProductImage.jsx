import React from 'react';

import { Image } from 'antd';
import IconSale from 'components/IconsSale/IconSale';
import { motion } from 'framer-motion';

const ProductImage = ({ image, isNew }) => {
  return (
    <motion.div
      animate={{ opacity: 1, display: 'flex', y: 0 }}
      initial={{ opacity: 0, display: 'none', y: -100 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className="max-h-[70vh] w-full m-auto mt-0 md:w-3/5 relative overflow-hidden shadow-y dark:shadow-white/20 rounded-2xl self-stretch"
    >
      <Image width="100%" height="100%" src={image} />
      <IconSale isNew={isNew} />
    </motion.div>
  );
};

export default ProductImage;
