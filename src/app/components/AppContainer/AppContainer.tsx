'use client';

import { useEffect, useState } from "react";
import { Wijk, Buurt, StadsdeelType } from "@/app/types/gebiedenTypes";
import { DetailPage } from "../DetailPage/DetailPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './AppContainer.module.css'
import { getBuurtenData } from "@/app/api/getBuurtenData";

interface AppContainerProps {
    stadsdeelData: StadsdeelType;
    wijkenData: Wijk[];
}

export const AppContainer: React.FC<AppContainerProps> = ({ stadsdeelData, wijkenData }) => {
    const [stadsdeel, setStadsdeel] = useState<StadsdeelType>({ identificatie: '', naam: '', code: '' });
    const [wijken, setWijken] = useState<Wijk[]>([]);
    const [selectedWijk, setSelectedWijk] = useState<Wijk>({ identificatie: '', naam: '' });
    const [buurten, setBuurten] = useState<Buurt[]>([]);
    const [buurtenIsLoading, setBuurtenIsLoading] = useState<boolean>(false);
    const [stadsdeelCode, setStadsdeelCode] = useState<string>('');
    const [buurtenError, setBuurtenError] = useState<string | null>(null);

    useEffect(() => {
        setStadsdeel(stadsdeelData);
        setWijken(wijkenData);
    }, [wijkenData]);

    const handleSelect = (item: Wijk) => {
        setSelectedWijk(item);
    };

    useEffect(() => {
        async function fetchBuurten() {
            setBuurtenIsLoading(true);

            // only fetch new buurten when wijk is fully loaded
            if (!selectedWijk.identificatie) {
                return;
            }
            try {
                const buurtenData = await getBuurtenData(selectedWijk.identificatie);
                // setBuurten(prevBuurten => [...prevBuurten, buurtenData])
                setBuurten(buurtenData);
            } catch (error: any) {
                setBuurtenError("Niet gelukt om buurten op te halen. Probeer het later nog een keer.");
                console.error("Ophalen van buurten mislukt", error.message)
            }
            setBuurtenIsLoading(false);
        }
        fetchBuurten();
    }, [selectedWijk]);

    return (
        <div className={styles.container}>
            <Header />
            <DetailPage
                stadsdeelData={stadsdeel}
                wijkenData={wijken}
                selectedWijk={selectedWijk}
                buurten={buurten}
                buurtenIsLoading={buurtenIsLoading}
                handleSelect={handleSelect}
                buurtenError={buurtenError}
            />
            <Footer />
        </div>
    );
}
