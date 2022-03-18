import { EventEmitter } from '@angular/core';
import { EDITOR_TYPES } from './configs/editorTypes';

export interface TableColumnConfig {
  field: string
  header: string
  editType?: EDITOR_TYPES
  handler?: (data: any) => any
}

export interface ServerResponse<T> {
  success: boolean
  data: T
}

export interface EditorComponent {
  data: Item;
  fieldName: string;
  finally: EventEmitter<void>;
}

export interface Item extends Record<string, any> {}
