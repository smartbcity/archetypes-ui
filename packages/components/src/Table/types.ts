export const IDataTableColumn = `interface IDataTableColumn<T = any> {
  id?: string | number;
  name: string | number | React.ReactNode;
  selector?: string | ((row: T, rowIndex: number) => React.ReactNode);
  sortable?: boolean;
  sortFunction?: (a: T, b: T) => number;
  format?: (row: T, rowIndex: number) => React.ReactNode;
  cell?: (row: T, rowIndex: number, column: IDataTableColumn, id: string | number) => React.ReactNode;
  grow?: number;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  right?: boolean;
  center?: boolean;
  compact?: boolean;
  ignoreRowClick?: boolean;
  button?: boolean;
  wrap?: boolean;
  allowOverflow?: boolean;
  hide?: number | 'sm' | 'md' | 'lg';
  omit?: boolean;
  style?: CSSProperties;
  conditionalCellStyles?: IDataTableConditionalCellStyles<T>[];
}`
