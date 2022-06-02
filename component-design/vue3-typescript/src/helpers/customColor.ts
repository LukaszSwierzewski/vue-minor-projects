export function customColor (color: string): string {
    switch(color) {
        case 'unknown':
            return color = 'black'
        case "blue-gray":
            return color = '#6699CC'
        case "hazel":
            return color = '#C9C789'
        case "green, yellow": {
            return color = 'greenYellow'
        }
        case "red, blue": {
            return color = 'redBlue'
        }
        default: 
            return color
    }
}