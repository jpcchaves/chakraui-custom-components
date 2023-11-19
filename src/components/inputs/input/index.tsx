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
import React, { FocusEvent, FormEvent } from 'react';
import { makeLabel } from '../requiredAsterisk';

type OmittedInputProps = 'onChange' | 'onBlur';

interface IProps extends Omit<InputProps, OmittedInputProps> {
  inputLabel: string;
  isInvalid?: boolean;
  isRequired: boolean;
  onChange: (e?: FormEvent<HTMLInputElement>) => void;
  onBlur: (e?: FocusEvent<HTMLInputElement>) => void;
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
  onChange,
  onBlur,
  inputValue,
  inputIdentifier,
  isRequired,
  hasFloatingLabel = false,
  placeholder,
  floatingLabelBgColor = '#FFFFFF',
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
          onChange={onChange}
          onBlur={onBlur}
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
