import { Component, Input } from '@angular/core';

import { TABLE_CONFIG } from '../../configs/tableConfig';
import { Item, TableColumnConfig } from '../../types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: Item[] = [];
  @Input() loading: boolean = false;

  columns: TableColumnConfig[] = TABLE_CONFIG;

  get fieldsOfColumns(): string[] {
    return this.columns.map(({field}) => field);
  }
}
