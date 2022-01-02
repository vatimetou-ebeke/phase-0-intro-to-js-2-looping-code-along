// Code your solutions in this file

let event= "wonderful gifts"
function writeCards( names ){

    let arr = [ ];
   

    for ( let i=0; i < names.length; i++ ) {
        const message = 'Thank you, '  +  names[ i ]+',' + ' for the wonderful surprise gift!' ;
        arr.push( message );

      }

      return arr;
    };

    

function countDown(n){
    let count =n;
    while(count>=0){
        console.log(count--);
        
        
    }
}

