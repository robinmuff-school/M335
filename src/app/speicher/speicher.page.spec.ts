import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeicherPage } from './speicher.page';

describe('SpeicherPage', () => {
  let component: SpeicherPage;
  let fixture: ComponentFixture<SpeicherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeicherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeicherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
