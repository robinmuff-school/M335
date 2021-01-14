import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaschenrechnerPage } from './taschenrechner.page';

describe('TaschenrechnerPage', () => {
  let component: TaschenrechnerPage;
  let fixture: ComponentFixture<TaschenrechnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaschenrechnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaschenrechnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
