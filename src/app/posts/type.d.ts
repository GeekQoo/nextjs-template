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
    tags: {
        id: number;
        tagName: string;
    }[];
}

export interface PostsCategoryProps {
    categoryName: string;
}
