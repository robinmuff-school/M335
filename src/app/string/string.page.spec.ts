import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StringPage } from './string.page';

describe('StringPage', () => {
  let component: StringPage;
  let fixture: ComponentFixture<StringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
