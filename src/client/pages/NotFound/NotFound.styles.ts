import { css } from '@emotion/css';

export const container = () => css`
  display: grid;
  height: 50vh;
  place-items: center;
`;

export const inner = () => css`
  display: grid;
  gap: 16px;
  place-items: center;
`;

export const mainParagraph = () => css`
  color: #222222;
  @font-face {
    font-family: 'Noto Serif JP';
    src: url('/fonts/NotoSerifJP-Bold.woff') format('woff');
  }

  font-family: 'Noto Serif JP', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const subParagraph = () => css`
  color: #222222;

  @font-face {
    font-family: 'Noto Serif-Reg JP';
    src: url('/fonts/NotoSerifJP-Regular.woff') format('woff');
  }

  font-family: 'Noto Serif-Reg JP', sans-serif;
  font-size: 0.875rem;
`;
