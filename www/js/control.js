
        var socket1 = io.connect("http://192.168.3.100:8080");
        var socket2 = io.connect("http://192.168.3.101:8080");
        var socket3 = io.connect("http://192.168.3.102:8080");
        var status1 = false;
        var status2 = false;
        var status3 = false;
        

        socket1.on('connect', function(){
          console.log('Socket1 Connected');
          status1=true;
        });

        socket2.on('connect', function(){
          console.log('Socket2 Connected');
          status2=true;
        });

        socket3.on('connect', function(){
            console.log('Socket3 Connected');
            status3=true;
        });
        
        if(status1 && status2 && status3)
        {
            statusON();
        }
        else
        {
            statusOFF();
        }

        function getsocket(id){
          switch(id) {
            case 'drone1':
            case     'd1':
                return socket1;
                break;

            case 'drone2':
            case     'd2':
                return socket2;
                break;
                  
            case 'drone3':
            case     'd3':
                return socket3;
                break;
          };
        }

        function getStatus(id){
          switch (id) {
            case 'drone1':
              return 'd1';
              break;
                  
            case 'drone2':
              return 'd2';
              break;
                  
            case 'drone3':
              return 'd3';
              break;
          }
        }

        function climb(id){
          var target = document.getElementById(id);
          var status = document.getElementById(getStatus(id)).checked;
          console.log(id + ' ' + target.value);
          console.log(getsocket(id));
          if (status) {
            getsocket(id).emit('control',target.value);
          }

        }

        function control(id){
          var status = document.getElementById(id).checked;
          if (status)
          {
            console.log(id +' taking off.....');
            getsocket(id).emit('execute','t');
          }
          else
          {
            console.log(id +' landing.....');
            getsocket(id).emit('execute','l');
          }
        }

        function refresh(){
          location.reload();
        }

        function statusON(){
            var button = document.getElementById("connect-bar");
            button.style.backgroundColor = "#33cd5f";
            button.style.borderColor = "#28a54c";
        }

        function statusOFF(){
            var button = document.getElementById("connect-bar");
            button.style.backgroundColor = "#ef473a";
            button.style.borderColor = "#e42012";
        }
