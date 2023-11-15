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
      imports: [MatButtonModule, MatTooltipModule, ButtonComponent],
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

  it('should have button input prop', () => {
    expect(component.type).toBe('button');
    expect(component.isDisabled).toBe(false);
    const buttonName = 'Submit';
    const type = 'submit';
    const isDisabled = true;
    component.btnName = buttonName;
    component.isDisabled = isDisabled;
    component.type = type;
    fixture.detectChanges();

    expect(component.btnName).toBe(buttonName);
    expect(component.type).toBe(type);
    expect(component.isDisabled).toBe(isDisabled);
  });

  it('should emit onClickEvent when clicked', () => {
    spyOn(component.onClickEvent, 'emit');
    const buttonElement = fixture.debugElement.query(By.css('.btn'));
    buttonElement.triggerEventHandler('click', null);

    expect(component.onClickEvent.emit).toHaveBeenCalledTimes(1);
  });
});
