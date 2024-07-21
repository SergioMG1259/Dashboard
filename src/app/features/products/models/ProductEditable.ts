export interface ProductEditable {
    name: string,
    cateogry: string,
    imageURL: string,
    stock: number,
    price: number,
    discount: boolean,
    discountPercentage: number,
    priceFinal: number,
    colors: string[]
}