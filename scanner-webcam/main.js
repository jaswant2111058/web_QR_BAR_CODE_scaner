

var Html5Qrcode = require("html5-qrcode")
// This method will trigger user permissions 
function access()

{
    Html5Qrcode.getCameras().then(cameras => {
      /**
        * devices would be an array of objects of type:
        * { id: "id", label: "label" }
       */
      
      
      if (devices && devices.length) {
        var cameraId = devices[0].id;
         // .. use this to start scanning.
     }
}).catch(err => {
     // handle err   
});

}

function start()
{

const html5QrCode = new Html5Qrcode("reader");
html5QrCode.start(
   cameraId, // retreived in the previous step.
   {
      fps: 10,    // sets the framerate to 10 frame per second 
      qrbox: 250  // sets only 250 X 250 region of viewfinder to
                  // scannable, rest shaded.
 },
 qrCodeMessage => {
     // do something when code is read. For example:
     console.log(`QR Code detected: ${qrCodeMessage}`);
 },
 errorMessage => {
     // parse error, ideally ignore it. For example:
     console.log(`QR Code no longer in front of camera.`);
 })
 .catch(err => {
     // Start failed, handle it. For example, 
     console.log(`Unable to start scanning, error: ${err}`);
 });

}


function stop()
{

 html5QrCode.stop().then(ignore => {
    // QR Code scanning is stopped. 
    console.log("QR Code scanning stopped.");
  }).catch(err => { 
    // Stop failed, handle it. 
    console.log("Unable to stop scanning.");
   });

}