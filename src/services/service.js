const BASE_URL = 'https://ecommerce.ibradev.me/'

export const getAllCategory = async () => {
    const response = await fetch(`${BASE_URL}categories/all`)
    return response
}
export const getAllProduct = async () => {
    const response = await fetch(`${BASE_URL}products/all`)
    const data = await response.json()
    return data
}
export const searchProduct = async (value) => {
    const response = await fetch(`${BASE_URL}products/search?q=${value}`)
    const data =  await response.json()
    return data
}