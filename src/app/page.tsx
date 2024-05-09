'use server';

import { getStadsdeelData } from "./api/getStadsdeelData";
import { getWijkenData } from "./api/getWijkenData";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { Stadsdeel } from "./types/gebiedenTypes";

export default async function Home() {
  const stadsdeelData: Stadsdeel = await getStadsdeelData();
  const id = stadsdeelData.id;
  const wijkenData = await getWijkenData(id)

  return (
    <AppContainer stadsdeelData={stadsdeelData} wijkenData={wijkenData}></AppContainer>
  );
}