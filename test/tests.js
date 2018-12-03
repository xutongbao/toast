var assert = chai.assert;
chai.should();

describe("Toast", function()
{
	it("should return a function with toast methods ", function()
    {
      var myToast = new Toast('hello world!');
      assert.equal(typeof myToast, 'object');
      assert.equal(typeof myToast.show, 'function');

      myToast.should.be.a('object');
      myToast.show.should.be.a('function');
      myToast.hide.should.be.a('function');
      myToast.destory.should.be.a('function');
      myToast.constructor.should.be.a('function');
      myToast.text.should.equal('hello world!');
    });
  it("toast content", function()
    {
      var myToast = new Toast('hello world!');
      myToast.text.should.equal('hello world!');
    });  
});