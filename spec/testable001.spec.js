var testableCode = {
  items: [],
  push: function(item) {
    if (testableCode.items.length >= 10) {
      return testableCode.items;
    }
    testableCode.items.push(item);
    return testableCode.items;
  },
  pop: function() {
    if (testableCode.items.length === 0) {
      return testableCode.items;
    }
    return testableCode.items.pop();
  },
  clear: function() {
    testableCode.items = [];
    return testableCode.items;
  }
};

describe('Machining Better Tests', function() {

  beforeEach(function() {
    testableCode.items = [];
  });

  describe('Standard State Transitions', function() {
    it('expects "Empty to Full: using push 10 times (10 objects)"', function() {
      var push = 10;
      for (var i = 0, len = push; i < len; i++) {
        testableCode.push(i);
      }
      expect(testableCode.items.length).toEqual(10);
    });
  
    it('expects "Empty to Loaded: using push 4 times (4 objects)"', function() {
      var push = 4;
      for (var i = 0, len = push; i < len; i++) {
        testableCode.push(i);
      }
      expect(testableCode.items.length).toEqual(4);
    });
  
    it('expects "Full to Empty: using pop 10 times (0 objects)"', function() {
      testableCode.items = [1,2,3,4,5,6,7,8,9,10];
      var pop = 10;
      for (var i = 0, len = pop; i < len; i++) {
        testableCode.pop();
      }
      expect(testableCode.items.length).toEqual(0);
    });
  
    it('expects "Full to Empty: using clear 1 time (0 objects)"', function() {
      testableCode.items = [1,2,3,4,5,6,7,8,9,10];
      testableCode.clear();
      expect(testableCode.items.length).toEqual(0);
    });
  
    it('expects "Full to Loaded: using pop 6 times (4 objects)"', function() {
      testableCode.items = [1,2,3,4,5,6,7,8,9,10];
      var pop = 6;
      for (var i = 0, len = pop; i < len; i++) {
        testableCode.pop();
      }
      expect(testableCode.items.length).toEqual(4);
    });
  
    it('expects "Loaded to Empty: using pop 4 times (0 objects)"', function() {
      testableCode.items = [1,2,3,4];
      var pop = 4;
      for (var i = 0, len = pop; i < len; i++) {
        testableCode.pop();
      }
      expect(testableCode.items.length).toEqual(0);
    });
  
    it('expects "Loaded to Empty: using clear 1 time (0 objects)"', function() {
      testableCode.items = [1,2,3,4];
      testableCode.clear();
      expect(testableCode.items.length).toEqual(0);
    });
  
    it('expects "Loaded to Full: using push 6 times (10 objects)"', function() {
      testableCode.items = [1,2,3,4];
      var push = 6;
      for (var i = 0, len = push; i < len; i++) {
        testableCode.push(i);
      }
      expect(testableCode.items.length).toEqual(10);
    });  
  });

  describe('EXCEPTIONS ...', function() {
    it('expects "Empty to Full: using push 11 times [exception] (10 objects)"', function() {
      var push = 11;
      for (var i = 0, len = push; i < len; i++) {
        testableCode.push(i);
      }
      expect(testableCode.items.length).toEqual(10);  
    });

    it('expects "Full to Empty: using pop 11 times [exception] (0 objects)"', function() {
      testableCode.items = [1,2,3,4,5,6,7,8,9,10];
      var pop = 11;
      for (var i = 0, len = pop; i < len; i++) {
        testableCode.pop();
      }
      expect(testableCode.items.length).toEqual(0);
    });

    it('expects "Loaded to Empty: using pop 5 times [exception] (0 objects)"', function() {
      testableCode.items = [1,2,3,4];
      var pop = 5;
      for (var i = 0, len = pop; i < len; i++) {
        testableCode.pop();
      }
      expect(testableCode.items.length).toEqual(0);
    });

    it('expects "Loaded to Full: using push 7 times [exception] (10 objects)"', function() {
      testableCode.items = [1,2,3,4];
      var push = 7;
      for (var i = 0, len = push; i < len; i++) {
        testableCode.push(i);
      }
      expect(testableCode.items.length).toEqual(10);
    });  
  });
});
