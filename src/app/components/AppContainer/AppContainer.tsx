
'use client';

import { useEffect, useState } from "react";
import { getStadsdeelData } from "@/app/api/getStadsdeelData";
import { Wijk, Buurt } from "@/app/types/gebiedenTypes";
import { DetailPage } from "../DetailPage/DetailPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './AppContainer.module.css'
import { getBuurtenData } from "@/app/api/getBuurtenData";

interface AppContainerProps {
    stadsdeelData: any;
    wijkenData: any;
}

export const AppContainer: React.FC<AppContainerProps> = ({ stadsdeelData, wijkenData }) => {
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
    
    const handleSelect = (item: Wijk) => {
        setSelectedWijk(item);
    };

    useEffect(() => {
        async function fetchBuurten() {
            const buurtenData = await getBuurtenData(selectedWijk.identificatie);
            setBuurten(buurtenData);
            setBuurtenIsLoading(false);
        }
        setBuurtenIsLoading(true);
        fetchBuurten();
    }, [selectedWijk]);

    
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
