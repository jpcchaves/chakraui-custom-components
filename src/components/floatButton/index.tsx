import { IconButton, IconButtonProps } from '@chakra-ui/react';
import React, { MouseEvent } from 'react';

type OmittedIconButtonProps = 'onClick' | 'aria-label';

interface IProps extends Omit<IconButtonProps, OmittedIconButtonProps> {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const FloatButton = ({ onClick, ...rest }: IProps) => {
  return (
    <IconButton
      {...rest}
      onClick={onClick}
      aria-label="float button"
      position={'fixed'}
      right={12}
      bottom={12}
    />
  );
};
