export interface PostProps {
    id: number;
    title: string;
    content: string;
    summary: string;
    thumbnail: string;
    createdAt: string;
    category: {
        id: number;
        categoryName: string;
    };
}
