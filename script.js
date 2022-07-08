// 1)The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//     title, which is a String representing the title of the movie
//     studio, which is a String representing the studio that made the movie
//     rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a.Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
    constructor(title,studio,rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
  }

  const mv = new movie("KGF","Vishal Film Factory","PG13");
  console.log(mv.title); 

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie {
    constructor(title = "KGF", Vishal Film Factory, PG = false) {
      this.title = title;
      this.Vishal Film Factory = Vishal Film Factory;
      this.PG = PG;
    }
  }

//d.Write a piece of code that creates an instance of the class Movie with the title 
//“Casino Royale”, the studio “Eon Productions”, and the rating “PG-13”.

 class movie {
	mv(title,studio,rating){
    	this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    constructor(title,studio,rating){
    	this.mv(title);
        this.mv(studio);
        this.mv(rating);
        console.log(this.title,this.studio,this.rating); 
    }
}

const Instance = new ('Casino Royale","Eon Productions","PG-13');

//2)Convert the UML diagram to Typescript class. - use number for double
//type colorData = "Red" | "Yellow" | "Blue" | "Green".

class Circle{
    radius = 1.0;
    color = "Red";

    constructor(radius:number, color:colorData){
        if(typeof(radius)!=="undefined") { this.radius = radius }
        if(typeof(color)!=="undefined") { this.color = color }
    }
    
    getRadius():number{
        return this.radius
    }

   
    setRadius(radius:number){
        this.radius = radius
    }

    
    getColor():colorData{
        return this.color
    }

    
    setColor(color:colorData){
        this.color = color
    }

    
    toString():String{
        return `Radius: ${this.radius} Color: ${this.color}`
    }

    
    getArea():number{
        return ((Math.PI)*this.radius*this.radius)
    }

    
    getCircumference():number{
        return (2*(Math.PI)*this.radius)
    }
}


let c1 = new Circle()
console.log("Constructor with no params: "+ c1.toString())


let c2 = new Circle(3.5)
console.log("Constructor with one param: "+ c2.toString())


let c3 = new Circle(2.2, 'Yellow')
console.log("getRadius: "+c3.getRadius())
c3.setRadius(3.3)
console.log("Radius value after setRadius: " +c3.getRadius())
console.log("getColor: "+c3.getColor())
c3.setColor("Blue")
console.log("Color Value after setColor: " + c3.getColor())
console.log(c3.toString())
console.log("Area: "+c3.getArea())
console.log("Circumference: "+c3.getCircumference())

//3)Write a “person” class to hold all the details.

person={

    Name:"Siva",
    Age:24,
    qualification:"MBA",
    Gender:"Male",
    Address:"15/22, pallipalayam,Erode",
    Employe_Id:2478

};