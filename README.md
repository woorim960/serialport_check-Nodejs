# serialport_check-Nodejs
Node에서 시리얼 포트를 확인하는 법

## 메인 소스
```
// 시리얼 포트 모듈 포함
const SerialPort = require('serialport');

// 연결된 시리얼 포트 콘솔 출력
SerialPort.list().then(ports => {
  ports.forEach((port) => {
    console.log(port.comName);      // 연결되어 있는 포트 이름
    console.log(port.pnpId);        // Plug N Play 아이디 
    console.log(port.manufacturer); // 제조 업체
  });
});
```
SerialPort.list는 promise객체를 반환하기 때문에 .then으로 처리하여 값을 받아와야 합니다.



## 사용법

```
// 1. 레포지토리 클론
git clone https://github.com/woorim960/serialport_check-Nodejs.git

// 2. 생성된 폴더로 이동
cd serialport_check-Nodejs

// 3. 프로그램 실행에 필요한 모듈 설치
npm install

// 4. 메인 파일 실행
node serialport-check.js
```


Discription : 
