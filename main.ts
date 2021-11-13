radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        senzoro()
    }
})
function senzorz () {
    // Upaljeno crveno svjetlo (STOP)
    semafor = 1
}
function senzoro () {
    // Upaljeno Zeleno svjetlo (GO)
    semafor = 0
}
let semafor = 0
// Uspostava komunikacijskog kanala
radio.setGroup(1)
// Upali zeleno svjetlo
senzoro()
basic.forever(function () {
    if (semafor == 1) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (semafor == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) <= 10) {
        senzorz()
    }
})
