let Número = 0
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(11000)
    Número = 9
    for (let index = 0; index < 4; index++) {
        basic.showNumber(Número)
        basic.pause(200)
        Número += -1
    }
    for (let index = 0; index < 5; index++) {
        basic.showNumber(Número)
        basic.pause(50)
        Número += -1
    }
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    Número = 2
    for (let index = 0; index < 2; index++) {
        basic.showNumber(Número)
        basic.pause(50)
        Número += -1
    }
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(21000)
    Número = 9
    for (let index = 0; index < 4; index++) {
        basic.showNumber(Número)
        basic.pause(200)
        Número += -1
    }
    for (let index = 0; index < 5; index++) {
        basic.showNumber(Número)
        basic.pause(50)
        Número += -1
    }
    basic.clearScreen()
})
basic.forever(function () {
    if (Número <= 5) {
        led.enable(true)
        basic.pause(500)
        led.enable(false)
        basic.pause(500)
    } else {
        led.enable(true)
    }
})
