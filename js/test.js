
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
                   
              var title = data.title
              var price = data.price
              var publisher = data.publisher

            selet_number(title, price, publisher)



          }
      });
    }

    function selet_number(title, price, publisher)
    {
        var s = document.getElementById('title_value')
        var qty = 1  

        switch(s.value)
        {
        case "num0" :     
          
        document.getElementById('title_select0').innerHTML = title 
        document.getElementById('book_publish0').innerHTML = publisher  
        document.getElementById('book_qty0').innerHTML = qty
        document.getElementById('book_price0').innerHTML = price
        
        var price_sales = parseInt(price)            
        document.getElementById('sale_book_price0').innerHTML = price_sales*0.85
        break;


        case "num1" :
        
        document.getElementById('title_select1').innerHTML = title 
        document.getElementById('book_publish1').innerHTML = publisher  
        document.getElementById('book_qty1').innerHTML = qty
        document.getElementById('book_price1').innerHTML = price
        
        var price_sales = parseInt(price)           
        document.getElementById('sale_book_price1').innerHTML = price_sales*0.85
        break;
          
        case "num2" :
                 
        document.getElementById('title_select2').innerHTML = title 
        document.getElementById('book_publish2').innerHTML = publisher  
        document.getElementById('book_qty2').innerHTML = qty
        document.getElementById('book_price2').innerHTML = price
            
        var price_sales = parseInt(price)           
        document.getElementById('sale_book_price2').innerHTML = price_sales*0.85
        break;

     

        case "num3" :
                 
                document.getElementById('title_select3').innerHTML = title 
                document.getElementById('book_publish3').innerHTML = publisher  
                document.getElementById('book_qty3').innerHTML = qty
                document.getElementById('book_price3').innerHTML = price
                    
                var price_sales = parseInt(price)           
                document.getElementById('sale_book_price3').innerHTML = price_sales*0.85
                break;


        case "num4" :
            
            document.getElementById('title_select4').innerHTML = title 
            document.getElementById('book_publish4').innerHTML = publisher  
            document.getElementById('book_qty4').innerHTML = qty
            document.getElementById('book_price4').innerHTML = price
                
            var price_sales = parseInt(price)           
            document.getElementById('sale_book_price4').innerHTML = price_sales*0.85
        break;
        
        case "num5" :
            
                document.getElementById('title_select5').innerHTML = title 
                document.getElementById('book_publish5').innerHTML = publisher  
                document.getElementById('book_qty5').innerHTML = qty
                document.getElementById('book_price5').innerHTML = price
                    
                var price_sales = parseInt(price)           
                document.getElementById('sale_book_price5').innerHTML = price_sales*0.85
            break;

            case "num6" :
            
                    document.getElementById('title_select6').innerHTML = title 
                    document.getElementById('book_publish6').innerHTML = publisher  
                    document.getElementById('book_qty6').innerHTML = qty
                    document.getElementById('book_price6').innerHTML = price
                        
                    var price_sales = parseInt(price)           
                    document.getElementById('sale_book_price6').innerHTML = price_sales*0.85
                break;

            case "num7" :
        
                    document.getElementById('title_select7').innerHTML = title 
                    document.getElementById('book_publish7').innerHTML = publisher  
                    document.getElementById('book_qty7').innerHTML = qty
                    document.getElementById('book_price7').innerHTML = price
                        
                    var price_sales = parseInt(price)           
                    document.getElementById('sale_book_price7').innerHTML = price_sales*0.85
                break;
            case "num8" :
    
                    document.getElementById('title_select8').innerHTML = title 
                    document.getElementById('book_publish8').innerHTML = publisher  
                    document.getElementById('book_qty8').innerHTML = qty
                    document.getElementById('book_price8').innerHTML = price
                        
                    var price_sales = parseInt(price)           
                    document.getElementById('sale_book_price8').innerHTML = price_sales*0.85
                break;
                case "num9" :
    
                        document.getElementById('title_select9').innerHTML = title 
                        document.getElementById('book_publish9').innerHTML = publisher  
                        document.getElementById('book_qty9').innerHTML = qty
                        document.getElementById('book_price9').innerHTML = price
                            
                        var price_sales = parseInt(price)           
                        document.getElementById('sale_book_price9').innerHTML = price_sales*0.85
                    break;

                case "num10" :
    
                        document.getElementById('title_select10').innerHTML = title 
                        document.getElementById('book_publish10').innerHTML = publisher  
                        document.getElementById('book_qty10').innerHTML = qty
                        document.getElementById('book_price10').innerHTML = price
                            
                        var price_sales = parseInt(price)           
                        document.getElementById('sale_book_price10').innerHTML = price_sales*0.85
                    break;

                case "num11" :

                        document.getElementById('title_select10').innerHTML = title 
                        document.getElementById('book_publish10').innerHTML = publisher  
                        document.getElementById('book_qty10').innerHTML = qty
                        document.getElementById('book_price10').innerHTML = price
                            
                        var price_sales = parseInt(price)           
                        document.getElementById('sale_book_price10').innerHTML = price_sales*0.85
                    break;

              
                
        }

    }

    

 }

    
