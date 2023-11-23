import { IconProps, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ColorMode, IconButton, IconButtonProps } from '@chakra-ui/react';
import React from 'react';

enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark',
}

type OmittedIconButtonProps = 'aria-label' | 'icon' | 'as';

interface IProps extends Omit<IconButtonProps, OmittedIconButtonProps> {
  currentTheme: ColorMode;
  toggleColorMode: () => void;
  moonIconProps?: IconProps;
  sunIconProps?: IconProps;
}

export const ThemeToggle = ({
  toggleColorMode,
  currentTheme,
  moonIconProps,
  sunIconProps,
  ...rest
}: IProps) => {
  return (
    <IconButton
      {...rest}
      aria-label="theme toggle button"
      onClick={toggleColorMode}
      rounded={'full'}
      size={'md'}
      icon={
        currentTheme === ThemeModes.LIGHT ? (
          <MoonIcon {...moonIconProps} />
        ) : (
          <SunIcon {...sunIconProps} />
        )
      }
    />
  );
};
