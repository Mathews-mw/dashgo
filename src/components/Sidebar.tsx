import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { RiDashboardLine, RiContactsLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

export function SideBar() {
	return (
		<Box as='aside' w='64' mr='8'>
			<Stack spacing='12' align='flex-start'>
				<Box>
					<Text fontWeight='bold' color='gray.400' fontSize='small'>
						GERAL
					</Text>
					<Stack spacing='4' mt='8' align='strech'>
						<Link display='flex' alignItems='center'>
							<Icon fontSize='20' as={RiDashboardLine} />
							<Text ml='4' fontWeight='medium'>
								Dashboard
							</Text>
						</Link>
						<Link display='flex' alignItems='center'>
							<Icon fontSize='20' as={RiContactsLine} />
							<Text ml='4' fontWeight='medium'>
								Usuários
							</Text>
						</Link>
					</Stack>
				</Box>

				<Box>
					<Text fontWeight='bold' color='gray.400' fontSize='small'>
						AUTOMAÇÃO
					</Text>
					<Stack spacing='4' mt='8' align='strech'>
						<Link display='flex' alignItems='center'>
							<Icon fontSize='20' as={RiInputMethodLine} />
							<Text ml='4' fontWeight='medium'>
								Formulários
							</Text>
						</Link>
						<Link display='flex' alignItems='center'>
							<Icon fontSize='20' as={RiGitMergeLine} />
							<Text ml='4' fontWeight='medium'>
								Automação
							</Text>
						</Link>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
}
