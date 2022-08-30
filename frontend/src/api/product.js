import { BASE_URL } from "./category"

export const getAllProducts = async () => {
    try {
        const request = await fetch(`${BASE_URL}/api/products`)
        const response = await request.json()
        return response
    } catch (e) {
        return { error: e.message }
    }
}