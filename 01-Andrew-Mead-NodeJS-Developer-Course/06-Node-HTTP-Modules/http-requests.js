const http = require('http')
const https = require('https')


const ws_token = ''
const mb_token = ''


const ws_url = 'http://api.weatherstack.com/current?access_key=' + ws_token + '&query=-36.867,174.767&limit=1'
const mb_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Auckland.json?access_token=' + mb_token + '&limit=1'


const http_requst = http.request(ws_url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

https_request.on('error', (error) => {
    console.log('An error', error)
})

http_requst.end()


const https_request = https.request(mb_url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

https_request.on('error', (error) => {
    console.log(error)
})

https_request.end()