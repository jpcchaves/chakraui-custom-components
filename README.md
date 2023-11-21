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
    ...floatingLabelStyle,
  },
};
```

### 4. Add the global styles in your chakra theme definition

```tsx
const theme = extendTheme(
  {
    /* you theme extensions here */
  },
  globalStyles
);
```

### 5. Add theme in Chakra Provider

```tsx
<ChakraProvider theme={theme}>/* your app*/</ChakraProvider>
```

| Prop                   | Type                                         | Description                                                                  |
| ---------------------- | -------------------------------------------- | ---------------------------------------------------------------------------- |
| `inputLabel`           | `string`                                     | The label for the input field.                                               |
| `isInvalid`            | `boolean`                                    | Indicates whether the input is in an invalid state.                          |
| `inputErrorMessage`    | `string`                                     | Error message to be displayed when `isInvalid` is `true`.                    |
| `onChange`             | `(e?: FormEvent<HTMLInputElement>) => void`  | Event handler for the input change event.                                    |
| `onBlur`               | `(e?: FocusEvent<HTMLInputElement>) => void` | Event handler for the input blur event.                                      |
| `inputValue`           | `string`                                     | The current value of the input.                                              |
| `inputIdentifier`      | `string`                                     | A unique identifier for the input.                                           |
| `isRequired`           | `boolean`                                    | Indicates whether the input is required.                                     |
| `hasFloatingLabel`     | `boolean`                                    | Indicates whether the input has a floating label.                            |
| `placeholder`          | `string`                                     | Placeholder text for the input.                                              |
| `floatingLabelBgColor` | `string`                                     | Background color for the floating label. Default is `'#FFFFFF'`.             |
| `...rest`              | `OmittedInputProps`                          | Additional input props that are omitted from the standard `Input` component. |

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

# `ScrollTop`

The `ScrollTop` component is a React component designed to provide a convenient "scroll to top" button for a web page. When the user scrolls down the page, the button becomes visible, and clicking it smoothly scrolls the page back to the top.

## Usage

Import the `ScrollTop` component into your React application and use it within your desired component or layout.

```tsx
import { ScrollTop } from './ScrollTop';

// ... your other imports

const YourComponent = () => {
  // ... your component logic

  return (
    <div>
      {/_ Your component content _/}
      {/_ ... _/}

      {/* ScrollTop component */}
      <ScrollTop />
    </div>
  );
};

export default YourComponent;
```

## Props

The `ScrollTop` component accepts the following props:

- `...rest`: (Optional) Any additional props that can be passed to `IconButton` from `@chakra-ui/react`.
- `aria-label`: (Automatically handled) ARIA label for accessibility.

## Behavior

- The button becomes visible when the user scrolls down the page.
- Clicking the button smoothly scrolls the page back to the top.

## Example

```tsx
import { ArrowUpIcon } from '@chakra-ui/icons';
import { ScrollTop } from './ScrollTop';

const ExampleComponent = () => {
  return (
    <div>
      {/_ Your component content _/}
      {/_ ... _/}

      {/* ScrollTop component with custom props */}
      <ScrollTop
        colorScheme="teal"
        size="lg"
        // ... other IconButton props
      />
    </div>
  );
};

export default ExampleComponent;
```

Feel free to customize the `ScrollTop` component by passing additional props to the `IconButton` component.

# ScrollTop Component Props

| Prop       | Type                                        | Description                                                         |
| ---------- | ------------------------------------------- | ------------------------------------------------------------------- |
| ...rest    | `IconButtonProps` (from `@chakra-ui/react`) | Additional props that can be passed to `IconButton`.                |
| aria-label | `string`                                    | ARIA label for accessibility. Automatically handled for the button. |

## Example

```tsx
<ScrollTop
  ...rest
  aria-label="Your ARIA label"
/>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
