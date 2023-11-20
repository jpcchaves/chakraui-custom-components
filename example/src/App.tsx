import { AddIcon } from '@chakra-ui/icons';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { InputComponent, PasswordInput } from 'chakraui-custom-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FloatButton } from '../../src/components/floatButton/index';

const App = () => {
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    enableReinitialize: true,
    initialValues: {
      test1: '',
      test2: '',
    },
    validationSchema: Yup.object().shape({
      test1: Yup.string().required(),
      test2: Yup.string().required(),
    }),
    onSubmit: (values, formikHelpers) => {
      console.log(values, formikHelpers);
    },
  });

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p="12">
      <Flex flexDir={'column'} gap={4}>
        <Heading fontSize={'larger'}>Simple Input</Heading>
        <InputComponent
          hasFloatingLabel
          inputErrorMessage={errors.test1}
          inputIdentifier="test1"
          inputLabel="Teste 1"
          isInvalid={!!(errors.test1 && touched.test1)}
          isRequired
          onBlur={handleBlur}
          onChange={handleChange}
          inputValue={values.test1}
        />
      </Flex>
      <Flex flexDir={'column'} gap={4}>
        <Heading fontSize={'larger'}>Password Input</Heading>

        <PasswordInput
          hasFloatingLabel
          inputErrorMessage={errors.test2}
          inputIdentifier="test2"
          inputLabel="Teste 2"
          isInvalid={!!(errors.test2 && touched.test2)}
          isRequired
          onBlur={handleBlur}
          onChange={handleChange}
          inputValue={values.test2}
        />
      </Flex>
      <FloatButton
        icon={<AddIcon boxSize={'12px'} />}
        rounded={'full'}
        size={'md'}
        colorScheme="blue"
        onClick={e => console.log(e)}
      />
    </SimpleGrid>
  );
};

export default App;
