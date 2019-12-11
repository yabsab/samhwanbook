
var send_data = document.getElementById('bt_Title');

send_data.addEventListener('click', function()

{
        
     var input = document.getElementById("tx_Title").value;
      temp = input;
     

      searchISBN(temp)
     // alert(temp)

})   

 function searchISBN(isbn)
 {
 
    event.preventDefault();
    if(isbn !== undefined && isbn !== ""){
        $.ajax({
          url: "https://dapi.kakao.com/v3/search/book",
          headers: {'Authorization': 'KakaoAK '+ 'de5f68f03a88ec2c63c596fed1169a0c'},
          type : "get",
          data:{
              query: isbn,
             target:'title'
          },
          success : function(result){
              let data = result.documents[0];
              $("#title").val(data.title);
              $('#author').val(data.authors);
              $('#pub').val(data.publisher);
              $('#price').val(data.price);
              $('#info').val(data.contents+"...");
              let date = data.datetime.split('T')[0];
              $('#date').val(date);
              $('#translator').val(data.translators);
          }
      });
    }



    

 }

    
