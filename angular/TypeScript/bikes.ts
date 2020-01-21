class Bike
{
    price:number;
    max_speed:number;
    miles:number=0;

    constructor(price:number, max_speed:number)
    {
        this.price=price;
        this.max_speed=max_speed;
    }

    displayInfo():void
    {
        console.log(`Price: ${this.price}\nMax Speed: ${this.max_speed}\nMiles: ${this.miles}`)
    }

    ride():Bike
    {
        console.log(`Riding...`)
        this.miles+=10;
        return this;
    }

    reverse():Bike
    {
        console.log('Reversing...')
        if(this.miles-5 > 0)
        {
            this.miles-=5;
        }
        else
            this.miles=0;
        return this
    }
}
let bike1 = new Bike(200, 25)
let bike2 = new Bike(100, 50)
let bike3 = new Bike(400, 100)

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();
