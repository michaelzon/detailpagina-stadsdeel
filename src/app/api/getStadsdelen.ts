import { StadsdeelType } from '@/app/types/gebiedenTypes';
export async function getStadsdelenData() {
    try {
        const response = await fetch(`https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (data && data['_embedded'] && data['_embedded']['stadsdelen'][0]) {
            const stadsdelenArray = data['_embedded']['stadsdelen'];
            const stadsdelen = stadsdelenArray.map((stadsdeel: StadsdeelType) => ({
                naam: stadsdeel.naam,
                identificatie: stadsdeel.identificatie,
                code: stadsdeel.code
            }))
            return stadsdelen;
        } else {
            throw new Error('No stadsdeel data found');
        }
    } catch (error) {
        console.error(error);
        // Handle the error based on your application's needs, possibly rethrow or return an error indication
        throw error;  // Rethrow the error if you want to handle it at a higher level
    }
  }
   