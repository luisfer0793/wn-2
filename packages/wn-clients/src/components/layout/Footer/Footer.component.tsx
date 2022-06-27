import { FC, forwardRef, Ref } from 'react';
import { Container, Text, Title } from '@mantine/core';
import { useStyles } from './Footer.styles';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

interface FooterProps {
  ref: Ref<HTMLDivElement>;
}

const LINKS = {
  company: [
    { to: '/aviso-de-privacidad', label: 'Aviso de privacidad' },
    { to: '/terminos-y-condiciones', label: 'Términos y condiciones' },
  ],
  support: [
    { to: '/preguntas-frecuentes', label: 'FAQ' },
    { to: '/oportunidades', label: 'Trabaja con nosotros' },
  ],
  media: [
    { to: '/facebook', label: 'Facebook' },
    { to: '/instagram', label: 'Instagram' },
  ],
};

const Footer: FC<FooterProps> = forwardRef<HTMLDivElement, FooterProps>(
  (_, ref) => {
    const { classes } = useStyles();

    return (
      <footer className={classes.footer} ref={ref}>
        <Container size="xl">
          <div className={classes.grid}>
            <section className={classes.areaCopyright}>
              <Title order={5} className={classes.title}>
                WELLNUB
              </Title>
              <Text className={classes.text}>
                Wellnub e InBody&reg; son una marca registrada. Todos los
                derechos reservados. 2022
              </Text>
            </section>
            <section className={classes.areaCompany}>
              <Title order={6} className={classes.title}>
                Empresa
              </Title>
              <ul className={classes.list}>
                {LINKS.company.map(link => (
                  <li className={classes.listItem} key={nanoid()}>
                    <Text
                      className={classes.text}
                      component={Link}
                      to={link.to}
                    >
                      {link.label}
                    </Text>
                  </li>
                ))}
              </ul>
            </section>
            <section className={classes.areaSupport}>
              <Title order={6} className={classes.title}>
                Soporte
              </Title>
              <ul className={classes.list}>
                {LINKS.support.map(link => (
                  <li className={classes.listItem} key={nanoid()}>
                    <Text
                      className={classes.text}
                      component={Link}
                      to={link.to}
                    >
                      {link.label}
                    </Text>
                  </li>
                ))}
              </ul>
            </section>
            <section className={classes.areaMedia}>
              <Title order={6} className={classes.title}>
                Social
              </Title>
              <ul className={classes.list}>
                {LINKS.media.map(link => (
                  <li className={classes.listItem} key={nanoid()}>
                    <Text
                      className={classes.text}
                      component={Link}
                      to={link.to}
                    >
                      {link.label}
                    </Text>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Container>
      </footer>
    );
  },
);

export default Footer;
