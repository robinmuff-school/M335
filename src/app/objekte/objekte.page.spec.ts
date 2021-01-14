import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjektePage } from './objekte.page';

describe('ObjektePage', () => {
  let component: ObjektePage;
  let fixture: ComponentFixture<ObjektePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjektePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjektePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
