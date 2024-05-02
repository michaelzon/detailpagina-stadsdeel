'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface Wijk {
  naam: string,
  identificatie: string,
}

export default function Home() {
  const [wijken, setWijken] = useState([]);

  useEffect(() => {
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
        setWijken(data['_embedded']);
      })
      .catch(error => console.error('Error in fetching data:', error));
  }, []);

  console.log(wijken);
 
  return (
    <main className={styles.main}>
      <div className={styles.description}>

      </div>

      <div className={styles.center}>
        hoi
      </div>

      <div className={styles.grid}>

      </div>
    </main>
  );
}
