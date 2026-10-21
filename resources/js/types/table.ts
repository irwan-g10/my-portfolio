export interface Column<T> {
    header: string;
    accessor: keyof T | string;
    render?: (item: T) => React.ReactNode;
}
export interface TableProps<T> {
    data: T[];
    href: string;
    columns: Column<T>[];
}