import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMusicComponent } from './table-music.component';

describe('TableMusicComponent', () => {
  let component: TableMusicComponent;
  let fixture: ComponentFixture<TableMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
