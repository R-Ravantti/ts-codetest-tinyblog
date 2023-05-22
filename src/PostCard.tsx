import { PostData } from "./Apicalls";

type PostCardProps = {
    post: PostData
}

function PostCard(props: PostCardProps) {
    return (
        <div className="PostCard">
            <p>{props.post.title}</p>
        </div>
    )
}

export default PostCard;