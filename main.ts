controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of list) {
        value.setPosition(Math.randomRange(0, 170), Math.randomRange(0, 120))
    }
})
let list: Sprite[] = []
list = [sprites.create(img`
. . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
. . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
. . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
. . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
. . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
. . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
. . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
. . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
. . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
. . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
. . . . . . . . b d 5 5 5 5 5 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
. . . . . . . . b 5 5 5 5 5 5 5 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
. . . . . . . b d 5 5 5 5 5 5 5 5 5 5 5 5 4 e b b 4 4 4 4 4 e b 
. . . . . . . 4 3 5 5 5 5 5 5 5 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
. . . . . . b 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 4 e e b b b 4 b e 
. . . . . . b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 4 e b b b b e 
. . . . . b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d 4 b b b b e 
. . . . . b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d 4 e b e e 
. . . . b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 e e e 
. . . . 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d 4 d e e e 
. . . 6 7 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
. . . 4 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 4 4 d 4 e e e 
. . b 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 d 4 4 4 d d e e e . 
. . 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 4 4 d d d 4 e e e . . 
. b d 5 5 5 5 5 5 5 5 5 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
. b 5 5 5 5 5 5 5 5 5 5 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
b d 5 5 5 5 5 5 5 5 5 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
b 5 5 5 5 5 5 5 d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . 4 4 4 4 4 4 4 . . . . . . . 
. 4 4 4 4 4 4 4 4 4 4 . . . . . 
4 4 4 4 4 4 d d 4 4 4 . . . . . 
4 4 4 4 4 4 4 4 d 4 4 . . . . . 
4 4 4 4 4 b 4 4 4 d 4 4 . . . . 
4 4 4 4 4 4 b 4 4 4 4 4 . . . . 
4 b 4 4 4 4 b 4 4 4 4 e . . . . 
4 b b b 4 4 4 4 4 4 4 e . . . . 
. 4 4 b b 4 4 4 4 4 4 e . . . . 
. . e 4 b b b 4 4 4 e e . . . . 
. . . e e 4 4 4 4 e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 2 2 2 5 5 5 5 5 . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 2 2 5 5 e . . 
. . . . . 5 5 5 5 2 5 5 3 3 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 e . . 
. . . 5 5 5 5 5 2 5 5 3 5 5 5 5 3 3 3 3 3 5 5 5 5 5 5 5 5 e e . 
. . . 5 5 5 5 2 5 5 5 3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3 5 b e . 
. . 5 5 5 5 5 5 5 5 5 3 5 5 2 2 5 5 5 5 5 5 5 5 5 5 3 3 5 4 e . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 4 e e 
. 5 5 5 5 3 3 5 5 5 3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 e e 
. 5 5 5 5 5 3 3 3 5 3 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 5 b 4 e e 
. 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 2 2 5 5 5 5 5 5 5 4 b e e 
b 5 5 5 5 5 2 2 5 5 5 5 5 2 5 5 5 5 5 5 2 5 5 5 3 5 5 5 4 e b e 
b 5 5 3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3 5 5 4 b e b e 
a 5 5 3 5 5 5 5 5 5 5 5 5 2 5 3 3 5 5 5 5 5 5 5 5 5 5 4 b b b e 
a 5 5 3 3 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 4 4 b 4 e . 
a 5 5 5 5 3 5 2 5 2 5 3 5 2 2 5 5 5 5 5 5 5 5 5 5 5 4 b 4 4 e . 
a 5 5 5 5 5 5 2 5 5 3 3 5 5 5 2 5 2 5 5 5 5 5 5 5 4 4 b 4 e . . 
a 5 5 5 5 5 5 5 5 5 3 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 b 4 4 e . . 
a 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 b 4 4 e . . . 
. e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 b 4 4 e . . . . 
. e b 5 5 5 5 5 5 5 5 5 5 3 b a a 4 4 4 4 4 3 b 4 4 e . . . . . 
. . e b a 5 5 5 5 5 5 5 5 a a 4 4 4 4 4 3 3 b 4 4 e . . . . . . 
. . e e b b a a b 3 3 a 4 4 4 4 4 3 3 3 b 4 4 4 e . . . . . . . 
. . . e e e b b a a b 4 4 4 b 3 3 3 b 4 4 4 4 e . . . . . . . . 
. . . . e b e e e b b b b b b b b 4 4 4 4 e e . . . . . . . . . 
. . . . . e e b b b b 4 4 4 4 4 4 4 4 e e . . . . . . . . . . . 
. . . . . . . e e e b b b 4 4 4 e e e . . . . . . . . . . . . . 
. . . . . . . . . . e e e e e e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . . 
. . . . . . . . c c c f f f f f f f f f f 6 6 6 . . . . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f 6 6 . . . . . . 
. . . . f f f f f f f f f f f f f f f f f f f f f f f . . . . . 
. . . f f f f f f f f f f f f f f f f f f f f f f f f b . . . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f f 6 . . . 
. f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 . . 
. f f f f f f f f f f f f f f f f f f f f f f f f f f f f e . . 
. f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e . 
. f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e . 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b e 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f 
f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f 
. f b f f f f f f f f f f f f f f f f f f f f f f f f f f b f . 
. e f b f f f f f f f f f f f f f f f f f f f f f f f f b f e . 
. 8 6 f f f f f f f f f f f f f f f f f f f f f f f f c c 6 8 8 
8 7 7 2 e f f f f f f f f f f f f f f f f f f f c f c 2 2 7 7 8 
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8 
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f 
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f 
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f 
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f 
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e 
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e 
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e . 
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e . 
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . 
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . . 
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . . 
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . 
. . . . . . . . . . . . . . . . . . . . b b 3 3 3 b . . . . . . 
. . . . . . . . . . . . . . . . . b b b 3 3 3 d 3 3 b . . . . . 
. . . . . . . . . . . . . . . . b b 3 3 3 3 3 3 d 3 a . . . . . 
. . . . . . . . . . . . . . b b 3 3 3 3 9 9 9 9 9 d b a . . . . 
. . . . . . . . . . . . b b b 3 3 3 3 9 9 9 9 9 9 9 3 a . . . . 
. . . . . . . . . . b b d 3 3 3 3 3 3 9 9 9 9 9 9 9 d 3 a . . . 
. . . . . . . b b b 9 9 9 9 3 3 3 3 3 9 9 9 9 9 9 9 d d a . . . 
. . . . . . b b 3 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 9 9 3 d 3 a . . 
. . . b b b 9 9 9 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 9 3 3 d 3 a . . 
. . b 3 d d 9 9 9 9 9 9 9 9 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . . 
b b d d d 3 3 9 9 9 9 9 9 9 3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 a . 
b 3 3 d d d d 9 9 9 3 3 9 9 3 3 3 3 3 3 3 3 9 9 9 9 9 9 9 3 a . 
b b 3 3 3 3 3 3 3 d d d d d 3 3 3 3 3 3 3 3 9 9 9 9 9 9 9 d a . 
b b b b b b b 3 3 3 d d 3 3 d d d d d d d d 9 9 9 9 9 9 9 d b a 
b 3 3 3 3 3 b b b b b b 3 3 3 3 d d 3 3 3 3 9 9 9 9 9 9 9 d 3 a 
b 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b 3 3 3 3 9 9 9 d d 3 a 
b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d b a a a a a b 3 d 3 b a 
b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d d d d d d b b 3 3 b a 
b 3 b b 3 3 3 3 3 3 3 3 3 3 3 d 3 3 3 3 d 3 3 d d d d d b b b a 
b 3 3 3 3 3 b b b 3 3 3 d 3 3 3 3 3 3 d 3 3 3 3 d d d d d b b a 
b 3 3 3 3 d 3 3 3 3 3 3 b b b 3 3 d d d d d d 3 3 d d d d b b a 
b 3 d 3 3 3 d 3 3 3 3 3 3 3 3 b b b b b 3 d d d d d d d d b 3 a 
b 3 d 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 3 3 3 b b b b b b 3 d b 3 a 
b d 3 3 3 3 3 3 3 3 d 3 3 3 3 3 d d 3 3 3 d d b b b b b b b 3 a 
b b b 3 3 d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d d d d d b b 3 a 
. . . b b b b d d 3 3 3 d d d 3 3 3 3 d d d d d d d d d d b 3 a 
. . . . . . . b b b b 3 3 3 3 3 3 d 3 d d d 3 d d d d d d b 3 a 
. . . . . . . . . . . b b b b 3 3 3 3 3 3 3 3 3 3 3 d d 3 3 3 a 
. . . . . . . . . . . . . . . b b b b d d d 3 3 3 3 d 3 b 3 b a 
. . . . . . . . . . . . . . . . . . . b b b b d d d d b 3 b a . 
. . . . . . . . . . . . . . . . . . . . . . . b b b a a a a . . 
`, SpriteKind.Player)]
