import { EDITOR_TYPES } from './editorTypes';
import { TextEditorComponent } from '../components/editors/text-editor/text-editor.component';

export const editorsDictionary = new Map<string, any>()
  .set(EDITOR_TYPES.INPUT, TextEditorComponent);
