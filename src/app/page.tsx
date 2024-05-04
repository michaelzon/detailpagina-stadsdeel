'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Card from "./components/Card";

interface Wijk {
  naam: string,
  identificatie: string,
}

export default function Home() {
  const [wijken, setWijken] = useState([]);
  const [cardIsOpen, setCardIsOpen] = useState<boolean>(false);

  const handleButtonClick = () => setCardIsOpen(!cardIsOpen);

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
        setWijken(data['_embedded'].wijken);
      })
      .catch(error => console.error('Error in fetching data:', error));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
      <div className={styles.center}>

        {wijken.map((wijk: Wijk, i) => (
          <div>
            {wijk.naam}
          </div>
        ))}
      </div>
      <div className={styles.grid}>
      </div>
      <button className={styles.simpleButton}
      onClick={handleButtonClick}
    >
    {`card open? ${cardIsOpen}`}
    </button>
      <Card isOpen={cardIsOpen}>
        <Card.Title title="some title"></Card.Title>
        <Card.Description description="some description"></Card.Description>
        <Card.Footer text='klap dicht' handleClose={handleButtonClick}></Card.Footer>
      </Card>
    </main>
  );
}
