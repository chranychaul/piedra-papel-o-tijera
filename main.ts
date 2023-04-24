input.onGesture(Gesture.Shake, function () {
    radio.setGroup(9)
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showLeds(`
            . . # . .
            . . # # .
            . . . # .
            . # # # .
            . # . . .
            `)
    } else if (tool == 1) {
        basic.showLeds(`
            . # . # .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # #
            . # # . .
            . # . . .
            `)
    }
})
let tool = 0
if ((0 as any) == (1 as any)) {
	
}
