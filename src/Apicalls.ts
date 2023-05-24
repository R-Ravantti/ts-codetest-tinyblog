export type PostData = {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number
}

type PostJson = {
    posts: PostData[],
    total: number,
    skip: number,
    limit: number
}

export async function fetchAllPosts(setPosts: React.Dispatch<React.SetStateAction<PostData[]>>) {
    const res = await fetch('https://dummyjson.com/posts');
    const resbody: PostJson = await res.json();
    setPosts(resbody.posts);
}