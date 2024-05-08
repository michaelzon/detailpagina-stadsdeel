'use server';

import { getStadsdeelData } from "./api/getStadsdeelData";
import { getWijkenData } from "./api/getWijkenData";
import { AppContainer } from "./components/AppContainer/AppContainer";

interface StadsdeelData {
  id: string;
  code: string;
};

export default async function Home() {
  const stadsdeelData: StadsdeelData = await getStadsdeelData();
  const id = stadsdeelData.id;
  const wijkenData = await getWijkenData(id)

  // useEffect(() => {
  //   const fetchStadsdeel = async () => {
  //     setWijkenIsLoading(true);
  //     try {
  //       const res = await fetch('https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West');
  //       const data = await res.json();
  //       if (data && data['_embedded'] && data['_embedded']['stadsdelen'][0]) {
  //         const code = data['_embedded']['stadsdelen'][0]['code'];
  //         setStadsdeelCode(code);
  //         const identificatie = data['_embedded']['stadsdelen'][0]['identificatie'];
  //         const wijkenResponse = await fetch(`https://api.data.amsterdam.nl/v1/gebieden/wijken/?ligtInStadsdeel.identificatie=${identificatie}`);
  //         const wijkenData = await wijkenResponse.json();
  //         setWijken(wijkenData['_embedded'].wijken);
  //       }
  //     } catch (error) {
  //       console.error('Error in fetching data:', error);
  //     }
  //     setWijkenIsLoading(false);
  //   };
  //   fetchStadsdeel();
  // }, []);

  // useEffect(() => {
  //   const fetchBuurten = async () => {
  //     if (selectedWijk.identificatie) {
  //       setBuurtenIsLoading(true);
  //       try {
  //         const res = await fetch(`https://api.data.amsterdam.nl/v1/gebieden/buurten/?ligtInWijk.identificatie=${selectedWijk.identificatie}`);
  //         const data = await res.json();
  //         setBuurten(data['_embedded'].buurten);
  //       } catch (error) {
  //         console.error('Error in fetching data:', error);
  //       }
  //       setBuurtenIsLoading(false);
  //     }
  //   };

  //   fetchBuurten();
  // }, [selectedWijk]);

  // const handleSelect = (item: Wijk) => {
    // setSelectedWijk(item);
  // };


  return (
    <AppContainer stadsdeelData={stadsdeelData} wijkenData={wijkenData}></AppContainer>
  );
}