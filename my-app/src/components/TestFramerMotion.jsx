import React from 'react';
import { motion } from 'framer-motion';

const Test = () => {
  return (
    <div>
      <motion.h2
        initial={{ y: -250 }}
        animate={{ y: -225, fontSize: '28px', color: '#ff2994' }}
        transition={{ type: 'spring', stiffness: 10, duration: 0.2 }}
      >
        Testing button
      </motion.h2>


        <motion.div
        initial={{ x : '-100vw'}}
        animate={{ x: 0}}
        transition={{ type: 'spring', stiffness: 120}}
        >
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ 
                scale: 1.1,
                boxShadow: "0px 0px 7px rgb(255, 255, 255)",
            }}

        >
            Try Me!
        </motion.button>
        </motion.div>
    </div>
  );
};

export default Test;