
'use client';

import { useEffect, useState } from "react";
import { Wijk, Buurt, Stadsdeel } from "@/app/types/gebiedenTypes";
import { DetailPage } from "../DetailPage/DetailPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './AppContainer.module.css'
import { getBuurtenData } from "@/app/api/getBuurtenData";

interface AppContainerProps {
    stadsdeelData: Stadsdeel;
    wijkenData: Wijk[];
}

export const AppContainer: React.FC<AppContainerProps> = ({ stadsdeelData, wijkenData }) => {
    const [wijken, setWijken] = useState<Wijk[]>([]);
    const [selectedWijk, setSelectedWijk] = useState<Wijk>({ identificatie: '', naam: '' });
    const [buurten, setBuurten] = useState<Buurt[]>([]);
    const [wijkenIsLoading, setWijkenIsLoading] = useState<boolean>(false);
    const [buurtenIsLoading, setBuurtenIsLoading] = useState<boolean>(false);
    const [stadsdeelCode, setStadsdeelCode] = useState<string>('');
    const [buurtenError, setBuurtenError] = useState<string | null>(null);

    // Warning: React Hook useEffect has missing dependencies: 'stadsdeelData.code' and 'wijkenData'. Either include them or remove the dependency array. If 'setStadsdeelCode' needs the current value of 'stadsdeelData.code', you can also switch to useReducer instead of useState and read 'stadsdeelData.code' in the reducer.  react-hooks/exhaustive-deps
    useEffect(() => {
        setStadsdeelCode(stadsdeelData.code);
        setWijken(wijkenData);
    }, [stadsdeelData.code, wijkenData]); 

    const handleSelect = (item: Wijk) => {
        setSelectedWijk(item);
    };

    useEffect(() => {
        async function fetchBuurten() {
            setBuurtenIsLoading(true);
            try {
                const buurtenData = await getBuurtenData(selectedWijk.identificatie);
                setBuurten(buurtenData);
            } catch (error: any) {
                setBuurtenError("Niet gelukt om buurten op te halen. Probeer het later nog een keer.");
                console.error("Ophalen van buurten mislukt", error.message)
            }
            setBuurtenIsLoading(false);
        }
        fetchBuurten();
    }, [selectedWijk, ]);

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
                buurtenError={buurtenError}
            />
            <Footer />
        </div>
    );
}
