// $response, $notify(title, subtitle, message), console.log(message)
// $response.statusCode, $response.headers, $response.body

if ($response.statusCode != 200) {
    $done(Null)
}

const body = $response.body
var bodyObj = JSON.parse(body)
const fakeExpire = 1646216768.302436
bodyObj.result.is_vip = true
bodyObj.result.svip_expired_at = fakeExpire
bodyObj.result.wt.vip.svip_expired_at = fakeExpire


$done(bodyObj)
