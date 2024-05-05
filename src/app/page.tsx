'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";

interface Wijk {
  naam: string,
  identificatie: string,
}

export default function Home() {
  const [wijken, setWijken] = useState([]);
  const [cardIsOpen, setCardIsOpen] = useState<boolean>(false);

  const handleButtonClick = () => setCardIsOpen(!cardIsOpen);

  const wijkenLijst = [
    {
      "identificatie": "03630970000040",
      'naam': 'Sloterdijk Nieuw-West',
    },
    {
      "identificatie": "03630970000041",
      "naam": "Geuzenveld"
    },
    {
      "identificatie": "03630970000042",
      "volgnummer": 1,
      "registratiedatum": "2024-01-25T20:36:51",
      "naam": "Slotermeer-West",
    },
    {
      "identificatie": "03630970000043",
      "volgnummer": 1,
      "registratiedatum": "2024-01-25T20:36:51",
      "naam": "Slotermeer-Noordoost",
    },
    {
      "identificatie": "03630970000044",
      "volgnummer": 1,
      "registratiedatum": "2024-01-25T20:36:51",
      "naam": "Slotermeer-Zuidoost",
    }
  ];

  const buurtenLijstGeuzenveld = [
    {
      "volgnummer": 1,
      "registratiedatum": "2024-01-25T20:36:51",
      "identificatie": "03630980000180",
      "naam": "Osdorper Binnenpolder",
    },
    {
      "volgnummer": 1,
      "registratiedatum": "2024-01-25T20:36:51",
      "identificatie": "03630980000181",
      "naam": "De Eendracht",
    },
    {
      "volgnummer": 1,
      "registratiedatum": "2024-01-25T20:36:51",
      "identificatie": "03630980000182",
      "naam": "Ruys de Beerenbrouckbuurt",
    },
    {
      "volgnummer": 1,
      "registratiedatum": "2024-01-25T20:36:51",
      "identificatie": "03630980000183",
      "naam": "Eendrachtspark",
    }
  ];

  // useEffect(() => {
  //   fetch('https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data && data['_embedded'] && data['_embedded']['stadsdelen'][0]) {
  //         const id = data['_embedded']['stadsdelen'][0]['identificatie'];
  //         return id;
  //       } else {
  //         throw new Error('No stadsdeel data found');
  //       }
  //     })
  //     .then(identificatie => {
  //       return fetch(`https://api.data.amsterdam.nl/v1/gebieden/wijken/?ligtInStadsdeel.identificatie=${identificatie}`);
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       setWijken(data['_embedded'].wijken);
  //     })
  //     .catch(error => console.error('Error in fetching data:', error));
  // }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
      <div className={styles.center}>
        {wijkenLijst.map((wijk: Wijk, i) => (
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
      <Dropdown onSelect={() => { }}>
        <Dropdown.Toggle />
        <Dropdown.List>
          {wijkenLijst.map((wijk: Wijk, i) => {
            <Dropdown.Item item={wijk.naam} index={i}/>
          })}
        </Dropdown.List>
      </Dropdown>
      <Card isOpen={cardIsOpen}>
        <Card.Footer text='klap dicht' handleClose={handleButtonClick}></Card.Footer>
        <Card.Title title="some title"></Card.Title>
        <Card.Description description="some description"></Card.Description>
      </Card>
    </main>
  );
}