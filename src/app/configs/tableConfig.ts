import { TableColumnConfig } from '../types';
import { EDITOR_TYPES } from './editorTypes';

export const TABLE_CONFIG: TableColumnConfig[] = [
  {
    field: 'name',
    header: 'Name',
    editType: EDITOR_TYPES.INPUT,
  },
];
