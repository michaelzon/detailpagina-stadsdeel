
'use client';

import { useEffect, useState } from "react";
import { getStadsdeelData } from "@/app/api/getStadsdeelData";
import { Wijk, Buurt } from "@/app/types/gebiedenTypes";
import { DetailPage } from "../DetailPage/DetailPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './AppContainer.module.css'

interface AppContainerProps {
    stadsdeelData: any;
    wijkenData: any;
}

export const AppContainer: React.FC<AppContainerProps> = ({ stadsdeelData, wijkenData }) => {
    console.log(wijkenData);
    const [wijken, setWijken] = useState<Wijk[]>([]);
    const [selectedWijk, setSelectedWijk] = useState<Wijk>({ identificatie: '', naam: '' });
    const [buurten, setBuurten] = useState<Buurt[]>([]);
    const [wijkenIsLoading, setWijkenIsLoading] = useState<boolean>(false);
    const [buurtenIsLoading, setBuurtenIsLoading] = useState<boolean>(false);
    const [stadsdeelCode, setStadsdeelCode] = useState<string>('');
    
    useEffect(() => {
        setStadsdeelCode(stadsdeelData.code);
        setWijken(wijkenData);
    }, []);
    
    // useEffect(() => {
    //   const fetchStadsdeel = async () => {
    //     setWijkenIsLoading(true);
    //     try {
    //       const res = await fetch('https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?naam=Nieuw-West');
    //       const data = await res.json();
    //       if (data && data['_embedded'] && data['_embedded']['stadsdelen'][0]) {
    //         const code = data['_embedded']['stadsdelen'][0]['code'];
    //         setStadsdeelCode(code);
    //         const identificatie = data['_embedded']['stadsdelen'][0]['identificatie'];
    //         const wijkenResponse = await fetch(`https://api.data.amsterdam.nl/v1/gebieden/wijken/?ligtInStadsdeel.identificatie=${identificatie}`);
    //         const wijkenData = await wijkenResponse.json();
    //         setWijken(wijkenData['_embedded'].wijken);
    //       }
    //     } catch (error) {
    //       console.error('Error in fetching data:', error);
    //     }
    //     setWijkenIsLoading(false);
    //   };
    //   fetchStadsdeel();
    // }, []);

    // useEffect(() => {
    //   const fetchBuurten = async () => {
    //     if (selectedWijk.identificatie) {
    //       setBuurtenIsLoading(true);
    //       try {
    //         const res = await fetch(`https://api.data.amsterdam.nl/v1/gebieden/buurten/?ligtInWijk.identificatie=${selectedWijk.identificatie}`);
    //         const data = await res.json();
    //         setBuurten(data['_embedded'].buurten);
    //       } catch (error) {
    //         console.error('Error in fetching data:', error);
    //       }
    //       setBuurtenIsLoading(false);
    //     }
    //   };

    //   fetchBuurten();
    // }, [selectedWijk]);

    const handleSelect = (item: Wijk) => {
        setSelectedWijk(item);
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
