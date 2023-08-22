export type SearchResultItem = {
    id: string;
    name: string;
    description: string;
    icon?: string;
};

export interface Searchable {
    toSearchResultItem(): SearchResultItem;
}
