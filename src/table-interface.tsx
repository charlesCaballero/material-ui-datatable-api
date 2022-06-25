export interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

export type FilterOperators =
  | 'contains'
  | 'matches with'
  | 'starts with'
  | 'ends with'
  | 'is empty'
  | 'not empty';

export interface FilterType {
  column: string;
  operator: FilterOperators;
  value: string;
}

export interface PopoverProps {
  anchorEl: any;
  onClose(): void;
  id: string;
}

export interface ActiveColumns {
  id: string;
  active: boolean;
  label: string;
}

export type FilterFields = 'column' | 'operator' | 'value';

export interface FilterProps extends PopoverProps {
  header: HeadCell[];
  filters: FilterType[];
  onFilterChange(value: string, field: FilterFields, column: string): void;
  onAddFilter(): void;
  onDeleteFilter(column: string): void;
}

export type Order = 'asc' | 'desc';
