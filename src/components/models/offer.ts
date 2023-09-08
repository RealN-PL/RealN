export interface Offer {
    title: string,
    type: String,
    city: String,
    size: String,
    land: String,
    district: String,
    street: String,
    stnum: String,
    floor: String,
    buildType: String,
    material: String,
    costs: String,
    year: String,
    rooms: String,
    condition: String,
    parking: String,
    transport: String[],
    education: String[],
    health: String[],
    recreation: String[],
    amenities: String[],
    others: String[],
    kitchen: String,
    kitchenAm: String[],
    bathroom: String,
    bathAm: String[],
    installation: String,
    loudness: String,
    windows: String,
    furnitured: String[],
    energy:String[],
    media: String[],
    direction: String[],
    description: String,
    price: String,
    priceM: String,
    imageAsset: ImageAsset | null
 }

 export interface ImageAsset {
    __type? : String,
    name?: String,
    url: string,
    agent?:null|String,
    createdAt?: String,
    updatedAt?: String,
    objectId?: String
 }