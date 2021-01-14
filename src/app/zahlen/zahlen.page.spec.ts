import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZahlenPage } from './zahlen.page';

describe('ZahlenPage', () => {
  let component: ZahlenPage;
  let fixture: ComponentFixture<ZahlenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZahlenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZahlenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
