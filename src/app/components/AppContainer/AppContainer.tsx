'use client';

import { useEffect, useState } from "react";
import { Wijk, Buurt, StadsdeelType } from "@/app/types/gebiedenTypes";
import { DetailPage } from "../DetailPage/DetailPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './AppContainer.module.css'
import { getBuurtenData } from "@/app/api/getBuurtenData";
import { getStadsdeelData } from "@/app/api/getStadsdeelData";
import { getWijkenData } from "@/app/api/getWijkenData";

interface AppContainerProps {
    stadsdelenData: any;
    // stadsdeelData: StadsdeelType;
    // wijkenData: Wijk[];
}

export const AppContainer: React.FC<AppContainerProps> = ({ stadsdelenData, 
    // stadsdeelData,
    //  wijkenData
     }) => {
    const [selectedStadsdeel, setSelectedStadsdeel] = useState<StadsdeelType>({ naam: '', code: '', identificatie: '' })
    const [wijken, setWijken] = useState<Wijk[]>([]);
    const [wijkenIsLoading, setWijkenIsLoading] = useState<boolean>(false);
    const [wijkenError, setWijkenError] = useState<string>("");
    const [selectedWijk, setSelectedWijk] = useState<Wijk>({ identificatie: '', naam: '' });
    const [buurten, setBuurten] = useState<Buurt[]>([]);
    const [buurtenIsLoading, setBuurtenIsLoading] = useState<boolean>(false);
    const [buurtenError, setBuurtenError] = useState<string>("");

    // useEffect(() => {
    //     setSelectedStadsdeel(stadsdeelData)
    //     setWijken(wijkenData);
    // }, [stadsdeelData.code, wijkenData]);

    const handleSelectStadsdeel = (item: StadsdeelType) => {
        setSelectedStadsdeel(item)
    }

    const handleSelectWijken = (item: Wijk) => {
        setSelectedWijk(item);
    };

    console.log(selectedStadsdeel);

    useEffect(() => {
        async function fetchWijken() {
            setWijkenIsLoading(true);
            try {
                console.log('hupsakee');
                const wijkenData = await getWijkenData(selectedStadsdeel.identificatie);
                setWijken(wijkenData);
            } catch (error: any) {
                setWijkenError("Niet gelukt om wijken op te halen. Probeer het later nog een keer.");
                console.error("Ophalen van buurten mislukt", error.message)
            }
            setWijkenIsLoading(false);
        }
        fetchWijken();
    }, [selectedStadsdeel]);

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
    }, [selectedWijk]);

    return (
        <div className={styles.container}>
            <Header />
            <DetailPage
                selectedStadsdeel={selectedStadsdeel}
                stadsdelen={stadsdelenData}
                wijken={wijken}
                selectedWijk={selectedWijk}
                wijkenIsLoading={wijkenIsLoading}
                buurten={buurten}
                buurtenIsLoading={buurtenIsLoading}
                handelSelectStadsdeel={handleSelectStadsdeel}
                handleSelectWijken={handleSelectWijken}
                buurtenError={buurtenError}
            />
            <Footer />
        </div>
    );
}
