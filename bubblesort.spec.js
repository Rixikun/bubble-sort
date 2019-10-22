describe("Bubble Sort", function() {
  // beforeEach(() => {
  //   inputArr = [2, 7, 5, 3, 1];
  // });
  const inputArr = [2, 7, 5, 3, 1];
  // const inputArr = [7, 2, 5];

  // beforeAll(function() {
  //   spyOn(window, "helpCount").and.callThrough();
  // });
  // it("calls helpCount 8 times", function() {
  //   window.bubbleSort(inputArr);
  //   // window.helpCount();
  //   expect(window.helpCount.calls.count()).toEqual(10);
  // });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sorts correctly", function() {
    expect(bubbleSort(inputArr)).toEqual([1, 2, 3, 5, 7]);
  });
});
