import { Hit } from '../models/search/all';
import { atom } from 'recoil';

export const hitState = atom<Hit>({
  key: 'hitState',
  default: undefined
})