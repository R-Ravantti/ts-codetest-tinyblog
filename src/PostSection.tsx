import { PostData } from "./Apicalls";

type PostSectionProps = {
    posts: PostData[]
}

function PostSection(props: PostSectionProps) {
    return (
        <div className="PostSection">
            {props.posts.map(post => {
                return <p>{post.title}</p>
            })}
        </div>
    )
}

export default PostSection;