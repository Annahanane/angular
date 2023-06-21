import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComposantComponent } from './new-composant.component';

describe('NewComposantComponent', () => {
  let component: NewComposantComponent;
  let fixture: ComponentFixture<NewComposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewComposantComponent]
    });
    fixture = TestBed.createComponent(NewComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
