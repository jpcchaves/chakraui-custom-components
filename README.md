# ChakraUI Custom Components

ChakraUI Custom Components is a library created by [jpcchaves](https://github.com/jpcchaves), a Software Engineer who loves using Chakra UI in his React TypeScript projects. This library includes a set of custom components commonly used in his projects, aiming to simplify development by avoiding code replication across projects.

## Installation

To install ChakraUI Custom Components in your project, run the following command:

```bash
npm install chakra-ui-custom-components
```

```bash
yarn add chakra-ui-custom-components
```

## Usage

### Importing Components

```tsx
import {
  InputComponent,
   /* other components */,
} from 'chakra-ui-custom-components';
```

## Components

### `InputComponent`

### Example Usage

```tsx
import React from 'react';
import { InputComponent } from 'chakra-ui-custom-components';

const MyForm: React.FC = () => {
  return (
    <InputComponent
      inputLabel="Username"
      isRequired
      handleChange={() => {}}
      handleBlur={() => {}}
      inputValue=""
      inputIdentifier="username"
    />
  );
};
```

| Prop                | Type                               | Description                                           |
| ------------------- | ---------------------------------- | ----------------------------------------------------- |
| `inputLabel`        | `string`                           | The label for the input.                              |
| `isRequired`        | `boolean`                          | Indicates if the input is required.                   |
| `handleChange`      | `function`                         | The function to handle input changes.                 |
| `handleBlur`        | `function`                         | The function to handle input blur.                    |
| `inputValue`        | `string`                           | The value of the input.                               |
| `inputIdentifier`   | `string`                           | A unique identifier for the input.                    |
| `isInvalid`         | `boolean`                          | Indicates if the input is invalid.                    |
| `inputErrorMessage` | `string`                           | The error message to display for an invalid input.    |
| `hasFloatingLabel`  | `boolean` (optional)               | Adds a floating label effect.                         |
| `placeholder`       | `string` (optional)                | The placeholder text.                                 |
| `variant`           | `string` (optional)                | The Chakra UI variant for the input.                  |
| `...rest`           | `InputProps` (optional, inherited) | Additional input properties inherited from Chakra UI. |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
