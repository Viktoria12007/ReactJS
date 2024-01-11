import {createContext} from "react";

type CommentContextType = {
    value: string,
    onChange: (value: string) => void,
}

export const commentContext = createContext<CommentContextType>({
    value: '',
    onChange: () => {},
});
