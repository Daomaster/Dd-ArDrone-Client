        /*
        var socket1 = io.connect("http://192.168.3.109:8080");
        var socket2 = io.connect("http://192.168.3.108:8080");

        socket1.on('connect', function(){

        });
        
        socket2.on('connect', function(){

        });
        
        function getsocket(id){
        switch(id) {
          case 'drone 1'||'d1':
              return socket1;
              break;
          case 'drone 2'||'d2':
              return socket2;
              break;

        }
        */
        function climb(id){
          var target = document.getElementById(id);
          console.log(id + ' ' + target.value);
        }

        function control(id){
          var status = document.getElementById(id).checked;
          if (status) 
          {
            console.log(id +' taking off.....');
            status = 'off';
          }
          else
          {
            console.log(id +' landing.....');
            status = 'on';
          }
        }

        function refresh(){
          $('#connect-bar').toggleClass("red");  
          $('#connect-bar').hasClass("red") == true ? $('#connect-bar b').text("Disconnected") : $('#connect-bar b').text("Connected");
        }
