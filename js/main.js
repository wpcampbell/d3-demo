/*Stylesheet by Will P. Campbell,2021*/

//execute script when window is loaded
window.onload = function(){

    var w = 900, h = 500;

    var container = d3.select("body") //get the <body> element from the DOM
     //Example 1.1 line 3...container block
        .append("svg") //put a new svg in the body
     //ex 1.3
        .attr("width", w) //assign the width
        .attr("height", h) //assign the height
        .attr("class", "container") //always assign a class (as the block name) for styling and future selection
    //ex 1.4
    .style("background-color", "rgba(0,0,0,0.2)") //svg background color---only put a semicolon at the end of the block!
        //.attr("width", 800) //rectangle width (DONT DO THIS WHEN ADDING AN ADDITONAL BLOCK) 
        //.attr("height", 400) //rectangle height(DONT DO THIS WHEN ADDING AN ADDITONAL BLOCK)

// <rect> is now the operand of the container block

 //innerRect block
 var innerRect = container.append("rect") //put a new rect in the svg
    .datum(400)// a single value is a datum
    .attr("width", function(d){ //rectangle width
        return d * 2; //400 * 2 = 800
    }) 
    .attr("height", function(d){ //rectangle height
        return d; //400
    })

    //ex 1.7
    //.attr("width", 800) //rectangle width
    //.attr("height", 400) //rectangle height
// Note: make sure to use ""s around "width" and "height"...

//ex 1.9
    .attr("class", "innerRect") //class name
    .attr("x", 50) //position from left on the x (horizontal) axis
    .attr("y", 50) //position from top on the y (vertical) axis
    .style("fill", "#FFFFFF"); //fill color
 
//ex 2.3 creating a data array
//var dataArray = [10, 20, 30, 40, 50];

// var circles = container.selectAll(".circles") //but wait--there are no circles yet!
//         .data(dataArray) //here we feed in an array
//         .enter() //one of the great mysteries of the universe
//         //ex 2.5 adding circles to match the data
//         .append("circle") //add a circle for each datum
//         .attr("class", "circles") //apply a class name to all circles
//         //ex 2.6  using the joined data
//         .attr("r", function(d, i){ //circle radius
//             console.log("d:", d, "i:", i); //let's take a look at d and i
//             return d;
//         })
//         .attr("cx", function(d, i){ //x coordinate
//             return 70 + (i * 180);
//         })
//         .attr("cy", function(d){ //y coordinate
//             return 450 - (d * 5);
//         });


//ex 2.7 city populations data array
var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];

//Example 3.1: x coordinate linear scale
var x = d3.scaleLinear()  //create the scale
        .range([90, 810]) //output min and max
        .domain([0, 3]); //input min and max

var minPop = d3.min(cityPop, function(d){
            return d.population;
        });
    
//find the maximum value of the array
var maxPop = d3.max(cityPop, function(d){
    return d.population;
});

 //color scale generator 
 var color = d3.scaleLinear()
 .range([
     "#FDBE85",
     "#D94701"
 ])
 .domain([
     minPop, 
     maxPop
 ]);

//scale for circles center y coordinate
var y = d3.scaleLinear()
    .range([440, 95])
    .domain([
    minPop,
     maxPop
]);



//ex 2.8 using the cityPop array to create circles
var circles = container.selectAll(".circles") //create an empty selection
        .data(cityPop) //here we feed in an array
        .enter() //one of the great mysteries of the universe
        .append("circle") //inspect the HTML--holy crap, there's some circles there
        .attr("class", "circles")
        .attr("id", function(d){
            return d.city;
        })
        .attr("r", function(d){
            //calculate the radius based on population value as circle area
            var area = d.population * 0.01;
            return Math.sqrt(area/Math.PI);
        })
        .attr("cx", function(d, i){
            //use the scale generator with the index to place each circle horizontally
            return x(i);
        })
       .attr("cy", function(d){
            return y(d.population);
        });

 console.log(innerRect);
};

