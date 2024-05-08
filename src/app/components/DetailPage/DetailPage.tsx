import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './DetailPage.module.css'
import Card from '../Card/Card';

interface Wijk {
    identificatie: string,
    naam: string,
}

interface Buurt {
    identificatie: string,
    naam: string,
}

export default function DetailPage() {
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
                    console.log(data);
                    console.log(code)
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
        <main className={styles.main}>
            <div className={styles.description}>
                <div className={styles.wrapper}>
                    <h5> Stadsdeel </h5>
                    <h1> Nieuw-West</h1>
                </div>
                <div className={styles.codeContainer}>
                    <h6>Code</h6>
                    {stadsdeelCode && <span className={styles.code}>{stadsdeelCode}</span>}
                </div>
            </div>
            <div className={styles.interactiveSection}>
                <h3> Wijken </h3>
                <Dropdown onSelect={handleSelect} items={wijken}>
                    <Dropdown.Toggle label={"wijk"} />
                    <Dropdown.List>
                        {wijkenIsLoading ? <p> wijken are loading... </p> :
                            wijken.map((wijk: Wijk, i: number) => (
                                <Dropdown.Item key={i} index={i} item={wijk}></Dropdown.Item>
                            ))}
                    </Dropdown.List>
                </Dropdown>
                <h4> Buurten </h4>
                <ul className={styles.list}>
                    {buurtenIsLoading ? <p> buurten are loading... </p> :
                        buurten.map((buurt: Buurt, i: number) => (
                            <li className={styles.item} key={i}>{buurt.naam}</li>
                        ))}
                </ul>
            </div>
            <Card isOpen={true}> 
            <Card.Title title='henk'></Card.Title>
            <Card.Description description='vlees'></Card.Description>
            </Card>
        </main>
    );
}