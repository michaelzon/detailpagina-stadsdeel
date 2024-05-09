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

  return (
    <AppContainer stadsdeelData={stadsdeelData} wijkenData={wijkenData}></AppContainer>
  );
}