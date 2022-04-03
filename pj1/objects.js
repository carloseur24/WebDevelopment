const fst_object = () => {
    var autos = {
        brand: "toyota",
        model: "corola",
        year: 2020,
        details: function(){
            console.log(`Auto ${this.model} ${this.year}`) //this do refer to 'autos' object.
        }
    };
    autos.details(); // Here it's need () to that call retun to details
};
var registrycars =  0;
var amountcars = 0;
var cars = [];

function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
};

var amountcars = prompt('input how many cars do you want: ');

while (amountcars > registrycars ){
    var brand = prompt('input your brand car' );
    var model = prompt('input you model car' );
    var year = prompt("input your year's car" );

    var constructor = new car(brand,model,year);
    
    cars.unshift(constructor);

    registrycars++;
};
for (var i = 0; i < cars.length; i++){
    for ( const [name, value] of Object.entries(cars[i])){
        console.log(`Your ${name} is ${value}`);
    };
    console.log(cars[i]);
}
//*dfgsdfsdfs*//
// dsdasdasdads
/*sdfsdfsdfsd*/
// fdgfdgdfg