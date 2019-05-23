describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([1,2,3,4])).toEqual([[1,2], [3,4]])
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
        expect(merge([1,5], [3,4])).toEqual([1,3,4,5])
        expect(merge([1,5, 6], [3,4])).toEqual([1,3,4,5, 6])
        expect(merge([1,7], [3,4, 6])).toEqual([1,3,4, 6, 7])
    });
  });

  describe('merge sort function', function() {
    it('returns a sorted array', function() {
        expect(mergeSort([10,5,15,25, -1])).toEqual([-1, 5, 10, 15, 25])
        expect(mergeSort([2,4,1,3])).toEqual([1,2,3,4])
    });
  });