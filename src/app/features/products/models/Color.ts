export const COLOR_MAP: { [key: string]: string } = {
    blue: '#0000FF',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#808080',
    green: '#008000'
}

export function getColorHex(colorName: string): string {
    return COLOR_MAP[colorName] || '#FFFFFF' // Devuelve blanco por defecto
}