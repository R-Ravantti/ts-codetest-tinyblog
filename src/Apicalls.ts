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

export async function fetchAllPosts() {
    const res = await fetch('https://dummyjson.com/posts?limit=0');
    const resbody: PostJson = await res.json();
    return resbody.posts;
}