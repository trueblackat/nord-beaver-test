import { EFilterTypes } from '../../types/filters.ts';

// eslint-disable-next-line import/prefer-default-export
export const filterButtons = [
  {
    type: EFilterTypes.ALL,
    icon: 'all',
    width: '34px',
    height: '34px',
    label: 'All items',
  },
  {
    type: EFilterTypes.ARMOR,
    icon: 'armor',
    width: '41px',
    height: '43px',
    label: 'Armor',
  },
  {
    type: EFilterTypes.WEAPONS,
    icon: 'weapons',
    width: '33px',
    height: '32px',
    label: 'Apons',
  },
  {
    type: EFilterTypes.MISC,
    icon: 'misc',
    width: '33px',
    height: '43px',
    label: 'Weneous',
  },
];
