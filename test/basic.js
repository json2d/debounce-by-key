const tap = require('tap')
const debounce = require('../lib/debounce-by-key')

tap.test("debounce-by-key: noargs", function (t) {
    t.plan(2)

    debounce() //defaults to 1 sec
    .then(()=>{t.pass("initial global debounce resolves")})

    t.rejects(debounce())
})


tap.test("debounce-by-key: key arg", function (t) {
    t.plan(4)

    debounce({key:'abc'})
    .then(()=>{t.pass("initial key A debounce resolves")})

    t.rejects(debounce({key:'abc'}))
    t.rejects(debounce({key:'abc'}))

    debounce({key:'not-abc'})
    .then(()=>{t.pass("initial key B debounce resolves")})
})

tap.test("debounce-by-key: duration arg", function (t) {
    t.plan(3)

    const d = () => debounce({key:'xyz',duration:1000})

    d().then(()=>{t.pass("initial timed debounce resolves")})

    setTimeout(()=>{
        t.rejects(d())
    },500)

    setTimeout(()=>{
        d().then(()=>{t.pass("second timed debounce resolves after duration of first elapsed")})
    },1500)

})
