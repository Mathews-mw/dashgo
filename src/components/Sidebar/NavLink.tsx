import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import Link from 'next/link';
import { ElementType } from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { ActiveLink } from '../ActiveLink';

interface INavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	children: string;
	href: string;
}

export function NavLink({ icon, children, href, ...rest }: INavLinkProps) {
	return (
		<ActiveLink href={href} passHref>
			<ChakraLink display='flex' alignItems='center' {...rest}>
				<Icon fontSize='20' as={icon} />
				<Text ml='4' fontWeight='medium'>
					{children}
				</Text>
			</ChakraLink>
		</ActiveLink>
	);
}
