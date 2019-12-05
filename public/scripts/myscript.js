$(document).ready(
    function(){
        $('#student').keyup(
            function(){
               let pattern=$('#student').val();
               $.get("http://localhost:4040/student/all/"+pattern,function(data){
                   let code="";
                   for(let i in data){
                       code+="<tr>";
                       code+="<td>"+data[i].name+"</td>";
                       code+="<td>"+data[i].address+"</td>";
                       code+="<td>"+data[i].city+"</td>";
                       code+="<td>"+data[i].email+"</td>";
                       code+="<td>"+data[i].mobile+"</td>";
                       code+="<td>"+data[i].qualification+"</td>";
                       code+="</tr>";
                     }

                     $('#tdata').html(code);
               })
            }
        );
    }
)