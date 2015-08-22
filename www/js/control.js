
        var socket1 = io.connect("http://localhost:8080");
        var socket2 = io.connect("http://localhost:8000");

        socket1.on('connect', function(){
          console.log('Socket1 Connected');
        });

        socket2.on('connect', function(){
          console.log('Socket2 Connected');
        });
        
        function getsocket(id){
          switch(id) {
            case "drone1":
            case      "d1":
                return socket1;
                break;
            
            case 'drone2':
            case      'd2':
                return socket2;
                break;
          };
        }

        function climb(id){
          var target = document.getElementById(id);
          console.log(id + ' ' + target.value);
          console.log(getsocket(id));
          getsocket(id).emit('control',target.value);
        }

        function control(id){
          var status = document.getElementById(id).checked;
          if (status)
          {
            console.log(id +' taking off.....');
            getsocket(id).emit('execute','t');
            status = 'off';
          }
          else
          {
            console.log(id +' landing.....');
            getsocket(id).emit('execute','l');
            status = 'on';
          }
        }

        function refresh(){
          $('#connect-bar').toggleClass("disconnect");
          $('#cnect-bar').hasClass("disconnect") == true ? $('#connect-bar b').text("Disconnected") : $('#connect-bar b').text("Connected");
        }
