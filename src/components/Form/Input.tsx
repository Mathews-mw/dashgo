import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Input as ChacrkaInput, InputProps as ChacrkaInputProps } from '@chakra-ui/react';

interface InputProps extends ChacrkaInputProps {
	name: string;
	label?: string;
	error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
	return (
		<FormControl isInvalid={!!error}>
			{!!label && <FormLabel htmlFor={name}> {label} </FormLabel>}

			<ChacrkaInput name={name} id={name} focusBorderColor='pink.500' bgColor='gray.900' variant='filled' size='lg' _hover={{ bgColor: 'gray.900' }} ref={ref} {...rest} />

			{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
