// Finding Largest Number 
var n1 = prompt("Write the first Number : ");
var n2 = prompt("Write the Second Number : ");
var n3 = prompt("Write the Third Number : ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1 >= n2 && n1 >= n3){
    document.write(n1 + " is the largest Number");
} else if (n2 >= n1 && n2 >= n3){
    document.write(n2 + " is the largest Number");
} else {
    document.write(n3 + " is the largest Number");
};