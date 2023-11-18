const activeLabelStyles = {
    transform: 'scale(0.85) translateY(-24px)',
  };

 export const floatingLabelVariant = (floatingLabelBgColor: string) =>  {
    return {
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
  }}