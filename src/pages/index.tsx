import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const sigInSchema = yup.object({
	email: yup.string().email('E-mail inválido').required('Campo e-mail é obrigatório'),
	password: yup.string().required('Campo senha é obrigatório'),
});

type SigInIpuntsForm = yup.InferType<typeof sigInSchema>;

export default function SingIn() {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting, errors },
	} = useForm<SigInIpuntsForm>({
		resolver: yupResolver(sigInSchema),
	});

	function handleSigIn(data: SigInIpuntsForm) {
		console.log(data);
	}

	return (
		<Flex w='100vw' h='100vh' align='center' justify='center'>
			<Flex as='form' w='100%' maxWidth={360} bg='gray.800' p='8' borderRadius={8} flexDir='column' onSubmit={handleSubmit(handleSigIn)}>
				<Stack spacing={4}>
					<Input type='email' label='E-mail' {...register('email')} error={errors.email} />
					<Input type='password' label='Senha' {...register('password')} error={errors.password} />
				</Stack>
				<Button type='submit' mt='6' colorScheme='pink' isLoading={isSubmitting}>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
