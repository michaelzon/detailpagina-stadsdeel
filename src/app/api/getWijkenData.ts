export async function getWijkenData(id: string) {
    try {
        const response = await fetch(`https://api.data.amsterdam.nl/v1/gebieden/wijken/?ligtInStadsdeel.identificatie=${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (data && data['_embedded'] && data['_embedded']['wijken']) {
            return data['_embedded']['wijken'];
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}