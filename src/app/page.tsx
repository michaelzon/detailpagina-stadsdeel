'use server';

import { getStadsdelenData } from "./api/getStadsdelen";
import { getStadsdeelData } from "./api/getStadsdeelData";
import { getWijkenData } from "./api/getWijkenData";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { StadsdeelType } from "./types/gebiedenTypes";

export default async function Home() {
  // const defaultStadsdeel = 'Nieuw-West'
  // const stadsdeelData: StadsdeelType = await getStadsdeelData(defaultStadsdeel);
  // const id = stadsdeelData.identificatie;
  // const wijkenData = await getWijkenData(id)
  const stadsdelenData: any = await getStadsdelenData();

  return (
    <AppContainer 
    stadsdelenData={stadsdelenData} 
    >
    {/* // stadsdeelData={stadsdeelData}  */}
    {/* // wijkenData={wijkenData}> */}

    </AppContainer>
  );
}