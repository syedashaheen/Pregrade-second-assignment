

// Pyramid pattern using for loop in JS

var i,j,k;

for(i=1;i<=4;i++)
{
    for(k=1;k<=(4-i);k++)
    {
        document.write("&nbsp");
    }
    for(j=1;j<=i;j++)
    {
        document.write("*");
    }
    document.write("<br/>")
}

// Square pattern using for loop in JS


var n=6,r=4;

for (let row = 1; row <= r; row++)
{
    for (let coulmn = 1; coulmn <=n; coulmn++)
    {
        document.write("*");
    }
    document.write("<br/>");
}