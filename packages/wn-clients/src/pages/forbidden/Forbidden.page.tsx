import { useNavigate } from 'react-router-dom';
import { Button, Container, Image, Text, Title } from '@mantine/core';
import { WNWithHelmet } from '@wn/shared';
import SVG_404 from 'assets/svg/SVG_IMAGE_FORBIDDEN.svg';
import { useStyles } from './Forbidden.styles';

const ForbiddenPage = () => {
  const navigate = useNavigate();

  const {
    classes: { wrapper, image },
  } = useStyles();

  const onClickHandler = () => {
    navigate('/', { replace: true });
  };

  return (
    <WNWithHelmet title="Acceso no autorizado">
      <Container>
        <div className={wrapper}>
          <Title order={1} mb={16}>
            Acceso no autorizado
          </Title>
          <Text component="p">
            No tienes permiso para ver esta página, inicia sesión para poder
            continuar.
          </Text>
          <Image src={SVG_404} className={image} />
          <Button color="dark" onClick={onClickHandler}>
            Volver a la página principal
          </Button>
        </div>
      </Container>
    </WNWithHelmet>
  );
};

export default ForbiddenPage;
