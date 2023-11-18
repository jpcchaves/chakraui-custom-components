import { WarningIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { makeLabel } from '../requiredAsterisk';

interface IProps extends InputProps {
  inputLabel: string;
  isInvalid?: boolean;
  isRequired: boolean;
  handleChange: () => void;
  handleBlur: () => void;
  hasFloatingLabel?: boolean;
  inputValue: string;
  inputErrorMessage?: string;
  inputIdentifier: string;
  floatingLabelBgColor?: string;
}

export const InputComponent = ({
  inputLabel,
  isInvalid = false,
  inputErrorMessage,
  handleChange,
  handleBlur,
  inputValue,
  inputIdentifier,
  isRequired,
  hasFloatingLabel = false,
  placeholder,
  floatingLabelBgColor = '#FFFFFF',
  ...rest
}: IProps) => {
  const activeLabelStyles = {
    transform: 'scale(0.85) translateY(-24px)',
  };

  const localTheme = {
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label': {
                ...activeLabelStyles,
              },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: 'absolute',
                backgroundColor: floatingLabelBgColor,
                pointerEvents: 'none',
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: 'left top',
                _dark: {
                  backgroundColor: floatingLabelBgColor,
                },
              },
            },
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={localTheme}>
      <FormControl
        isInvalid={isInvalid}
        variant={hasFloatingLabel ? 'floating' : ''}
      >
        {!hasFloatingLabel ? (
          <FormLabel htmlFor={inputIdentifier}>
            {makeLabel(isRequired, inputLabel)}
          </FormLabel>
        ) : null}
        <InputGroup>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            name={inputIdentifier}
            id={inputIdentifier}
            value={inputValue}
            placeholder={hasFloatingLabel ? ' ' : placeholder}
            type="text"
            {...rest}
          />

          {hasFloatingLabel ? (
            <FormLabel htmlFor={inputIdentifier}>
              {makeLabel(isRequired, inputLabel)}
            </FormLabel>
          ) : null}

          {isInvalid && isRequired && (
            <InputRightElement>
              <WarningIcon color="red.600" />
            </InputRightElement>
          )}
        </InputGroup>

        {isInvalid && isRequired && (
          <FormErrorMessage>{inputErrorMessage}</FormErrorMessage>
        )}
      </FormControl>
    </ThemeProvider>
  );
};
