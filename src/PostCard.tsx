import './css/PostCard.css';
import { PostData } from "./Apicalls";

type PostCardProps = {
    post: PostData
}

function PostCard(props: PostCardProps) {
    const post = props.post;
    return (
        <div className="PostCard">
            <div className="PostCard-Title">
            <p className="Title-Paragraph">{post.title}</p>
            </div>
            <hr />
            <div className="PostCard-Body">
            <p className="Body-Paragraph">{post.body}</p>
            </div>
            <hr />
            <div className="PostCard-Tags">
                {post.tags.map(tag => {
                    return <p className="Tag-Paragraph">{tag}</p>
                })}
            </div>
        </div>
    )
}

export default PostCard;