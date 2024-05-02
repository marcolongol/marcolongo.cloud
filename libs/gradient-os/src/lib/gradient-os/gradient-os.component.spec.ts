import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradientOsComponent } from './gradient-os.component';

describe('GradientOsComponent', () => {
  let component: GradientOsComponent;
  let fixture: ComponentFixture<GradientOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientOsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GradientOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
