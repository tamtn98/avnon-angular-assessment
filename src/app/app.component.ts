import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, SharedModule],
  selector: 'avnon-angular-assessment-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AVNON Angular Assessment';
}
