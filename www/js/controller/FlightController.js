app.controller('FlightController',function() {
		var socket = io.connect('http://chat.socket.io');
        socket.on('connect',function(){
        console.log('Connected'); 
        }
    }