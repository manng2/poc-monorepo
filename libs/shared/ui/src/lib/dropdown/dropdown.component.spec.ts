import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { DropdownComponent } from './dropdown.component';
import { OptionModel } from '@people/shared-models';

describe('DropdownComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show options when clicked', () => {
    const spyToggle = jest.spyOn(component.dropdown, 'toggle');
    const dropdown = fixture.nativeElement.querySelector('button');
    dropdown.click();
    fixture.detectChanges();
    expect(spyToggle).toHaveBeenCalled();
  });

  it('should hide options when select option', () => {
    const dropdown = fixture.nativeElement.querySelector(
      'button[id="menu-button"]'
    );
    dropdown.click();
    fixture.detectChanges();
    const option = fixture.nativeElement.querySelector('span[role="menuitem"');
    option.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div[role="menu"]')).toBe(null);
  });

  it('should hide options when click outside', () => {
    const dropdown = fixture.nativeElement.querySelector(
      'button[id="menu-button"]'
    );
    dropdown.click();
    fixture.detectChanges();
    const buttonOutside = fixture.nativeElement.querySelector(
      'button[id="test-button"]'
    );
    buttonOutside.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div[role="menu"]')).toBe(null);
  });

  it('should has label as empty string if cannot find option', () => {
    component.optionControl.setValue('option-4');
    fixture.detectChanges();

    expect(
      fixture.nativeElement
        .querySelector('button[id="menu-button"]')
        .textContent.trim()
    ).toBe('');
  });
});

@Component({
  template: `
    <app-dropdown
      [options]="options"
      [formControl]="optionControl"
    ></app-dropdown>
    <button id="test-button">Button for testing outside click</button>
  `,
  imports: [DropdownComponent, ReactiveFormsModule],
  standalone: true,
})
class TestComponent {
  options: OptionModel[] = [
    {
      label: 'Option 1',
      value: 'option-1',
    },
    {
      label: 'Option 2',
      value: 'option-2',
    },
    {
      label: 'Option 3',
      value: 'option-3',
    },
  ];
  optionControl = new FormControl('option-1');

  @ViewChild(DropdownComponent) dropdown!: DropdownComponent;
}
