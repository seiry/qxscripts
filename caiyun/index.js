// $response, $notify(title, subtitle, message), console.log(message)
// $response.statusCode, $response.headers, $response.body

if ($response.statusCode != 200) {
    $done(Null)
}

const body = $response.body
console.log(JSON.stringify(body))
var bodyObj = JSON.parse(body)
const fakeExpire = 2646216768.302436
bodyObj.result.is_vip = true
body.result.is_xy_vip = true
bodyObj.result.svip_expired_at = fakeExpire
bodyObj.xy_vip_expire = fakeExpire
bodyObj.result.wt.vip.svip_expired_at = fakeExpire
console.log(bodyObj)


$done(JSON.stringify(bodyObj))
/*
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body https://raw.githubusercontent.com/seiry/qxscripts/main/caiyun/index.js

*/ 

// [
//     "body",
//     "parse",
//     "xy_vip_expire",
//     "result",
//     "is_vip",
//     "vip_expired_at",
//     "is_xy_vip",
//     "stringify"
// ]
