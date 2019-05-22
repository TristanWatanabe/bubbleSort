describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts an array in ascending order', function() {
        expect(bubbleSort([3,1,2])).toEqual([1,2,3]);
    });
    it('accepts an array of string values and sorts them', function() {
        expect(bubbleSort(["hello", "goodbye", "aloha"])).toEqual(["aloha", "goodbye", "hello"])
    })
    
  });

  