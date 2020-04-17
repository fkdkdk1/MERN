
function getData() {
    var tableData;
    // https://domin.com에 HTTP GET 요청을 날려 1번 products를 요청함() -> 서버에서 받아온 데이터는 response에 저장
	$.get('https://domain.com/products/1', function(response) {     
		tableData = response;
	});
	return tableData;
}

console.log(getData()); // undefined

// 위 코드의 결과는 undefined
// $.get()으로 데이터 요청을하고 받아올 때 까지 기다려주지 않고 다음 코드인 return tableData를 실행


console.log('Hello');
setTimeout(function() {
	console.log('Bye');
}, 3000);
console.log('Hello Again');

// 위의 결과는 Hello , HelloAgain , 3초있다가 'Bye'
// setTimeout() 역시 비동기 방식으로 실행되기 때문에 3초를 기다렸다가 다음 코드를 수행하는 것이 아니라
// 일단 setTimeout()을 실행하고 나서 바로 다음 코드인 console.log('Hello Again'); 으로 넘어감


// 콜백함수로 비동기 처리 방식의 문제점 해결하기

function getData(callbackFunc) {
	$.get('https://domain.com/products/1', function(response) {
		callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
	});
}

getData(function(tableData) {
	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});


// Promise 란?
// Promise는 주솔 서버에서 받아온 데이터르르 화면에 표시할때 사용


function getData(callback) {
    // new Promise() 추가 -> 대기상태 ( Pending )
    return new Promise(function(resolve, reject) {          
      $.get('url 주소/products/1', function(response) {
        // 데이터를 받으면 resolve() 호출
        resolve(response);          // 이행 상태 ( Fulfilled )
        reject(new Error("Request is failed")); // 실패 ( Rejected )
      });
    });
  }
  
  // getData()의 실행이 끝나면 호출되는 then()
  getData().then(function(tableData) {
    // resolve()의 결과 값이 여기로 전달됨
    console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
  });

  // 만약 실패할 시 실패처리 값을 catch()로 받을 수 있음  
    getData().then().catch(function(err){
        console.log(err)
    });
