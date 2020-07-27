import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dummy2Page } from './dummy2.page';

describe('Dummy2Page', () => {
  let component: Dummy2Page;
  let fixture: ComponentFixture<Dummy2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dummy2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dummy2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
