import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { floatingLabelVariant } from 'chakraui-custom-components';

interface IProps {
  children: ReactNode;
}

const ThemeInjection = ({ children }: IProps) => {
  const floatingLabelBgLight = '#FFFFFF';
  const floatingLabelBgDark = '#1B254B';

  const floatingLabelStyle = floatingLabelVariant(
    floatingLabelBgLight,
    floatingLabelBgDark
  );

  const globalStyles = {
    components: {
      ...floatingLabelStyle,
    },
  };
  const theme = extendTheme(globalStyles);

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeInjection;
