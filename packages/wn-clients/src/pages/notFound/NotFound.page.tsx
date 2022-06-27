import { useNavigate } from 'react-router-dom';
import { Button, Container, Image, Text, Title } from '@mantine/core';
import { WNWithHelmet } from '@wn/shared';
import SVG_404 from 'assets/svg/SVG_IMAGE_404.svg';
import { useStyles } from './NotFound.styles';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const {
    classes: { wrapper, image },
  } = useStyles();

  const onClickHandler = () => {
    navigate('/', { replace: true });
  };

  return (
    <WNWithHelmet title="404 | No encontrado">
      <Container>
        <div className={wrapper}>
          <Title order={1} mb={16}>
            Oops! No pudimos encontrar la página que solicitaste
          </Title>
          <Text component="p">
            El enlace que has seguido quizá este roto o la página se ha movido
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

export default NotFoundPage;
