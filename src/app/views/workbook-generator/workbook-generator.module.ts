import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WorkbookGeneratorRoutingModule } from './workbook-generator-routing.module';
import { WorkbookGeneratorComponent } from './workbook-generator.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AnswersRendererDirective } from './answers-renderer.directive';
import { QuestionRendererDirective } from './question-renderer.directive';

@NgModule({
  declarations: [
    WorkbookGeneratorComponent,
    AnswersRendererDirective,
    QuestionRendererDirective
  ],
  imports: [
    WorkbookGeneratorRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ]
})
export class WorkbookGeneratorModule { }
