import { animate, style, trigger, transition, state } from '@angular/animations';

export const slideRightAnimation = trigger('slideRight', [
  state(
    'void',
    style({
      width: '0%',
      transform: 'translateX(-100%)',
      opacity: 0,
    }),
  ),
  state(
    '*',
    style({
      width: '100%',
      transform: 'translateX(0)',
    }),
  ),
  transition('void => *', animate('500ms ease-in')),
  transition('* => void', animate('500ms ease-out')),
]);

export const slideLeftAnimation = trigger('slideLeft', [
  state(
    'void',
    style({
      width: '0%',
      transform: 'translateX(100%)',
      opacity: 0,
    }),
  ),
  state(
    '*',
    style({
      width: '100%',
      transform: 'translateX(0)',
    }),
  ),
  transition('void => *', animate('500ms ease-in')),
  transition('* => void', animate('500ms ease-out')),
]);
