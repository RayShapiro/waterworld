//  left looking shark is False
let my_flipped = false
tiles.setTilemap(tilemap`level`)
//  animate water
game.onUpdateInterval(500, function on_update_interval() {
    myTiles.tile1.flipX()
    myTiles.tile2.flipX()
})
//  load shark images to tile array
let mytiles = [sprites.builtin.shark0, sprites.builtin.shark1, sprites.builtin.shark2, sprites.builtin.shark3]
//  setup shark player
let my_sprite = sprites.create(sprites.builtin.shark0, SpriteKind.Player)
scene.cameraFollowSprite(my_sprite)
//  set controller to only control up down, l/r buttons control left & right
controller.moveSprite(my_sprite, 0)
my_sprite.setVelocity(-15, 0)
//  animate
animation.runImageAnimation(my_sprite, mytiles, 300, true)
//  buttons, flip images and set velocity for direction
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function on_button_l() {
    
    if (my_flipped == false) {
        return
    } else {
        my_flipped = false
    }
    
    my_sprite.setVelocity(-15, 0)
    for (let s of mytiles) {
        s.flipX()
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function on_button_r() {
    
    if (my_flipped == true) {
        return
    } else {
        my_flipped = true
    }
    
    my_sprite.setVelocity(15, 0)
    for (let s of mytiles) {
        s.flipX()
    }
})
