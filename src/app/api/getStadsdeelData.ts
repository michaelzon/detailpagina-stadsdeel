export async function getStadsdeelData() {
  try {
      const response = await fetch('https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West');
      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (data && data['_embedded'] && data['_embedded']['stadsdelen'][0]) {
          const code = data['_embedded']['stadsdelen'][0]['code'];
          const id = data['_embedded']['stadsdelen'][0]['identificatie'];
          const stadsdeelData = { code, id };
          return stadsdeelData;
      } else {
          throw new Error('No stadsdeel data found');
      }
  } catch (error) {
      console.error(error);
      // Handle the error based on your application's needs, possibly rethrow or return an error indication
      throw error;  // Rethrow the error if you want to handle it at a higher level
  }
}
  // useEffect(() => {
  //   setWijkenIsLoading(true);
  //   fetch('https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West')
  //       .then(res => res.json())
  //       .then(data => {
  //           if (data && data['_embedded'] && data['_embedded']['stadsdelen'][0]) {
  //               const code = data['_embedded']['stadsdelen'][0]['code']
  //               setStadsdeelCode(code);
  //               const id = data['_embedded']['stadsdelen'][0]['identificatie'];
  //               return id;
  //           } else {
  //               throw new Error('No stadsdeel data found');
  //           }
  //       })
  //       .then(identificatie => {
  //           console.log(identificatie)
  //           return fetch(`https://api.data.amsterdam.nl/v1/gebieden/wijken/?ligtInStadsdeel.identificatie=${identificatie}`);
  //       })
  //       .then(res => res.json())
  //       .then(data => {

  //           setWijken(data['_embedded'].wijken);
  //           setWijkenIsLoading(false);
  //       })
  //       .catch(error => console.error('Error in fetching data:', error));
// }, []);