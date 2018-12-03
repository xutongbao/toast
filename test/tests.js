var expect = chai.expect;

describe("Toast", function()
{
	it("should return a function with toast methods ", function()
    {
      var myToast = new Toast();
      expect(myToast).to.be.a('object');
      expect(myToast.show).to.be.a('function');
      expect(myToast.hide).to.be.a('function');
      expect(myToast.destory).to.be.a('function');
      expect(myToast.constructor).to.be.a('function');
    });
  it("toast content", function()
    {
      var myToast = new Toast('hello world!');
      expect(myToast.text).to.equal('hello world!');
    });  
});