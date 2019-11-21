import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSecondComponent } from './message-second.component';

describe('MessageSecondComponent', () => {
  let component: MessageSecondComponent;
  let fixture: ComponentFixture<MessageSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
