import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestifyComponent } from './testify.component';

describe('TestifyComponent', () => {
  let component: TestifyComponent;
  let fixture: ComponentFixture<TestifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
