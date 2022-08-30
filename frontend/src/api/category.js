export const BASE_URL = "http://localhost:7000"

export const getAllCategories = async () => {
    try {
        const request = await fetch(`${BASE_URL}/api/category`)
        const response = await request.json()
        return response
    } catch (e) {
        return { error: e.message }
    }
}