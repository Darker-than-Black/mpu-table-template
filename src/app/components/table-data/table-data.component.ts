import { get } from 'lodash';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { editorsDictionary } from '../../configs/editorsDictionary';
import { EditorComponent, TableColumnConfig, Item } from '../../types';
import { EditorTypeDirective } from '../../directives/editor-type.directive';

const DEFAULT_HANDLER = (data: any) => data;

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {
  @Input() item!: Item;
  @Input() config!: TableColumnConfig;
  @Input() template?: TemplateRef<any>;
  @ViewChild(EditorTypeDirective, {static: true}) editorDirective!: EditorTypeDirective;

  showEditor: boolean = false;

  get fieldData(): string {
    return get(this.item, this.config.field, '');
  }

  get previewData(): string {
    const { handler = DEFAULT_HANDLER } = this.config;
    return this.fieldData ? handler(this.fieldData) : '–';
  }

  setEditorComponent(): void {
    const { editType = '' } = this.config;
    const component = editorsDictionary.get(editType);

    if (!component) {
      return;
    }

    this.editorDirective.viewContainerRef.clear();
    const componentRef = this.editorDirective.viewContainerRef.createComponent<EditorComponent>(component);
    this.showEditor = true;

    // set props
    componentRef.instance.data = this.item;
    componentRef.instance.fieldName = this.config.field;
    // auto close modal
    componentRef.instance.finally.subscribe(() => {
      this.showEditor = false;
      this.editorDirective.viewContainerRef.clear();
    });
  }
}
