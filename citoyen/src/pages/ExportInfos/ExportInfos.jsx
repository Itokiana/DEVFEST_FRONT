import React from "react";
import QRCode from "qrcode.react";

const ExportInfos = () => {
  return (
    <QRCode 
    renderAs={"svg"}
    value={"{\"index\":2,\"timestamp\":\"2021-10-23T18:51:32.630+00:00\",\"transactions\":[\"{\\\"name\\\":\\\"Nandra\\\",\\\"age\\\":50}\"],\"transactions_count\":1,\"previous_hash\":\"afe2cec12899b0a0f67a9da4ca68032b49429d7008d84301b49e7f3594e1fd73\",\"hash\":\"eb6d9c7001d7e6701c43514442921141e558023a887b563bf3579f01349c0cad\"}"} />
  )
}

export default ExportInfos;