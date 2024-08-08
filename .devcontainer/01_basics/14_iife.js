//****IIFE */
//It is the function that excecuted immediatly after they define.
//It is used to prevent from polluting the global scope.




(function chai(){
    console.log('DB CONNECTED');
})();




((name) =>{
    console.log('DB CONNECTED TWO ${name}');
})('hitesh')

