import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  standalone: true,
  imports: [TextInputComponent, FormsModule],
  template: ' <app-text-input [(ngModel)]="text" (ngModelChange)="onChange($event)" [placeholder]="placeholder"></app-text-input> ',
})
class TestComponent {
  placeholder = 'test';
  text = 'test';

  onChange() {
    // do nothing
  }
}
