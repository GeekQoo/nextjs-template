export type ResProps<T = unknown> = {
    code: number;
    data?: T;
    msg?: string;

    [key: string]: unknown;
};

export type PaginationResProps<T = UnKnownObject> = ResProps<{
    list: T[];
    pagination: {
        page: number;
        size: number;
        total: number;
    };
}>;
