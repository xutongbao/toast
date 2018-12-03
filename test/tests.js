var assert = chai.assert;

describe("Toast", function()
{
	it("should return a function with toast methods ", function()
    {
      var myToast = new Toast();
      console.log(typeof myToast)
      assert.equal(typeof myToast, 'object');
      assert.equal(typeof myToast.show, 'function');
      assert.equal(typeof myToast.show, 'function');
    });
});