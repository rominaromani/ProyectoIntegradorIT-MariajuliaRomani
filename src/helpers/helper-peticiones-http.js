
export const helperPeticionesHttp = async (url, options) => {

    try {

        const res = await fetch(url, options)
        if (!res.ok) {
            throw new Error('No se pudo realizar', res.status)
        }
        const data = await res.json()
        return data
        
    } catch (error) {
        console.error('[helperPeticionesHttp]', error)
    }

}