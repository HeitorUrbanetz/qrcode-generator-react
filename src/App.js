import { QRCode, toDataURL } from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState('');
  const [QRcode, setQRcode] = useState('');

  const generateQRCode = () => {
      toDataURL(url, {
        width: 800,
        margin: 2
      }, (err, url) => {
          if (err) return console.log(err);
          setQRcode(url);
      })
  }

  return (
    <div className="App">
        <h1>QR Code Generator</h1>
        <input type="text" placeholder="https://google.com" value={url} onChange={e => setUrl(e.target.value)}/>
        <button onClick={generateQRCode}>Generate</button>

      {
        QRcode && <div>
          <img src={QRcode} alt=""/>
          <a href={QRcode} download="qrcode.png">Download</a>
          </div>
      }
        
    </div>
  );
}

export default App;
