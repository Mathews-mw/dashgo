import * as yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';

import { api } from '../../services/api';
import Header from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { queryClient } from '../../services/queryClient';

const createUserSchema = yup.object({
	name: yup.string().required('Campo Nome obrigatório'),
	email: yup.string().email('E-mail inválido').required('Campo e-mail é obrigatório'),
	password: yup.string().required('Campo senha é obrigatório').min(6, 'No mínimo 6 caracteres'),
	password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

type createUserFormData = yup.InferType<typeof createUserSchema>;

export default function CreateUser() {
	const router = useRouter();

	const {
		handleSubmit,
		register,
		formState: { isSubmitting, errors },
	} = useForm<createUserFormData>({
		resolver: yupResolver(createUserSchema),
	});

	const createUSer = useMutation(
		async (user: createUserFormData) => {
			const response = await api.post('/users', {
				...user,
				created_at: new Date(),
			});

			return response.data.user;
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['users']);
			},
		}
	);

	async function handleCreateUser(data: createUserFormData) {
		await createUSer.mutateAsync(data);

		router.push('/users');
	}

	return (
		<Box>
			<Header />

			<Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
				<SideBar />

				<Box as='form' flex='1' borderRadius={8} bg='gray.800' p={['6', '8']} onSubmit={handleSubmit(handleCreateUser)}>
					<Heading size='lg' fontWeight='normal'>
						Criar usuário
					</Heading>

					<Divider my='6' borderColor='gray.700' />

					<VStack spacing='8'>
						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input label='Nome completo' error={errors.name} {...register('name')} />
							<Input type='email' label='E-mail' error={errors.email} {...register('email')} />
						</SimpleGrid>

						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input type='password' label='Senha' error={errors.password} {...register('password')} />
							<Input type='password' label='Confirmar senha' error={errors.password_confirmation} {...register('password_confirmation')} />
						</SimpleGrid>
					</VStack>

					<Flex mt='8' justify='flex-end'>
						<HStack spacing='4'>
							<Link href='/users' passHref>
								<Button as='a' colorScheme='whiteAlpha'>
									Cancelar
								</Button>
							</Link>
							<Button colorScheme='pink' type='submit'>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
