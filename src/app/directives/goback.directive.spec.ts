import { GobackDirective } from './goback.directive';


describe('GobackDirective', () => {
  it('should create an instance', () => {
    let location = jasmine.createSpyObj("Location", ["back"]);
    const directive = new GobackDirective(location);
    expect(directive).toBeDefined();
  });
});
