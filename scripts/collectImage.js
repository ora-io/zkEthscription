import base64ImageToFile from "base64image-to-file";

var eventDataBytes =
  "00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000546646174613a696d6167652f7376672b786d6c3b6261736536342c50484e325a79423462577875637a30696148523063446f764c336433647935334d793576636d63764d6a41774d43397a646d636949485a6c636e4e7062323439496a45754d694967614756705a326830505349784d6a41774969423361575230614430694d5449774d434967646d6c6c64324a76654430694d434177494445794d4441674d5449774d43492b5047526c5a6e4d2b50477870626d5668636b6479595752705a57353049476c6b50534a6e636d466b4d53496765444539496a416c496942354d5430694d43556949486779505349784d44416c496942354d6a30694d435569506a787a644739774947396d5a6e4e6c644430694d43556949484e306557786c50534a7a644739774c574e76624739794f6e4a6e596967794e5455734d6a55314c4441704f334e30623341746233426859326c3065546f7849694176506a787a644739774947396d5a6e4e6c644430694d5441774a5349676333523562475539496e4e30623341745932397362334936636d64694b4445354e6977784f4441734d6a4d334b54747a644739774c57397759574e7064486b364d5349674c7a34384c327870626d5668636b6479595752705a573530506a78736157356c59584a48636d466b61575675644342705a4430695a334a685a43496765444539496a416c496942354d5430694d43556949486779505349784d44416c496942354d6a30694d435569506a787a644739774947396d5a6e4e6c644430694d43556949484e306557786c50534a7a644739774c574e76624739794f6e4a6e596967794e5455734d6a55314c4441704f334e30623341746233426859326c3065546f7849694176506a787a644739774947396d5a6e4e6c644430694d5441774a5349676333523562475539496e4e30623341745932397362334936636d64694b4449784d6977784f4449734d6a41354b54747a644739774c57397759574e7064486b364d5349674c7a34384c327870626d5668636b6479595752705a573530506a77765a47566d637a3438636d566a6443423361575230614430694d5441774a534967614756705a326830505349784d44416c4969426d6157787350534a31636d776f493264795957517049694176506a786a61584a6a6247556759336739496a67334a53496759336b39496a6b774a534967636a30694f54556c4969426d6157787350534a31636d776f49326479595751784b534967633352796232746c50534a696247466a61794967633352796232746c4c5864705a48526f505349794969382b50484a6c59335167654430694e6a416949486b39496a597749694279654430694d54556949484a35505349784e53496764326c6b64476739496a6b324a534967614756705a326830505349344f53556949475a7062477739496e4a6e596967784d544d734d5449314c4451794b534967633352796232746c50534a696247466a61794967633352796232746c4c5864705a48526f5053497949694176506a78305a58683049475a7062477739496e4a6e596967324e7977784d7a41734d6a45314b534967654430694d5445334d434967655430694d5445334d4349675a6d39756443317a6158706c505349794d44416c496942305a5868304c57467559326876636a30695a57356b4969426d623235304c575a6862576c736554306961475673646d563061574e684947356c645755734947686c62485a6c64476c6a5953776759584a705957777349484e686269317a5a584a705a69492b52564e4a5543307a4946646c62474e7662575567554539425543416a4d5467334d5451384c33526c6548512b5043397a646d632b0000000000000000000000000000000000000000000000000000";

function convertImageFromDataUrl(dataUrl) {
  base64ImageToFile(dataUrl, process.cwd() + "/build/", function (err) {
    if (err) {
      return console.error(err);
    }
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
  const dataString = hex2a(eventDataBytes.substring(128));
  convertImageFromDataUrl(dataString);
  console.log("image saved in build/");
}

main()
