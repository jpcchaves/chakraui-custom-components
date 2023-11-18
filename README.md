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

### Utility Function: `floatingLabelVariant`

The `floatingLabelVariant` function returns custom styles for a floating label variant within the Chakra UI `Form` component. It takes two parameters:

- `floatingLabelBgLight` (string): Background color for the label when the overall background is light.
- `floatingLabelBgDark` (string): Background color for the label when the overall background is dark.

```tsx
// Import this function to get custom styles for the floating label variant
export const floatingLabelVariant = (
  floatingLabelBgLight: string,
  floatingLabelBgDark: string
) => {
  return {
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
                backgroundColor: floatingLabelBgLight,
                pointerEvents: 'none',
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: 'left top',
                _dark: {
                  backgroundColor: floatingLabelBgDark,
                },
              },
            },
          },
        },
      },
    },
  };
};
```

## Applying the Floating Label Variant

Follow these instructions to seamlessly integrate the custom floating label variant into your Chakra UI theme configuration.

### 1. Import Dependencies

In your Chakra theme configuration file, start by importing the necessary dependencies:

```tsx
// In the user's Chakra theme configuration file
import { extendTheme } from '@chakra-ui/react';
import { floatingLabelVariant } from 'chakraui-custom-components';
```

### 2.Define Background Colors and pass them to floatingLabelVariant method

Define the background colors for the floating label variant in both light and dark modes:

```tsx
const floatingLabelBgLight = '#FFFFFF'; // Set your desired light mode background color
const floatingLabelBgDark = '#1B254B'; // Set your desired dark mode background color

const floatingLabelStyle = floatingLabelVariant(
  floatingLabelBgLight,
  floatingLabelBgDark
); // the function returns the custom variant with the custom background colors your selected
```

### 3. Use the floatingLabelStyle in your chakra global styles definition

```tsx
const globalStyles = {
  components: {
    ...floatingLabelStyles,
  },
};
```

### 4. Add the global styles in your chakra theme definition

```tsx
const theme = extendTheme(globalStyles);
```

### 5. Add theme in Chakra Provider

```tsx
<ChakraProvider theme={theme}>/* your app*/</ChakraProvider>
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

### `PasswordInput`

### Example Usage

```tsx
import React from 'react';
import { PasswordInput } from 'chakra-ui-custom-components';

const MyForm: React.FC = () => {
  return (
    <PasswordInput
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
| `inputLabel`        | `string`                           | The label for the password input.                     |
| `isRequired`        | `boolean`                          | Indicates if the password input is required.          |
| `handleChange`      | `function`                         | The function to handle password input changes.        |
| `handleBlur`        | `function`                         | The function to handle password input blur.           |
| `inputValue`        | `string`                           | The value of the password input.                      |
| `inputIdentifier`   | `string`                           | A unique identifier for the password input.           |
| `isInvalid`         | `boolean`                          | Indicates if the password input is invalid.           |
| `inputErrorMessage` | `string`                           | The error message to display for an invalid password. |
| `hasFloatingLabel`  | `boolean` (optional)               | Adds a floating label effect.                         |
| `placeholder`       | `string` (optional)                | The placeholder text for the password input.          |
| `variant`           | `string` (optional)                | The Chakra UI variant for the password input.         |
| `...rest`           | `InputProps` (optional, inherited) | Additional input properties inherited from Chakra UI. |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
