input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
let step = 5
basic.forever(function () {
    basic.showNumber(step)
})
