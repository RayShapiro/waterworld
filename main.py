# left looking shark is False
my_flipped = False

tiles.set_tilemap(tilemap("""level"""))

# animate water
def on_update_interval():
    myTiles.tile1.flipX()
    myTiles.tile2.flipX()
game.on_update_interval(500, on_update_interval)

# load shark images to tile array
mytiles = [sprites.builtin.shark0, 
            sprites.builtin.shark1, 
            sprites.builtin.shark2,
            sprites.builtin.shark3]

# setup shark player
my_sprite = sprites.create(sprites.builtin.shark0, SpriteKind.player)
scene.camera_follow_sprite(my_sprite)

# set controller to only control up down, l/r buttons control left & right
controller.move_sprite(my_sprite,0)
my_sprite.set_velocity(-15, 0)

# animate
animation.run_image_animation(my_sprite, mytiles, 300, True)

# buttons, flip images and set velocity for direction
def on_button_r():
    global my_flipped

    if (my_flipped == True):
        return 
    else:
        my_flipped = True

    my_sprite.set_velocity(15, 0)
    for s in mytiles:
        s.flip_x()

controller.player1.on_button_event(ControllerButton.LEFT, ControllerButtonEvent.PRESSED, on_button_l)

def on_button_l():
    global my_flipped

    if (my_flipped == False):
        return
    else:
        my_flipped = False

    my_sprite.set_velocity(-15, 0)
    for s in mytiles:
        s.flip_x()

controller.player1.on_button_event(ControllerButton.RIGHT, ControllerButtonEvent.PRESSED, on_button_r)