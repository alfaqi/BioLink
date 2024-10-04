"use client";
var axios = require("axios");
const app_id = process.env.NEXT_PUBLIC_VOTTUN_APPLICATION_ID;
const api_key = process.env.NEXT_PUBLIC_VOTTUN_API_KEY;

export default function Connect() {
  const connect = () => {
    var config = {
      method: "get",
      url: "https://api.vottun.tech/core/v1/evm/info/chains",
      headers: {
        Authorization: `Bearer ${api_key}`,
        "x-application-vkn": app_id,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={() => connect()}>get Info</button>
    </div>
  );
}
