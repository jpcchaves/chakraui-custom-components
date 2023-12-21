import {
  FormControl,
  FormErrorMessage,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';
import React, { ChangeEvent, FocusEvent } from 'react';
import { OmittedInputProps } from '../../types/OmittedInputProps';

interface IProps extends Omit<TextareaProps, OmittedInputProps> {
  inputLabel: string;
  isInvalid?: boolean;
  isRequired: boolean;
  onChange: (e?: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e?: FocusEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
  inputErrorMessage?: string;
  inputIdentifier: string;
}

const TextareaInput = ({
  inputLabel,
  isInvalid = false,
  inputErrorMessage,
  onChange,
  onBlur,
  inputValue,
  inputIdentifier,
  isRequired,
  placeholder,
  ...rest
}: IProps) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <Textarea
        onChange={onChange}
        onBlur={onBlur}
        name={inputIdentifier}
        id={inputIdentifier}
        value={inputValue}
        {...rest}
      />
      {isInvalid && isRequired && (
        <FormErrorMessage>{inputErrorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TextareaInput;
