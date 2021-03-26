/**Make this work:
1. duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

2. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
What will be returned by each of these?
3. console.log("hello" || "world")

4. console.log("foo" && "bar")

5. Write an immediately invoked function expression (IIFE)

**/

/**
 * 1. duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
 */
function duplicate(src) {
 return [...src , ...src]; returns // [1,2,3,4,5,1,2,3,4,5] spread operator used
}
duplicate([1,2,3,4,5]);

/**
 * 2. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, 
 * "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
 */

for ( var i = 1; i <= 100; i++ ){
  if (  i % 3 === 0 ){
    console.log( "Fizz" );
  }else if ( i % 5 === 0 ) {
    console.log("Buzz");
  }else if ( (i % 3 === 0) && (i % 5 === 0) ) {
    console.log("FizzBuzz" );
  }
}


/**
 * 3. console.log("hello" || "world")
 * */
console.log("hello" || "world") // Output is "hello"

/**
 * 4. console.log("foo" && "bar")
 * */
console.log("foo" && "bar") // Output is "bar"


/**
 * 5. Write an immediately invoked function expression (IIFE)
 */
(function (a){
     console.log(a);  // will execute this function immediately and will print 'INSIGHT GLOBAL' as we passed as parameter.
})('INSIGHT GLOBAL');


