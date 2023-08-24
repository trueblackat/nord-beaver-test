import { IScrollData } from '../types/scroll.ts';

// eslint-disable-next-line import/prefer-default-export
export const getScrollDataFromElement = (el: HTMLElement): IScrollData => ({
  viewHeight: el.clientHeight,
  scrollHeight: el.scrollHeight,
  scrollTop: el.scrollTop,
});
