import { ChangeEvent } from "react";

export enum SortField {
  name = "name",
  birthday = "birthday",
  empty = "",
}
export interface MenuProps {
  filter: {
    role: string;
    isArchive: boolean;
  };
  handleFilterChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSortChange: (field: SortField) => void;
  sortField: SortField.birthday | SortField.name | SortField.empty;
  sortOrder: string;
}
