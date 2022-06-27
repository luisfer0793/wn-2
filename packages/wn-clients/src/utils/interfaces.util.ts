export interface TestimonialProps {
  author: string;
  title: string;
  image: string;
  socialMedia: {
    name: string;
    url: string;
  }[];
  quote: string;
  location: string;
}
