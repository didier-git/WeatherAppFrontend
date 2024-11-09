import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('searchCity should return all cities when no match is found', () => {
    // Arrange
    const event = { target: { value: 'xyz' } }; // Simulate input event with non-matching city name
    const expectedCities = component.listaCopia; // Expected cities when no match is found
  
    // Act
    component.searchCity(event);
  
    // Assert
    expect(component.cities).toEqual(expectedCities);
  });
});
