export const COLOR_MAP: { [key: string]: string } = {
    blue: '#4355DC',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#D3D2DA',
    green: '#75DB52'
}

export function getColorHex(colorName: string): string {
    return COLOR_MAP[colorName] || '#FFFFFF' // Devuelve blanco por defecto
}