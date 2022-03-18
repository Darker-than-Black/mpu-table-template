import { Component, OnInit, Input } from '@angular/core';

import { EditorComponent } from '../../../types';
import { EditorMixin } from '../../../mixins/EditorMixin';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent extends EditorMixin implements OnInit, EditorComponent {
  @Input() type: string = 'text';
}
