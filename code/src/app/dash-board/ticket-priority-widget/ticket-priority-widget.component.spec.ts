import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPriorityWidgetComponent } from './ticket-priority-widget.component';

describe('TicketPriorityWidgetComponent', () => {
  let component: TicketPriorityWidgetComponent;
  let fixture: ComponentFixture<TicketPriorityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPriorityWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketPriorityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
