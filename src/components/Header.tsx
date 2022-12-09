import { Logo } from './Header/Logo';
import { Profile } from './Header/Profile';
import { SearchBox } from './Header/SearchBox';
import { NotificationsNav } from './Header/NotificationsNav';

import { Flex } from '@chakra-ui/react';

export default function Header() {
	return (
		<Flex as='header' w='100%' maxWidth={1480} h='20' mx='auto' mt='4' px='6' align='center'>
			<Logo />

			<SearchBox />

			<Flex align='center' ml='auto'>
				<NotificationsNav />

				<Profile />
			</Flex>
		</Flex>
	);
}
