export const stateResult = {
  titles: ["EthScription:"],
  stateResultFunc: (payloadString) => {
    

    hex2a = (data) => {
      var hex = data.toString(); //force conversion
      var str = "";
      for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      return str;
    }

    let imageBytes = payloadString.split("00bc614e");
    let resultData = [];
    for (let i = 1; i < imageBytes.length - 1; i++) {
      resultData.push(hex2a(imageBytes[i]));
    }

    return [resultData];
  },
};
