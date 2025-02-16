export interface Post{
    id: number;
    name: string;
}

export default function getPosts(): Post[]{
    const posts: Post[] = [
        { id: 1, name: 'Post 1'},
        { id: 2, name: 'Post 2' },
        { id: 3, name: 'Post 3'},
      ]
    return posts;
}