// setup dayjs

import dayjs from "dayjs";

export const formatDate = (publishedAt: Date) => {
  const date$ = dayjs(publishedAt);
  return `
  ${date$.year()}년 
  ${date$.month() + 1}월 
  ${date$.date()}일 
  ${date$.hour()}:${date$.minute()}
`;
};
