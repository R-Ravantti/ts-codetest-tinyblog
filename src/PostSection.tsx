import Collapsible from "react-collapsible";
import './css/PostSection.css';
import { PostData } from "./Apicalls";
import PostCard from "./PostCard";

type PostSectionProps = {
    posts: PostData[],
    tag: string
}

function PostSection(props: PostSectionProps) {
    const {posts, tag} = props;
    return (
        <Collapsible trigger={`Tagged: ${tag}`} open={true}>
            {posts.map(post => {
                return <PostCard post={post}/>
            })}
        </Collapsible>
    )
}

export default PostSection;