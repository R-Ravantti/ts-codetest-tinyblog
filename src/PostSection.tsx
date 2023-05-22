import { PostData } from "./Apicalls";
import PostCard from "./PostCard";

type PostSectionProps = {
    posts: PostData[]
}

function PostSection(props: PostSectionProps) {
    return (
        <div className="PostSection">
            {props.posts.map(post => {
                return <PostCard post={post}/>
            })}
        </div>
    )
}

export default PostSection;