# About

This is just [material-ui table](https://mui.com/material-ui/react-table/#data-table) with some features of [material-ui datagrid](https://mui.com/x/react-data-grid/).

# Installation

```
npm i material-ui-datatable-api
```

## API

<DataTable/>

These component only accepts the following props:
| Name | Type | Description |
| ------------- |:-----------------:|:-------------|
| header | `Array<HeadCell>` | _required_. Header of the table. |
| rows | `any`[] | _required_. Its an array of object to displayed as rows in table |
| rowsPerPage | `number` | _required_. The limit of rows to be displayed in a page |
| page | `number` | _required_. Tells the table the current page(collection of rows per the specified limit) |
| rowsCount | `number` | _required_. The total number of rows of data without the page and limit |
| setPage | `function` | _required_. A function that gives the value of the next page when using pagination. |
| setRowsPerPage | `function` | _required_. A function that gives the value of the limit of rows when changing the limit |
| onRowEdit | `function` | _optional_. When used, it shows the edit button in each row. Also gives all data of the row |
| onRowDelete | `function` | _optional_. When used, it shows the delete button in each row. Also gives all the data of the row |
| onRowInfo | `function` | _optional_. When used, it shows the info button in each row. Also gives all the data of the row |
| onColumnSort | `function` | _optional_. Gives the column, and the order(ascending or descending) |
| searchString | `function` | _optional_. Gives the current value in the search input field |
| isDataLoading | `boolean` | _optional_. Shows a LoadingBar and text when waiting for the data to be loaded. |
| onFilter | `function` | _optional_. When used, it shows the filter button in the toolbar. Also gives the array of all added filters |
| onMultipleDelete| `function` | _optional_. When used, it enables checkbox selection. Also gives an array of id of selected rows |

## Interfaces

`HeadCell`

```javascript
{
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}
```

`FilterOperators`

```javascript
  | 'contains'
  | 'matches with'
  | 'starts with'
  | 'ends with'
  | 'is empty'
  | 'not empty';
```

`FilterType`

```javascript
{
  column: string;
  operator: FilterOperators;
  value: string;
}
```

`PopoverProps`

```javascript
{
  anchorEl: any;
  onClose(): void;
  id: string;
}
```

`ActiveColumns`

```javascript
{
  id: string;
  active: boolean;
  label: string;
}
```

`FilterFields`

```javascript
'column' | 'operator' | 'value';
```

`FilterProps`

```javascript
{
  anchorEl: any;
  onClose(): void;
  id: string;
  header: HeadCell[];
  filters: FilterType[];
  onFilterChange(value: string, field: FilterFields, column: string): void;
  onAddFilter(): void;
  onDeleteFilter(column: string): void;
}
```

`Order`

```javascript
'asc' | 'desc';
```

### Example Use

```javascript
const tableHeader = [
  {
    id: 'name', //must be the same to the column name in your table in database
    numeric: false,
    disablePadding: false,
    label: 'Full Name',
  },
  {
    id: 'age',
    numeric: true,
    disablePadding: false,
    label: 'Age',
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Address',
  },
];

const data = [ //from your query in your database
  {
    name: 'Juan de la Cruz',
    age: 12,
    address: 'Block 3, Lot 5, Barangay, City, Province, Country',
  },
  {
    name: 'Juan de la Cruz',
    age: 12,
    address: 'Block 3, Lot 5, Barangay, City, Province, Country',
  },
  {
    name: 'Juan de la Cruz',
    age: 12,
    address: 'Block 3, Lot 5, Barangay, City, Province, Country',
  },
];

const [page, setPage] = useState<number>(0);
const [limit, setLimit] = useState<number>(5);
const [searchString, setSearchString] = useState<string>("");
const [filters, setFilters] = useState<FilterType[]>();
const [orderSettings, setOrderSettings] = useState<OrderType>({
  order: "asc",
  column: "",
});
.
.
.
.

//
return (
  <DataTable
    header={tableHeader}
    rows={data}
    page={page}
    setPage={newPage => setPage(newPage)}
    rowsPerPage={limit}
    setRowsPerPage={newLimit => setLimit(newLimit)}
    rowsCount={rowsCount}
    onRowEdit={row => handleRowEdit(row)}
    onRowDelete={id => handleRowDelete(id)}
    onRowInfo={() => {}}
    onColumnSort={(order, column) => handleColumnSort(order, column)}
    // onMultipleDelete={(selected) => handleMultipleDelete(selected)}
    searchString={str => setSearchString(str)}
    isDataLoading={querydata.isLoading}
    onFilter={filters => {
      setFilters([...filters]);
    }}
  />
);
```
