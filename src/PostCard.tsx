import './css/PostCard.css';
import { PostData } from "./Apicalls";

type PostCardProps = {
    post: PostData
}

function PostCard(props: PostCardProps) {
    const post = props.post;
    return (
        <div className="PostCard">
            <p>{post.title}</p>
        </div>
    )
}

export default PostCard;