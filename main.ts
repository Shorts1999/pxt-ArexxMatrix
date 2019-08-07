let matrix = neopixel.create(DigitalPin.P0, 256, NeoPixelMode.RGB)
//% color=#AA00AA weight=50 icon="f2a1" block="Arexx Matrix"
//% groups=['LED matrix']
namespace ArexxMatrix {
    enum Directions {
        //%block="links"
        links = 0,
        //%block="rechts"
        rechts = 1
    }
    //% block="Scroll text %data met wachttijd %delayTime en kleur %colour scroll naar %direction"
    //% colour.shadow="Matrix_rgb"
    //% delayTime.min=0 delayTime.max=2000
    export function scrollText(data: string, delayTime: number, colour: number, direction: Directions): void {
        if(direction == 0){
        for (let Xpos = 32; Xpos > -(data.length * 6); Xpos--) {
            for (let i = 0; i < data.length; i++) {
                for (let k = 0; k < 5; k++) {
                    if ((Xpos + (i * 6) > -6 && ((Xpos + (i * 6)) < 32))) {
                        let letterMap = getLettermap(data.charAt(i))
                        if (!((Xpos + k) % 2)) {
                            for (let j = 0; j < 8; j++) {
                                if ((letterMap[j] & (0x10 >> k))) {
                                    matrix.setPixelColor(((k * 8) + (Xpos * 8) + j) + (i * 8 * 6), ((colour)))
                                }
                            }
                        }
                        else {
                            for (let j = 0; j < 8; j++) {
                                if ((letterMap[j] & (0x10 >> k))) {
                                    matrix.setPixelColor(((k * 8) + (Xpos * 8) + (7 - j)) + (i * 8 * 6), ((colour)))
                                }
                            }
                        }
                    }
                }
            }
            matrix.show()
            matrix.clear()
            basic.pause(delayTime)
        }
        }
        else {
            for (let Xpos = 0; Xpos < (32+data.length * 6); Xpos++) {
                for (let i = 0; i < data.length; i++) {
                    for (let k = 0; k < 5; k++) {
                        if ((Xpos + (i * 6) > -6 && ((Xpos + (i * 6)) < 32))) {
                            let letterMap = getLettermap(data.charAt(i))
                            if (!((Xpos + k) % 2)) {
                                for (let j = 0; j < 8; j++) {
                                    if ((letterMap[j] & (0x10 >> k))) {
                                        matrix.setPixelColor(((k * 8) + (Xpos * 8) + j) + (i * 8 * 6), ((colour)))
                                    }
                                }
                            }
                            else {
                                for (let j = 0; j < 8; j++) {
                                    if ((letterMap[j] & (0x10 >> k))) {
                                        matrix.setPixelColor(((k * 8) + (Xpos * 8) + (7 - j)) + (i * 8 * 6), ((colour)))
                                    }
                                }
                            }
                        }
                    }
                }
                matrix.show()
                matrix.clear()
                basic.pause(delayTime)
            }
        }
    }
    /**
    * Gets the direction to scroll in
    */
    //% weight=2 blockGap=8
    //% blockId="ArexxMatrix_Direction" block="%Direction"
    //% advanced=true
    export function Direction(direction: Directions): number {
        return direction;
    }
    
    //%block="set Matrix brightness (0-255) %setPoint" setPoint.max=255 setPoint.min=0 setPoint.defl=128
    //% 
    export function Brightness(setPoint: number) {
        matrix.setBrightness(setPoint)
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% blockId="Matrix_rgb" block="red %red|green %green|blue %blue"
    //% advanced=true
    //%red.defl=255 blue.defl=255 green.defl=255
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }


