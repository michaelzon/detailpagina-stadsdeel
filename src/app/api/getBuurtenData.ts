export async function getBuurtenData(id: string) {
    try {
        const response = await fetch(`https://api.data.amsterdam.nl/v1/gebieden/buurten/?ligtInWijk.identificatie=${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (data && data['_embedded'] && data['_embedded']['buurten']) {
            return data['_embedded']['buurten'];
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
