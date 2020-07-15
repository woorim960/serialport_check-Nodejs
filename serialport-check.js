// 시리얼 포트 모듈 포함
const SerialPort = require('serialport');

// 연결된 시리얼 포트 콘솔 출력
SerialPort.list().then(ports => {
  ports.forEach((port) => {
    console.log(port.comName);
    console.log(port.pnpId);
    console.log(port.manufacturer);
  });
});