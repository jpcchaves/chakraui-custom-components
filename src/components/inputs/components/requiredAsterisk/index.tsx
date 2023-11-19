import React from 'react';
import { Text } from '@chakra-ui/react';

interface IRequiredAsterisk {}

export const RequiredAsterisk: React.FC<IRequiredAsterisk> = () => {
  return (
    <Text display={'inline'} color={'red.500'}>
      *
    </Text>
  );
};

export const makeLabel = (isRequired: boolean, label: string) => {
  return isRequired ? (
    <>
      {label} <RequiredAsterisk />
    </>
  ) : (
    <>{label}</>
  );
};
