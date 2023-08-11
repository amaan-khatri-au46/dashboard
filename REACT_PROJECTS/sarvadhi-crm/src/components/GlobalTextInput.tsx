import React, { ChangeEvent } from 'react';
import TextField, { FilledTextFieldProps, OutlinedTextFieldProps } from '@mui/material/TextField';

// Props for the GlobalTextInput component
interface GlobalTextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // Any additional Material-UI textfield props you want to pass
  variant?: 'filled' | 'outlined';
  fullWidth?: boolean;
  height?: number | string; // Add height prop
  width?: number | string; // Add width prop
  fontSize?: number | string; // Add fontSize prop to adjust text size
  label?: string; // Add label prop
  responsiveWidth?: string; // Add responsiveWidth prop for responsive width
  // Add more specific props as needed
}

// Define a union type for all possible TextField props
type TextFieldProps = GlobalTextInputProps & (FilledTextFieldProps | OutlinedTextFieldProps);

const GlobalTextInput: React.FC<TextFieldProps> = ({
  value,
  onChange,
  height,
  width,
  fontSize, // Include fontSize prop in destructuring
  label, // Include label prop in destructuring
  responsiveWidth, // Include responsiveWidth prop in destructuring
  ...rest
}) => {
  const inputStyle: React.CSSProperties = {
    height,
    textAlign: 'center', // Center text horizontally
    lineHeight: typeof height === 'number' ? `${height}px` : height, // Center text vertically
    fontSize: fontSize || 'inherit', // Use the provided fontSize or 'inherit' if not specified
  };
  const textFieldStyle: React.CSSProperties = {
    width,
    ...(responsiveWidth && {
      '@media (max-width: 600px)': {
        width: responsiveWidth, // Apply the responsive width style
      },
    }),
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <TextField
        value={value}
        onChange={onChange}
        InputLabelProps={{ shrink: false }} // This ensures no label is displayed
        inputProps={{
          style: inputStyle,
        }}
        sx={textFieldStyle}
        {...rest}
      />
    </div>
  );
};

export default GlobalTextInput;
