import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkbookGeneratorComponent } from './workbook-generator.component';

const routes: Routes = [
  { path: '', component: WorkbookGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkbookGeneratorRoutingModule { }
