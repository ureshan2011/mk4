expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");

const {Warrior, Armor,Weapon} = require('./game');




describe("Creating warrior in isolated environment", () => {
  var Scorpion;
  var spineArmor;
  var spineChain;
  beforeEach(function (){
    spineArmor = new Armor("Spine Armor", 6);
    spineChain = new Weapon("Spine Chain", 5);
    Scorpion = new Warrior("Scorpion", 7, 7, [spineArmor, spineChain]);
  });

  it("Warrior name should be Scorpian", () => {
    Scorpion.name.should.equal("Scorpion");
  });

  it("Warrior strength should be 7", () => {
    Scorpion.strength.should.equal(7);
  });

  it("Warrior skill should be 7", () => {
    Scorpion.skill.should.equal(7);
  });

  it("Warrior gear array should contain spineArmor and spineChain ", () => {
    Scorpion.gear[0].should.equal(spineArmor);
    Scorpion.gear[1].should.equal(spineChain);
  });

});
