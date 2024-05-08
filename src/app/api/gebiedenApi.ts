export async function getGebiedenData() {
    const res = await fetch('https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

//   useEffect(() => {
//     setWijkenIsLoading(true);
//     fetch('https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West')
//         .then(res => res.json())
//         .then(data => {
//             if (data && data['_embedded'] && data['_embedded']['stadsdelen'][0]) {
//                 const code = data['_embedded']['stadsdelen'][0]['code']
//                 setStadsdeelCode(code);
//                 const id = data['_embedded']['stadsdelen'][0]['identificatie'];
//                 return id;
//             } else {
//                 throw new Error('No stadsdeel data found');
//             }
//         })
//         .then(identificatie => {
//             console.log(identificatie)
//             return fetch(`https://api.data.amsterdam.nl/v1/gebieden/wijken/?ligtInStadsdeel.identificatie=${identificatie}`);
//         })
//         .then(res => res.json())
//         .then(data => {

//             setWijken(data['_embedded'].wijken);
//             setWijkenIsLoading(false);
//         })
//         .catch(error => console.error('Error in fetching data:', error));
// }, []);