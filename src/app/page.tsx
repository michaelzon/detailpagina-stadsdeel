'use client';

import { useCallback, useEffect, useState } from "react";
import styles from "./styles/page.module.css";
import Card from "./components/Card/Card";
import Dropdown from "./components/Dropdown/Dropdown";
import { wijkenLijst } from "./data/wijkenData";
import { getWijkenData } from "./services/getWijkenData";

interface Wijk {
  identificatie: string,
  naam: string,
}

interface Buurt {
  identificatie: string,
  naam: string,
}

export default function Home() {
  const [wijken, setWijken] = useState<Wijk[]>([]);
  const [selectedWijk, setSelectedWijk] = useState<Wijk>({ identificatie: '', naam: '' });
  const [buurten, setBuurten] =  useState<Buurt[]>([]);
  const [wijkenIsLoading, setWijkenIsLoading] = useState(false);
  const [buurtenIsLoading, setBuurtenIsLoading] = useState(false);

  useEffect(() => {
    setWijkenIsLoading(true);
    fetch('https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West')
      .then(res => res.json())
      .then(data => {
        if (data && data['_embedded'] && data['_embedded']['stadsdelen'][0]) {
          const id = data['_embedded']['stadsdelen'][0]['identificatie'];
          return id;
        } else {
          throw new Error('No stadsdeel data found');
        }
      })
      .then(identificatie => {
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
    console.log('hij gaat door use effect van call naar buurten')
    fetch(`https://api.data.amsterdam.nl/v1/gebieden/buurten/?ligtInWijk.identificatie=${selectedWijk.identificatie}`)
      .then(res => res.json())
      .then(data => {
        setBuurten(data['_embedded'].buurten);
        setBuurtenIsLoading(false);
      })
      .catch(error => console.error('Error in fetching data:', error));
  }, [selectedWijk]);

  // console.log('wijken', wijken);
  // console.log('selected wijk', selectedWijk);
  // console.log('buurten', buurten);

  const handleSelect = (item: Wijk) => {
    setSelectedWijk(item)
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
      <div className={styles.dropdownContainer}>
        <Dropdown onSelect={handleSelect} items={wijken}>
          <Dropdown.Toggle label={"wijk"} />
          <Dropdown.List>
            {wijkenIsLoading ? <p> wijken are loading... </p> :
              wijken.map((wijk: Wijk, i: number) => (
                <Dropdown.Item index={i} item={wijk}></Dropdown.Item>
              ))}
          </Dropdown.List>
        </Dropdown>
        <Dropdown onSelect={handleSelect} items={wijken}>
          <Dropdown.Toggle label={"buurt"} />
          <Dropdown.List>
            {buurtenIsLoading ? <p> buurten are loading... </p> :
              buurten.map((buurt: Buurt, i: number) => (
                <Dropdown.Item index={i} item={buurt}></Dropdown.Item>
              ))}
          </Dropdown.List>
        </Dropdown>
      </div>
      <div className={styles.grid}>
      </div>
    </main>
  );
}