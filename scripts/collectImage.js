import base64ImageToFile from "base64image-to-file";
import * as fs from "fs";

var eventDataBytes = process.argv[2];

function convertImageFromDataUrl(dataUrl) {
  base64ImageToFile(dataUrl, process.cwd() + "/build/", function (err) {
    if (err) {
      return console.error(err);
    }
  });
}

function xml2svg() {
  fs.readdir(process.cwd() + '/build/', (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
  
    files.forEach(file => {
      if (file.endsWith('.svg+xml')) {
        console.log(file);
        const oldPath = process.cwd() + '/build/' + file;
        const newPath = process.cwd() + '/build/' + file.replace('.svg+xml', '.svg');
    
        fs.rename(oldPath, newPath, err => {
          if (err) {
            console.error(`Failed to rename file ${file}:`, err);
          }
        });
      }
    });
  });
}

function hex2a(data) {
  var hex = data.toString(); //force conversion
  var str = "";
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

async function main() {
  const imageBytes = eventDataBytes.split("00bc614e");
  for(let i = 1; i < imageBytes.length - 1; i++){
    const dataString = hex2a(imageBytes[i]);
    convertImageFromDataUrl(dataString);
    console.log("image saved in build/");
  }

  setTimeout(xml2svg, 500);
}

main()
