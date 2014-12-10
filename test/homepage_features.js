// var chai = require('chai');
// var expect = chai.expect;

describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('hello world', function(){
    casper.then(function(){
      expect("body").to.have.text(/Hello world/);
    });
  });

  it('asks for a name', function(){
    casper.then(function(){
      expect("form").to.have.text(/Please enter your name:/);
    });
  });

  it('will show a name once entered', function() {
    casper.then(function() {
      this.fill("form[action='/']", { name: 'Ed' }, true);
      this.click("input[value='Say hi']", function() {
        expect("body").to.have.text(/Hello Ed/);
      });
    });
  });

});
