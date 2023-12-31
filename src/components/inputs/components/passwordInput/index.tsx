import { ViewIcon, ViewOffIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FocusEvent, FormEvent, useCallback } from 'react';
import { makeLabel } from '../requiredAsterisk';
import { OmittedInputProps } from '../../types/OmittedInputProps';

interface IProps extends Omit<InputProps, OmittedInputProps> {
  hasFloatingLabel?: boolean;
  inputLabel?: string;
  inputName?: string;
  isInvalid?: boolean;
  isRequired: boolean;
  onChange: (e?: FormEvent<HTMLInputElement>) => void;
  onBlur: (e?: FocusEvent<HTMLInputElement>) => void;
  inputValue: string;
  inputErrorMessage?: string;
  inputIdentifier: string;
}

export const PasswordInput = ({
  inputLabel = 'Senha',
  isInvalid,
  isRequired,
  onChange,
  onBlur,
  inputValue,
  hasFloatingLabel = false,
  inputErrorMessage,
  inputIdentifier,
  placeholder,
  ...rest
}: IProps) => {
  const { isOpen, onToggle } = useDisclosure();

  const onClickReveal = useCallback(() => {
    onToggle();
  }, [isOpen]);

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
        <InputRightElement>
          <IconButton
            as={Box}
            cursor={'pointer'}
            variant="text"
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <ViewOffIcon /> : <ViewIcon />}
            onClick={onClickReveal}
            mr={isInvalid ? '12' : ''}
          />
        </InputRightElement>
        <Input
          onChange={onChange}
          onBlur={onBlur}
          name={inputIdentifier}
          id={inputIdentifier}
          value={inputValue}
          type={isOpen ? 'text' : 'password'}
          placeholder={hasFloatingLabel ? ' ' : placeholder}
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

PasswordInput.displayName = 'PasswordInput';
