import {atom} from "recoil";

export const commentPost = atom({
    key: 'commentPost', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});
