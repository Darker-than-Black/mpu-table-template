import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
// import { DialogModule } from 'primeng/dialog';
// import { ButtonModule } from 'primeng/button';
// import { ListboxModule } from 'primeng/listbox';
// import { CalendarModule } from 'primeng/calendar';
// import { DropdownModule } from 'primeng/dropdown';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppComponent } from './app.component';
import { EditorTypeDirective } from './directives/editor-type.directive';
import { TableComponent } from './components/table/table.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { TextEditorComponent } from './components/editors/text-editor/text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorTypeDirective,
    TableComponent,
    TableDataComponent,
    TextEditorComponent
  ],
  imports: [
    TableModule,
    ToastModule,
    FormsModule,
    BrowserModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
