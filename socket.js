let app=require('express')();
let http=require('http').Server(app);
let io=require('socket.io')(http);

var port=2525;

http.listen(port, function(){
   console.log('Conectando en http://localhost:' + port); 
});


