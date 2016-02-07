'use strict'

describe('Plane', function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });
  it('can land at a airport', function(){
    expect(plane.land).not.toBenUndefined()
  });
});