    function getLettermap(l: string) {
        switch (l) {
            case "a": return [
                0x00,
                0x00,
                0x0E,
                0x01,
                0x0F,
                0x11,
                0x0F,
                0x00]
            case "b": return [
                0x10,
                0x10,
                0x1E,
                0x11,
                0x11,
                0x11,
                0x1E,
                0x00]
            case "c": return [
                0x00,
                0x00,
                0x0E,
                0x10,
                0x10,
                0x10,
                0x0E,
                0x00
            ]
            case "d": return [
                0x01,
                0x01,
                0x0F,
                0x11,
                0x11,
                0x11,
                0x0F,
                0x00
            ]
            case "e": return [
                0x00,
                0x00,
                0x0E,
                0x11,
                0x1F,
                0x10,
                0x0E,
                0x00
            ]
            case "f": return [
                0x06,
                0x09,
                0x08,
                0x1C,
                0x08,
                0x08,
                0x08,
                0x00
            ]
            case "g": return [
                0x00,
                0x00,
                0x0F,
                0x11,
                0x11,
                0x0F,
                0x01,
                0x0E
            ]
            case "h": return [
                0x10,
                0x10,
                0x16,
                0x19,
                0x11,
                0x11,
                0x11,
                0x00
            ]
            case "i": return [
                0x04,
                0x00,
                0x0C,
                0x04,
                0x04,
                0x04,
                0x0E,
                0x00
            ]
            case "j": return [
                0x02,
                0x00,
                0x06,
                0x02,
                0x02,
                0x02,
                0x12,
                0x0C
            ]
            case "k": return [
                0x08,
                0x08,
                0x09,
                0x0A,
                0x0C,
                0x0A,
                0x09,
                0x00
            ]
            case "l": return [
                0x0C,
                0x04,
                0x04,
                0x04,
                0x04,
                0x04,
                0x0E,
                0x00
            ]
            case "m": return [
                0x00,
                0x00,
                0x1A,
                0x15,
                0x15,
                0x11,
                0x11,
                0x00
            ]
            case "n": return [
                0x00,
                0x00,
                0x16,
                0x19,
                0x11,
                0x11,
                0x11,
                0x00
            ]
            case "o": return [
                0x00,
                0x00,
                0x0E,
                0x11,
                0x11,
                0x11,
                0x0E,
                0x00
            ]
            case "p": return [
                0x00,
                0x00,
                0x1E,
                0x11,
                0x11,
                0x1E,
                0x10,
                0x10
            ]
            case "q": return [
                0x00,
                0x00,
                0x0F,
                0x11,
                0x11,
                0x0F,
                0x01,
                0x01
            ]
            case "r": return [
                0x00,
                0x00,
                0x16,
                0x19,
                0x10,
                0x10,
                0x10,
                0x00
            ]
            case "s": return [
                0x00,
                0x00,
                0x0E,
                0x10,
                0x0E,
                0x01,
                0x1E,
                0x00
            ]
            case "t": return [
                0x08,
                0x08,
                0x1C,
                0x08,
                0x08,
                0x09,
                0x06,
                0x00
            ]
            case "u": return [
                0x00,
                0x00,
                0x11,
                0x11,
                0x11,
                0x13,
                0x0D,
                0x00
            ]
            case "v": return [
                0x00,
                0x00,
                0x11,
                0x11,
                0x11,
                0x0A,
                0x04,
                0x00
            ]
            case "w": return [
                0x00,
                0x00,
                0x11,
                0x11,
                0x15,
                0x15,
                0x0A,
                0x00
            ]
            case "x": return [
                0x00,
                0x00,
                0x11,
                0x0A,
                0x04,
                0x0A,
                0x11,
                0x00
            ]
            case "y": return [
                0x00,
                0x00,
                0x11,
                0x11,
                0x11,
                0x0F,
                0x01,
                0x0E
            ]
            case "z": return [
                0x00,
                0x00,
                0x1F,
                0x02,
                0x04,
                0x08,
                0x1F,
                0x00
            ]
            case "A": return [
                0x0E,
                0x11,
                0x11,
                0x11,
                0x1F,
                0x11,
                0x11,
                0x00
            ]
            case "B": return [
                0x1E,
                0x11,
                0x11,
                0x1E,
                0x11,
                0x11,
                0x1E,
                0x00
            ]
            case "C": return [
                0x0E,
                0x11,
                0x10,
                0x10,
                0x10,
                0x11,
                0x0E,
                0x00
            ]
            case "D": return [
                0x1C,
                0x12,
                0x11,
                0x11,
                0x11,
                0x12,
                0x1C,
                0x00
            ]
            case "E": return [
                0x1F,
                0x10,
                0x10,
                0x1E,
                0x10,
                0x10,
                0x1F,
                0x00
            ]
            case "F": return [
                0x1F,
                0x10,
                0x10,
                0x1C,
                0x10,
                0x10,
                0x10,
                0x00
            ]
            case "G": return [
                0x0E,
                0x11,
                0x10,
                0x10,
                0x13,
                0x11,
                0x0E,
                0x00
            ]
            case "H": return [
                0x11,
                0x11,
                0x11,
                0x1F,
                0x11,
                0x11,
                0x11,
                0x00
            ]
            case "I": return [
                0x0E,
                0x04,
                0x04,
                0x04,
                0x04,
                0x04,
                0x0E,
                0x00
            ]
            case "J": return [
                0x07,
                0x02,
                0x02,
                0x02,
                0x02,
                0x02,
                0x12,
                0x0C
            ]
            case "K": return [
                0x11,
                0x12,
                0x14,
                0x18,
                0x14,
                0x12,
                0x11,
                0x00
            ]
            case "L": return [
                0x10,
                0x10,
                0x10,
                0x10,
                0x10,
                0x10,
                0x1F,
                0x00
            ]
            case "M": return [
                0x11,
                0x1B,
                0x15,
                0x11,
                0x11,
                0x11,
                0x11,
                0x00
            ]
            case "N": return [
                0x11,
                0x11,
                0x19,
                0x15,
                0x13,
                0x11,
                0x11,
                0x00
            ]
            case "O": return [
                0x0E,
                0x11,
                0x11,
                0x11,
                0x11,
                0x11,
                0x0E,
                0x00
            ]
            case "P": return [
                0x1E,
                0x11,
                0x11,
                0x1e,
                0x10,
                0x10,
                0x10,
                0x00
            ]
            case "Q": return [
                0x0E,
                0x11,
                0x11,
                0x11,
                0x15,
                0x12,
                0x0D,
                0x00
            ]
            case "R": return [
                0x1e,
                0x11,
                0x11,
                0x1E,
                0x14,
                0x12,
                0x11,
                0x00
            ]
            case "S": return [
                0x0F,
                0x10,
                0x10,
                0x0E,
                0x01,
                0x01,
                0x1E,
                0x00
            ]
            case "T": return [
                0x1F,
                0x04,
                0x04,
                0x04,
                0x04,
                0x04,
                0x04,
                0x00
            ]
            case "U": return [
                0x11,
                0x11,
                0x11,
                0x11,
                0x11,
                0x11,
                0x0E,
                0x00
            ]
            case "V": return [
                0x11,
                0x11,
                0x11,
                0x11,
                0x11,
                0x0A,
                0x04,
                0x00
            ]
            case "W": return [
                0x11,
                0x11,
                0x11,
                0x15,
                0x15,
                0x1B,
                0x11,
                0x00
            ]
            case "X": return [
                0x11,
                0x11,
                0x0A,
                0x04,
                0x0A,
                0x11,
                0x11,
                0x00
            ]
            case "Y": return [
                0x11,
                0x11,
                0x0A,
                0x04,
                0x04,
                0x04,
                0x04,
                0x00
            ]
            case "Z": return [
                0x1F,
                0x01,
                0x02,
                0x04,
                0x08,
                0x10,
                0x1F,
                0x00
            ]
            case ".": return [
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x0C,
                0x0C,
                0x00
            ]
            case "0": return [
                0x0E,
                0x011,
                0x13,
                0x15,
                0x19,
                0x11,
                0x0E,
                0x00
            ]
            case "1": return [
                0x04,
                0x0C,
                0x04,
                0x04,
                0x04,
                0x04,
                0x0E,
                0x00
            ]
            case "2": return [
                0x0E,
                0x11,
                0x01,
                0x02,
                0x04,
                0x08,
                0x1F,
                0x00
            ]
            case "3": return [
                0x1F,
                0x02,
                0x04,
                0x02,
                0x01,
                0x11,
                0x0E,
                0x00
            ]
            case "4": return [
                0x02,
                0x06,
                0x0A,
                0x12,
                0x1F,
                0x02,
                0x02,
                0x00
            ]
            case "5": return [
                0x1F,
                0x10,
                0x1E,
                0x01,
                0x01,
                0x11,
                0x0E,
                0x00
            ]
            case "6": return [
                0x06,
                0x08,
                0x10,
                0x1E,
                0x11,
                0x11,
                0x0E,
                0x00
            ]
            case "7": return [
                0x1F,
                0x01,
                0x02,
                0x04,
                0x08,
                0x08,
                0x08,
                0x00
            ]
            case "8": return [
                0x0E,
                0x11,
                0x11,
                0x0E,
                0x11,
                0x11,
                0x0E,
                0x00
            ]
            case "9": return [
                0x0E,
                0x11,
                0x11,
                0x0F,
                0x01,
                0x02,
                0x0C,
                0x00
            ]
            case ",": return [
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x0C,
                0x04,
                0x10
            ]
            case ":": return [
                0x00,
                0x0c,
                0x0c,
                0x00,
                0x0C,
                0x0C,
                0x00,
                0x00
            ]
            case ";": return [
                0x00,
                0x0c,
                0x0c,
                0x00,
                0x0C,
                0x04,
                0x10,
                0x00
            ]
            case "?": return [
                0x0E,
                0x11,
                0x02,
                0x02,
                0x04,
                0x00,
                0x04,
                0x00
            ]
            case "!": return [
                0x04,
                0x04,
                0x04,
                0x04,
                0x04,
                0x00,
                0x04,
                0x00
            ]
            case "-": return [
                0x00,
                0x00,
                0x00,
                0x1F,
                0x00,
                0x00,
                0x00,
                0x00
            ]
            case "+": return [
                0x00,
                0x04,
                0x04,
                0x1F,
                0x04,
                0x04,
                0x00,
                0x00
            ]
            case "=": return [
                0x00,
                0x00,
                0x1F,
                0x00,
                0x1F,
                0x00,
                0x00,
                0x00
            ]
            case "*": return [
                0x00,
                0x0A,
                0x04,
                0x1F,
                0x04,
                0x0A,
                0x00,
                0x00
            ]
            case "/": return [
                0x00,
                0x01,
                0x02,
                0x04,
                0x08,
                0x10,
                0x00,
                0x00
            ]
            case "(": return [
                0x02,
                0x04,
                0x08,
                0x08,
                0x08,
                0x04,
                0x02,
                0x00
            ]
            case ")": return [
                0x08,
                0x04,
                0x02,
                0x02,
                0x02,
                0x04,
                0x08,
                0x00
            ]
            case "<": return [
                0x01,
                0x02,
                0x04,
                0x08,
                0x04,
                0x02,
                0x01,
                0x00
            ]
            case ">": return [
                0x10,
                0x08,
                0x04,
                0x02,
                0x04,
                0x08,
                0x10,
                0x00
            ]
            case "^": return [
                0x04,
                0x0A,
                0x11,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00
            ]
            case "%": return [
                0x18,
                0x19,
                0x02,
                0x04,
                0x08,
                0x0B,
                0x03,
                0x00
            ]
            case "&": return [
                0x0C,
                0x12,
                0x14,
                0x08,
                0x15,
                0x12,
                0x0D,
                0x00
            ]
            case "#": return [
                0x0A,
                0x0A,
                0x1F,
                0x0A,
                0x1F,
                0x0A,
                0x0A,
                0x00
            ]
            case "$": return [
                0x04,
                0x0E,
                0x14,
                0x0E,
                0x05,
                0x1E,
                0x04,
                0x00
            ]
            case "@": return [
                0x0E,
                0x11,
                0x01,
                0x0D,
                0x15,
                0x15,
                0x0E,
                0x00
            ]
            default: return [
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00,
                0x00
            ];
        }
    }
}
