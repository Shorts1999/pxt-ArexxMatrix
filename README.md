# pxt-rgb-matrix



## TODO

- [ ] Add a reference for your blocks here
- [ ] Add "icon.png" image (300x200) in the root folder
- [ ] Add "- beta" to the GitHub project description if you are still iterating it.
- [ ] Turn on your automated build on https://travis-ci.org
- [ ] Use "pxt bump" to create a tagged release on GitHub
- [ ] On GitHub, create a new file named LICENSE. Select the MIT License template.
- [ ] Get your package reviewed and approved https://makecode.microbit.org/extensions/approval

Read more at https://makecode.microbit.org/extensions


## Arexx RGB matrix Micro:Bit extension

this extension for BBC Micro:Bit makecode adds support for RGB WS2812b/Neopixel displays with a zigzag pattern lining. The top left pixel should be the first pixel in the strip.

To start using the extension put the block "maak matrix" in the startup command in the block editor. this initializes the display and sets up the NeoPixel object.

Now the "scroll text" block and the "show pixel at x/y" blocks can be used to display scrolling text in any color or turn on individual pixels on the display.

The color selection uses a RGB scale from 0-255 by default. But the preset color blocks from the AdaFruit NeoPixel library are also 100% compatible and can be clicked right into the color select space of the blocks. (any 24-bit number can be used, 8 bits for red, 8 bits for green and 8 bits for blue).

The "scroll Text" block is completely standalone and does not require a "show()" command. the setpixel requires a arexxMatrix.showMatrix() command ("Matrix wijzigingen weergeven" block)

The "Matrix legen"/"ArexxMatrix.clearMatrix()" command can be used to turn off all the pixels in the matrix display. (Does require a seperate Matrix.show() call to update display)

## License
The Arexx "ArexxMatrix" Micro:Bit extension is licensed under the MIT license. see file LICENSE for more information.


## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)
