var now = new Date();
	   // Date 객체의 여러 속성을 사용하여 변수에 담습니다.

	   var nowYear = now.getFullYear();

// getMonth 는 0 부터 인덱스가 시작하기 때문에 + 1 을 해주어야 합니다.

var nowMonth = now.getMonth() + 1;
var nowDate = now.getDate();
var nowHour = now.getHours();
var nowMt = now.getMinutes();        
var nowSc = now.getSeconds();          
document.write(   nowYear +'년 ' + nowMonth + '월 ' + nowDate + '일 ' );
