expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
// Warrior = require("./game").Warrior;
// Armour = require("./game").Armor;
// Weapon = require("./game").Weapon;
const {
  Warrior,
  Weapon,
  Armor,
  rollDice
} = require("./game");


describe("Test for MK4", () => {
  it("Roll Dice Should not return 0", () => {
    var rollRiceValue =  Warrior.rollDice(1000,20);   
    console.log("RollDice value "+rollRiceValue)
    rollRiceValue.should.not.equal(0);
  });
});

