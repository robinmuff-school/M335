import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavigationdetailPage } from './navigationdetail.page';

describe('NavigationdetailPage', () => {
  let component: NavigationdetailPage;
  let fixture: ComponentFixture<NavigationdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
