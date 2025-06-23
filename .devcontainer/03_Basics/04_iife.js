//Imediately Invoked Function
(function chai(){
    //named iife
    console.log('DB connected');
})();

// We are using to avoid global scope pollution , we use iife.

((name)=> {
    //un-named iffe
    console.log(`DB connected ${name}`);
    
}) ('Debu');// ';' is necessary to end the code.