'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";

interface Wijk {
  identificatie: string,
  naam: string,
}

interface Buurt {
  identificatie: string,
  naam: string,
}

export default function Home() {
  const [wijken, setWijken] = useState([]);
  const [cardIsOpen, setCardIsOpen] = useState<boolean>(false);
  const handleButtonClick = () => setCardIsOpen(!cardIsOpen);

  const wijkenLijstString = [
    'Sloterdijk Nieuw-West',
    "Geuzenveld",
    "Slotermeer-West",
    "Slotermeer-Noordoost",
  ]

  const buurtenLijstString = [
    "Osdorper Binnenpolder",
    "De Eendracht",
    "Ruys de Beerenbrouckbuurt",
    "Eendrachtspark",
  ]

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
      "naam": "Slotermeer-West",
    },
    {
      "identificatie": "03630970000043",
      "naam": "Slotermeer-Noordoost",
    },
    {
      "identificatie": "03630970000044",
      "naam": "Slotermeer-Zuidoost",
    }
  ];

  const buurtenLijstGeuzenveld = [
    {
      "identificatie": "03630980000180",
      "naam": "Osdorper Binnenpolder",
    },
    {
      "identificatie": "03630980000181",
      "naam": "De Eendracht",
    },
    {
      "identificatie": "03630980000182",
      "naam": "Ruys de Beerenbrouckbuurt",
    },
    {
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

  const handleSelect = (item: string) => {
    console.log("Selected Item:", item);
  };

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
        onClick={handleButtonClick}>
        {`card open? ${cardIsOpen}`}
      </button>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle />
        <Dropdown.List>
          {wijkenLijstString.map((wijk: string, i: number) => (
            <Dropdown.Item key={i} item={wijk}></Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>

      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle />
        <Dropdown.List>
            <Dropdown.Item key={1} item={'1'}></Dropdown.Item>
            <Dropdown.Item key={2} item={'2'}></Dropdown.Item>
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