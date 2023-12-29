import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchInputShowcaseComponent } from './search-input-showcase.component';

describe('SearchInputShowcaseComponent', () => {
  let component: SearchInputShowcaseComponent;
  let fixture: ComponentFixture<SearchInputShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInputShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
