function Ninja(name)
{
    this.name=name;
    this.health=100;
    var speed=3;
    var strength=3;

    function getSpeed()
    {
        return speed;
    }
    function getStrength()
    {
        return strength;
    }
    function setSpeed(newSpeed)
    {
        speed=newSpeed;
    }
    function setStrength(newStrength)
    {
        strength=newStrength;
    }
    this.sayName= function()
    {
        console.log(this.name);
    }
    this.showStats= function() //This should show the Ninja's name, strength, speed, and health.
    {
        console.log(`Name: ${this.name}\nStrength: ${strength}\nSpeed: ${speed}\nHealth: ${this.health}`);
    }
    this.drinkSake= function() //This should add +10 Health to the Ninja
    {
        if(this.health <= 90)
        {
            this.health+=10;
            console.log(`${this.name} feels 10% better (oddly specific)`);
        }
        else
        {
            console.log(`${this.name} is a drunk`);
        }
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();