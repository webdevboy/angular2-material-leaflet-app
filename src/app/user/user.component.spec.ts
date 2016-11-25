import { TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('User Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [UserComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(UserComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('User List!');
  });

});
