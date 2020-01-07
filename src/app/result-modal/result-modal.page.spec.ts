import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultModalPage } from './result-modal.page';

describe('ResultModalPage', () => {
  let component: ResultModalPage;
  let fixture: ComponentFixture<ResultModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
