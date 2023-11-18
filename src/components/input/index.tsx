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
  ...rest
}: IProps) => {
  return (
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
  );
};
