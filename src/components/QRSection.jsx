import React from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode.react';

const QRSection = () => {
  return (
    <div className='py-12'>
      <div className='text-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
          Scan & Order
        </h2>
        <p className='text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto'>
          Scan our QR code to explore our full menu and place your order
          directly from your table
        </p>
      </div>

      <div className='flex justify-center'>
        <motion.div
          className='glass backdrop-blur-md p-8 rounded-2xl inline-block bg-white/10'
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className='bg-white p-4 rounded-xl'>
            <QRCode
              value='https://incense.vercel.app/menu'
              size={250}
              level='H'
              includeMargin={true}
              fgColor='#000000'
              bgColor='#ffffff'
            />
          </div>
        </motion.div>
      </div>

      <p className='text-center mt-8 text-white/80 text-lg'>
        Point your camera at the QR code to start ordering
      </p>
    </div>
  );
};

export default QRSection;

// todo: Qr code animation https://www.framer.com/motion qr section visibility
