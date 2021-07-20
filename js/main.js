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
 
 console.log(innerRect);
};

