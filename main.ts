let Número = 0
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(11000)
    Número = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(Número)
        basic.pause(200)
        Número += -1
    }
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    Número = 2
    for (let index = 0; index < 2; index++) {
        basic.showNumber(Número)
        basic.pause(200)
        Número += -1
    }
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(21000)
    Número = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(Número)
        basic.pause(200)
        Número += -1
    }
    basic.clearScreen()
})
basic.forever(function () {
    if (Número <= 5) {
        led.enable(true)
        basic.pause(100)
        led.enable(false)
        basic.pause(100)
    } else {
        led.enable(true)
    }
})
