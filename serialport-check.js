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