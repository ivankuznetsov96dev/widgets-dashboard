import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [MatButtonModule, MatTooltipModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have button name', () => {
    const buttonName = 'Submit';
    component.btnName = buttonName;
    fixture.detectChanges();

    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('.btn');
    expect(buttonElement.textContent).toContain(buttonName);
  });

  it('should have button type', () => {
    const buttonType = 'submit';
    component.type = buttonType;
    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('.btn');
    expect(buttonElement.type).toBe(buttonType);
  });

  it('should be disabled when isDisabled is true', () => {
    component.isDisabled = true;
    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('.btn');
    expect(buttonElement.disabled).toBeTrue();
  });

  it('should emit onClickEvent when clicked', () => {
    spyOn(component.onClickEvent, 'emit');
    const buttonElement = fixture.debugElement.query(By.css('.btn'));
    buttonElement.triggerEventHandler('click', null);

    expect(component.onClickEvent.emit).toHaveBeenCalledTimes(1);
  });
});
