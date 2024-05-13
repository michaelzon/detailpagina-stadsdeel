'use server';

import { getStadsdeelData } from "./api/getStadsdeelData";
import { getWijkenData } from "./api/getWijkenData";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { StadsdeelType } from "./types/gebiedenTypes";

export default async function Home() {
  const stadsdeelData: StadsdeelType = await getStadsdeelData();
  const id = stadsdeelData.identificatie;
  const wijkenData = await getWijkenData(id)

  return (
    <AppContainer stadsdeelData={stadsdeelData} wijkenData={wijkenData}/>
  );
}