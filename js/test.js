
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
        sum_test()
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

    function sum_test()
		
{
           
    var book_value0 = document.getElementById("book_price0").innerHTML
    var book_value1 = document.getElementById("book_price1").innerHTML
    var book_value2 = document.getElementById("book_price2").innerHTML
    var book_value3 = document.getElementById("book_price3").innerHTML
    var book_value4 = document.getElementById("book_price4").innerHTML
    var book_value5 = document.getElementById("book_price5").innerHTML
    var book_value6 = document.getElementById("book_price6").innerHTML
    var book_value7 = document.getElementById("book_price7").innerHTML
    var book_value8 = document.getElementById("book_price8").innerHTML
    var book_value9 = document.getElementById("book_price9").innerHTML
    var book_value10 = document.getElementById("book_price10").innerHTML

    var sales_book_value0 = document.getElementById("sale_book_price0").innerHTML  
    var sales_book_value1 = document.getElementById("sale_book_price1").innerHTML    
    var sales_book_value2 = document.getElementById("sale_book_price2").innerHTML    
    var sales_book_value3 = document.getElementById("sale_book_price3").innerHTML    
    var sales_book_value4 = document.getElementById("sale_book_price4").innerHTML    
    var sales_book_value5 = document.getElementById("sale_book_price5").innerHTML   
    var sales_book_value6 = document.getElementById("sale_book_price6").innerHTML    
    var sales_book_value7 = document.getElementById("sale_book_price7").innerHTML   
    var sales_book_value8 = document.getElementById("sale_book_price8").innerHTML    
    var sales_book_value9 = document.getElementById("sale_book_price9").innerHTML    
    var sales_book_value10 = document.getElementById("sale_book_price10").innerHTML


    var book_count0 = document.getElementById("book_qty0").innerHTML 
    var book_count1 = document.getElementById("book_qty1").innerHTML
    var book_count2 = document.getElementById("book_qty2").innerHTML
    var book_count3 = document.getElementById("book_qty3").innerHTML
    var book_count4 = document.getElementById("book_qty4").innerHTML
    var book_count5 = document.getElementById("book_qty5").innerHTML
    var book_count6 = document.getElementById("book_qty6").innerHTML
    var book_count7 = document.getElementById("book_qty7").innerHTML
    var book_count8 = document.getElementById("book_qty8").innerHTML
    var book_count9 = document.getElementById("book_qty9").innerHTML
    var book_count10 = document.getElementById("book_qty10").innerHTML

  
    

    var count_book = parseInt(book_count0)+ parseInt(book_count1)+ parseInt(book_count2)+ parseInt(book_count3)+ parseInt(book_count4)+ parseInt(book_count5)
                    +parseInt(book_count6)+ parseInt(book_count7)+ parseInt(book_count8)+ parseInt(book_count9)+ parseInt(book_count10)

    var sum_book_value = parseInt(book_value0)+ parseInt(book_value1)+ parseInt(book_value2)+ parseInt(book_value3)+ parseInt(book_value4)+ parseInt(book_value5)
    +parseInt(book_value6)+ parseInt(book_value7)+ parseInt(book_value8)+ parseInt(book_value9)+ parseInt(book_value10)

    var sum_discount_value = parseInt(sales_book_value0)+ parseInt(sales_book_value1)+ parseInt(sales_book_value2)+ parseInt(sales_book_value3)+ parseInt(sales_book_value4)+ parseInt(sales_book_value5)
    +parseInt(sales_book_value6)+ parseInt(sales_book_value7)+ parseInt(sales_book_value8)+ parseInt(sales_book_value9)+ parseInt(sales_book_value10)


    document.getElementById("sum_book_count").innerHTML = count_book
    document.getElementById("sum_book_sales_value").innerHTML = sum_book_value
    document.getElementById("sum_book_discount_value").innerHTML = sum_discount_value
    
    console.log("_합_"+sum_discount_value)
    console.log("_값_1_"+sales_book_value0)
    console.log("_값_2_"+sales_book_value1)
    console.log("_값_3_"+sales_book_value2)
    console.log("_값_4_"+sales_book_value3)
    console.log("_값_5_"+sales_book_value4)
    console.log("_값_6_"+sales_book_value5)
    console.log("_값_7_"+sales_book_value6)
    console.log("_값_8_"+sales_book_value7)
    console.log("_값_9_"+sales_book_value8)
    console.log("_값_10_"+sales_book_value9)
    console.log("_값_11_"+sales_book_value10)


    // var book_value0 = document.getElementById("book_price0").innerHTML
    // var sales_book_value0 = document.getElementById("sale_book_price0").innerHTML
    // var book_value0 = document.getElementById("book_price0").innerHTML
    // var sales_book_value0 = document.getElementById("sale_book_price0").innerHTML


    

        // var sum = parseInt(book_value0)+parseInt(book_value1)+parseInt(book_value2)+parseInt(book_value4)+parseInt(book_value5)+parseInt(book_value6)+parseInt(book_value7)+parseInt(book_value8)
        // +parseInt(book_value9)
        
        // console.log("sum_"+sum)
        // var quantity = 1
        // document.getElementById('sum_value').value = sum 
          
}

  
        
    

 }

    
