export type PaginationResProps<T = UnKnownObject> = {
    list: T[];
    pagination: {
        page: number;
        size: number;
        total: number;
    };
};
