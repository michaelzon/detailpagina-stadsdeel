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

interface Data {
  name: string;
}

interface Buurt {
  identificatie: string,
  naam: string,
}


export default function Home() {
  const [wijken, setWijken] = useState([]);

  // const [data, setData] = useState<Data>();
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // const getData = useCallback(async () => {
  //   setIsLoading(true);
  //   const { data, isError, error } = await getWijkenData();
  //   setIsLoading(false);
  //   if (!isError) setData(data);
  //   else {
  //     setIsError(isError);
  //     setError(error);
  //   }
  // }, [])

  // useEffect(() => {
  //   getData();
  // }, [getData]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch(error => console.error('Error in fetching data:', error));
  }, []);

  console.log('wijken', wijken);

  const handleSelect = (item: string) => {
    console.log("Selected Item:", item);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
      <div>
        <Dropdown onSelect={handleSelect} items={wijken}>
          <Dropdown.Toggle label={"wijk"} />
          <Dropdown.List>
            {isLoading ? <p> is loading... </p> :
              wijken.map((wijk: Wijk, i: number) => (
                <Dropdown.Item index={i} item={wijk}></Dropdown.Item>
              ))}
          </Dropdown.List>
        </Dropdown>
        {/* <Dropdown onSelect={handleSelect} items={wijken}>
          <Dropdown.Toggle label={"buurt"}/>
          <Dropdown.List>
            {isLoading ? <p> is loading... </p> :
              wijken.map((wijk: Wijk, i: number) => (
                <Dropdown.Item index={i} item={wijk}></Dropdown.Item>
              ))}
          </Dropdown.List>
        </Dropdown> */}
      </div>
      <div className={styles.grid}>
      </div>
    </main>
  );
}