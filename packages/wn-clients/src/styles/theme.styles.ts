import { Tuple } from '@mantine/core';

const wnSlate: Tuple<string, 10> = [
  '#F8FAFC',
  '#F1F5F9',
  '#E2E8F0',
  '#CBD5E1',
  '#94A3B8',
  '#64748B',
  '#475569',
  '#334155',
  '#1E293B',
  '#0F172A',
];

const wnGreen: Tuple<string, 10> = [
  '#d5e4e4',
  '#abc9c9',
  '#80afaf',
  '#569494',
  '#2c7979',
  '#236161',
  '#1f5555',
  '#1a4949',
  '#123030',
  '#091818',
];

export const theme = {
  fontFamily: "'Outfit', sans-serif",
  headings: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
  },
  colors: {
    wnSlate,
    wnGreen,
  },
  other: {
    responsiveFontSizes: [
      '1.5rem',
      '2.8rem',
      '2.4rem',
      '2rem',
      '1.8rem',
      '1.6rem',
      '1.5rem',
    ],
  },
};
