const epoch = () => new Date().getTime()

const KEY = ''
const TIME = 1000
const map = {}

const debounce = ({key=KEY,duration=TIME}={key:KEY,duration:TIME}) => {
    return new Promise((resolve,reject) => {
        if(!map[key] || epoch() > map[key]) {
          map[key] = epoch() + duration
          resolve();
        }else{
          reject(new Error(`debounce-by-key: '${key}' was debounced`))
        }
    })
}

module.exports = debounce
