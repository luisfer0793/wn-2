import { Fragment, FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useScrollLock, useToggle } from '@mantine/hooks';
import {
  Burger,
  Button,
  Container,
  Divider,
  Group,
  Header as StyledHeader,
  Indicator,
  MediaQuery,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import { useAuthentication, useNavbar } from 'hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { HEADER_LINKS } from 'utils/constants.util';
import { useStyles } from './Header.styles';

const Header: FC = () => {
  const [isOpen, toggleHandler] = useToggle(false, [true, false]);

  const { isVisible, handleToggle } = useNavbar();

  const { isAuthenticated } = useAuthentication();

  const [, setScrollLocked] = useScrollLock();

  const { classes, cx } = useStyles({ isOpen, isAuthenticated });

  const rootPath = isAuthenticated ? '/cliente' : '/';

  const onToggleBurgerHandler = () => {
    toggleHandler();
  };

  useEffect(() => {
    setScrollLocked(isOpen);
  }, [isOpen, setScrollLocked]);

  return (
    <Fragment>
      <StyledHeader height={70} className={classes.header}>
        <Container fluid className={classes.container}>
          <div className={classes.flex}>
            {isAuthenticated && (
              <>
                <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
                  <Text
                    weight={700}
                    to={rootPath}
                    component={Link}
                    className={classes.logo}
                  >
                    Wellnub
                  </Text>
                </MediaQuery>
                <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
                  <Group spacing="xs" sx={{ marginRight: 'auto' }}>
                    <Burger opened={isVisible} onClick={handleToggle} />
                    <Text component="p">Menu</Text>
                  </Group>
                </MediaQuery>
                <Group spacing="lg">
                  <Indicator
                    inline
                    size={12}
                    position="bottom-end"
                    color="red"
                    withBorder
                  >
                    <FontAwesomeIcon icon={faBell} />
                  </Indicator>
                  {/*<AvatarDropdown />*/}
                </Group>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Text
                  weight={700}
                  to={rootPath}
                  component={Link}
                  className={classes.logo}
                >
                  Wellnub
                </Text>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={isOpen}
                    onClick={onToggleBurgerHandler}
                    sx={{ marginLeft: 'auto' }}
                  />
                </MediaQuery>
                <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
                  <div className={classes.spaceBetween}>
                    <ul className={cx(classes.flex, classes.list)}>
                      {HEADER_LINKS.map(link => (
                        <li key={nanoid()} className={classes.listItem}>
                          <Text
                            className={classes.asLink}
                            component={Link}
                            to={link.to}
                            size="sm"
                          >
                            {link.label}
                          </Text>
                        </li>
                      ))}
                    </ul>
                    <div className={classes.flex}>
                      <Button
                        component={Link}
                        to="iniciar-sesion"
                        color="green"
                      >
                        Iniciar sesión
                      </Button>
                      <Space w="sm" />
                      <Button variant="subtle" color="green">
                        Registrarse
                      </Button>
                    </div>
                  </div>
                </MediaQuery>
              </>
            )}
          </div>
        </Container>
      </StyledHeader>

      {/* ---- RESPONSIVE MENU ---- */}
      <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
        <aside className={classes.sidebar}>
          <nav>
            <ul className={classes.list}>
              {HEADER_LINKS.map(link => (
                <li key={nanoid()} className={classes.sidebarItem}>
                  <Text
                    className={classes.asLink}
                    component={Link}
                    to={link.to}
                    size="sm"
                    onClick={onToggleBurgerHandler}
                  >
                    {link.label}
                  </Text>
                </li>
              ))}
            </ul>
          </nav>
          <footer>
            <Stack>
              <Button
                fullWidth
                color="green"
                component={Link}
                to="/iniciar-sesion"
              >
                Iniciar sesión
              </Button>
              <Button
                fullWidth
                color="green"
                variant="outline"
                component={Link}
                to="/registrarse"
              >
                Registrarse
              </Button>
            </Stack>
            <br />
            <Divider />
            <br />
            <Text component="p" className={classes.copyright}>
              &copy; 2022. All rights reserved
            </Text>
          </footer>
        </aside>
      </MediaQuery>
    </Fragment>
  );
};

export default Header;
