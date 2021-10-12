//callback es una funcion que llama a otra funcion, pero esto puede tambien ser llamado funtion de orden superior 
//Ejemplo 1 callback 
function sum (num1,num2)
{
    return num1+num2
}
function cal(num1,num2,callback)
{
    return callback(num1,num2)
}
console.log(cal(5,4,sum))
//Ejemplo 2 
function date(callback)
{
    console.log(new Date)
    setTimeout(function(){
        let dare = new Date
        callback(dare)
    },3000)
}
function printDate(date)
{
    console.log(date)
}
console.log(date(printDate))