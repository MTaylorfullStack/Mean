
/*
Flood Fill 
Most graphical “paint” applications, have a ‘paint can fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent . Given canvas2D of [[3,2,3,4,3], 
[2,3,3,4,0] , [7,3, 3 ,5,3] , [6,5,3,4,1] , [1,2,3,3,3] ] 
*/
function floodFill(canvas2D,startXY,newColor)
{
    //startXY[0]
    var color = canvas2D[startXY[0]][startXY[1]];   //getting the current color of the current position
    canvas2D[startXY[0]][startXY[1]]=newColor;      //changing current location to new color
    
    //Assigning names to make code more readable
    var width=canvas2D[0].length;
    var height=canvas2D.length;

    var rightPosition=[startXY[0],startXY[1]+1];
    var leftPosition=[startXY[0],startXY[1]-1];
    var upPosition=[startXY[0]-1,startXY[1]];
    var downPosition=[startXY[0]+1,startXY[1]];
    
    if(rightPosition[1]<= width-1)
    {
        if(color == canvas2D[startXY[0]][startXY[1]+1])//making sure we dont go beyond the width
        {
            floodFill(canvas2D,rightPosition,newColor)
        }
    }
    if (leftPosition[1]>=0)//if the cell to the left has the same color
    {
        if(color == canvas2D[startXY[0]][startXY[1]-1])  //making sure we dont go below 0
        {
            floodFill(canvas2D,leftPosition,newColor)
        }
    }
    if(upPosition[0]>=0) //if the cell above has the same color
    {
        if(color == canvas2D[startXY[0]-1][startXY[1]])
        {
            floodFill(canvas2D,upPosition,newColor)
        }
    }
    if(downPosition[0]<=height-1)//if the cell below has the same color
    {
        if(color == canvas2D[startXY[0]+1][startXY[1]])
        {
            floodFill(canvas2D,downPosition,newColor)
        }
    }
    return canvas2D;    
}
canvas2D =
[
    [3,2,3,4,3] , 
    [2,3,3,4,0] , 
    [7,3,3,5,3] , 
    [6,5,3,4,1] , 
    [1,2,3,3,3] 
] 
var startXY=[2,2]
console.log(canvas2D);
floodFill(canvas2D, startXY, 1)
console.log(canvas2D);