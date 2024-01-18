(function chai(){     // named IIFE
    console.log("this is a IIFE function")   // IIFE function
})();

(function two(){
    console.log("this is a second IIFE function two envoke this it is required to use semicolon before above function");
})();

((name) =>{      // without named IIFE
    console.log(`"this is a third IIFE function two envoke this it is required to use semicolon before above function, ${ name}"`);
})('animesh')