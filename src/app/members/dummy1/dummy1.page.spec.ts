import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dummy1Page } from './dummy1.page';

describe('Dummy1Page', () => {
  let component: Dummy1Page;
  let fixture: ComponentFixture<Dummy1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dummy1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dummy1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
