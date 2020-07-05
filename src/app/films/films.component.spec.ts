import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmsComponent } from './films.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).length > 0;
  });
});
