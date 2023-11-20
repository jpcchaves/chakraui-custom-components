import { ArrowUpIcon } from '@chakra-ui/icons';
import { IconButton, IconButtonProps, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type ScrollTopOmittedProps = 'aria-label';

interface IProps extends Omit<IconButtonProps, ScrollTopOmittedProps> {}

export const ScrollTop = ({ ...rest }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const animationKeyframes = keyframes`
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1 }
`;

  const animation = `${animationKeyframes} 0.5s`;

  return (
    <>
      {isVisible && (
        <IconButton
          {...rest}
          aria-label="scroll top button"
          as={motion.div}
          animation={animation}
          icon={<ArrowUpIcon />}
          onClick={scrollToTop}
          position={'fixed'}
          right="12"
          bottom="24"
          rounded={'full'}
          size={'md'}
          cursor={'pointer'}
        />
      )}
    </>
  );
};
