import {Comment} from "./Comment/Comment";

export function Comments ({comments}) {
    const currentComments = comments.map((comment) => <Comment comment={comment} key={self.crypto.randomUUID()}/>)
    return (
        <ul>
            { currentComments }
        </ul>
    );
}
