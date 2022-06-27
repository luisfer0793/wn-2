import {FC, forwardRef, Fragment, Ref} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Divider, ScrollArea, Stack, Title } from '@mantine/core';
import { useNavbar } from 'hooks';
import {NAVBAR_CLIENT_LINKS} from 'utils/constants.util';
import NavbarLink from '../../common/links/NavbarLink/NavbarLink.component';
import UserProfileCard from '../../common/cards/UserProfile/UserProfileCard.component';
import { useStyles } from './Navbar.styles';

interface LinkProps {
  to: string;
  label: string;
  icon: string;
}

interface LinksProps {
  General: LinkProps[];
  Salud: LinkProps[];
  Market: LinkProps[];
  Apps: LinkProps[];
}

interface NavbarProps {
  ref: Ref<HTMLDivElement>
}

const Navbar: FC<NavbarProps> = forwardRef<HTMLDivElement, NavbarProps>((_, ref) => {
  const { isVisible } = useNavbar();
  
  const {
    classes: { linksWrapper, navbar, sectionTitle, section, grow, divider },
    cx,
  } = useStyles({ isVisible });
  
  return (
    <nav ref={ref} className={navbar}>
      <section className={cx(section)}>
        <UserProfileCard />
      </section>
      <Divider className={divider} />
      <ScrollArea scrollbarSize={4} offsetScrollbars>
        <section className={cx(section, grow)}>
          {Object.keys(NAVBAR_CLIENT_LINKS).map(key => (
            <Fragment key={nanoid()}>
              <Title order={5} className={sectionTitle}>
                {key}
              </Title>
              <Stack spacing="xs" className={linksWrapper}>
                {NAVBAR_CLIENT_LINKS[key as keyof LinksProps].map(link => (
                  <NavbarLink key={nanoid()} link={link} />
                ))}
              </Stack>
            </Fragment>
          ))}
        </section>
      </ScrollArea>
    </nav>
  );
});

export default Navbar;

