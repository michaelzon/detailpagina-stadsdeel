import styles from './DetailPage.module.css'
import { Buurt, StadsdeelType, Wijk } from '@/app/types/gebiedenTypes';
import { Stadsdeel } from './Stadsdeel/Stadsdeel';
import { Wijken } from './Wijken/Wijken';
import { Buurten } from './Buurten/Buurten';

interface DetailPageProps {
    selectedStadsdeel: StadsdeelType;
    stadsdelen: StadsdeelType[];
    wijken: Wijk[];
    selectedWijk: Wijk;
    wijkenIsLoading: boolean;
    buurten: Buurt[];
    buurtenIsLoading: boolean;
    handelSelectStadsdeel: (stadsdeel: StadsdeelType) => void;
    handleSelectWijken: (wijk: Wijk) => void;
    buurtenError: string | null;
}

export const DetailPage: React.FC<DetailPageProps> = ({
    selectedStadsdeel,
    stadsdelen,
    wijken,
    selectedWijk,
    wijkenIsLoading,
    buurten,
    buurtenIsLoading,
    handelSelectStadsdeel,
    handleSelectWijken,
    buurtenError
}) => {

    return (
        <main className={styles.main}>
            <Stadsdeel selectedStadsdeel={selectedStadsdeel} handleSelectStadsdeel={handelSelectStadsdeel} stadsdelen={stadsdelen} />
            <Wijken wijken={wijken} handleSelectWijken={handleSelectWijken} wijkenIsLoading={wijkenIsLoading} />
            <Buurten selectedWijk={selectedWijk} buurtenIsLoading={buurtenIsLoading} buurten={buurten} buurtenError={buurtenError} />
        </main>
    );
}