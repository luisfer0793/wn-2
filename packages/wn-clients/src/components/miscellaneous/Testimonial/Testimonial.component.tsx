import { FC } from 'react';
import { Avatar, Blockquote, Text, Center } from '@mantine/core';
import { TestimonialProps } from 'utils/interfaces.util';

import { useStyles } from './Testimonial.styles';

interface ITestimonial {
  testimonial: TestimonialProps;
}

const Testimonial: FC<ITestimonial> = ({ testimonial }) => {
  const {
    classes: { quote, title, cite, root },
  } = useStyles();

  return (
    <article>
      <Center>
        <Avatar src={testimonial.image} radius={50} size={60} />
      </Center>
      <Blockquote
        color="green"
        cite={`-${testimonial.author}`}
        className={quote}
        classNames={{ cite, root }}
      >
        {testimonial.quote}
      </Blockquote>
      <Text className={title}>&nbsp;{testimonial.title}</Text>
    </article>
  );
};

export default Testimonial;
