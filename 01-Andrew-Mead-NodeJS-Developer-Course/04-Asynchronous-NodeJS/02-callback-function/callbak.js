setTimeout(() => {
    console.log('Two sconds are up')
}, 2000);

// ==============================================

const names = ['Orange', 'Cat', 'Appple', 'Dog']
const fn = names.filter(name => name.length >= 4)
console.log(fn)

// ==============================================

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0,
        }

        callback(data)
    }, 2000);
}

geocode('Auckland', (data) => {
    console.log(data)
})

// ==============================================

const add = (i1, i2, callback) => {
    setTimeout(() => {
        const sum = i1 + i2
        callback(sum)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum)
})