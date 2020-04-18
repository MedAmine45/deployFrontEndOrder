import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberListComponent } from './prescriber-list.component';

describe('PrescriberListComponent', () => {
  let component: PrescriberListComponent;
  let fixture: ComponentFixture<PrescriberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
