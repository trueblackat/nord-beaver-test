export enum EFilterTypes {
  ALL= 'all',
  ARMOR = 'armor',
  WEAPON = 'weapon',
  MISC = 'misc',
}

export interface IFilter {
  type: EFilterTypes,
  icon: string,
  width: string,
  height: string,
  label: string,
}
