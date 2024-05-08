'use client';

import { useEffect, useState } from "react";
import styles from "./styles/page.module.css";
import Dropdown from "./components/Dropdown/Dropdown";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Buurt, Wijk } from "./types/gebiedenTypes";
import { DetailPage } from "./components/DetailPage/DetailPage";

export default function Home() {
  const [wijken, setWijken] = useState<Wijk[]>([]);
  const [selectedWijk, setSelectedWijk] = useState<Wijk>({ identificatie: '', naam: '' });
  const [buurten, setBuurten] = useState<Buurt[]>([]);
  const [wijkenIsLoading, setWijkenIsLoading] = useState<boolean>(false);
  const [buurtenIsLoading, setBuurtenIsLoading] = useState<boolean>(false);
  const [stadsdeelCode, setStadsdeelCode] = useState<string>('');

  useEffect(() => {
    setWijkenIsLoading(true);
    fetch('https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West')
      .then(res => res.json())
      .then(data => {
        if (data && data['_embedded'] && data['_embedded']['stadsdelen'][0]) {
          const code = data['_embedded']['stadsdelen'][0]['code']
          setStadsdeelCode(code);
          const id = data['_embedded']['stadsdelen'][0]['identificatie'];
          return id;
        } else {
          throw new Error('No stadsdeel data found');
        }
      })
      .then(identificatie => {
        console.log(identificatie)
        return fetch(`https://api.data.amsterdam.nl/v1/gebieden/wijken/?ligtInStadsdeel.identificatie=${identificatie}`);
      })
      .then(res => res.json())
      .then(data => {

        setWijken(data['_embedded'].wijken);
        setWijkenIsLoading(false);
      })
      .catch(error => console.error('Error in fetching data:', error));
  }, []);

  useEffect(() => {
    setBuurtenIsLoading(true);
    fetch(`https://api.data.amsterdam.nl/v1/gebieden/buurten/?ligtInWijk.identificatie=${selectedWijk.identificatie}`)
      .then(res => res.json())
      .then(data => {
        setBuurten(data['_embedded'].buurten);
        setBuurtenIsLoading(false);
      })
      .catch(error => console.error('Error in fetching data:', error));
  }, [selectedWijk]);

  const handleSelect = (item: Wijk) => {
    setSelectedWijk(item)
  };


  return (
    <div className={styles.container}>
      <Header />
      <DetailPage
        wijken={wijken}
        selectedWijk={selectedWijk}
        buurten={buurten}
        wijkenIsLoading={wijkenIsLoading}
        buurtenIsLoading={buurtenIsLoading}
        stadsdeelCode={stadsdeelCode}
        handleSelect={handleSelect}
      />
      <Footer />
    </div>
  );
}