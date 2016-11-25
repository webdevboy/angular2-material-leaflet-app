import { TestBed } from '@angular/core/testing';

import { LeafmapComponent } from './leafmap.component';

describe('LeafMap Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [LeafmapComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(LeafmapComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('LeafMap Works!');
  });

});
