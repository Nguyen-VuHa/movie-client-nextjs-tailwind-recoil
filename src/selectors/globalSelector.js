import { globalState } from '@/atoms/globalState';
import { selector } from 'recoil';


export const globalSelector = selector({
    key: 'globalSelector',
    get: ({ get }) => {
        const globalState = get(globalState);
        return list.filter((item) => !item.completed).length;
    },
    set: ({ set }) => {
        console.log(set);
    }
});