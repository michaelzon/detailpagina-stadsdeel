import styles from './DetailPage.module.css'
import { Buurt, StadsdeelType, Wijk } from '@/app/types/gebiedenTypes';
import { Stadsdeel } from './Stadsdeel/Stadsdeel';
import { Wijken } from './Wijken/Wijken';
import { Buurten } from './Buurten/Buurten';

interface DetailPageProps {
    wijkenData: Wijk[];
    selectedWijk: Wijk;
    buurten: Buurt[];
    buurtenIsLoading: boolean;
    stadsdeelData: StadsdeelType;
    handleSelect: (wijk: Wijk) => void;
    buurtenError: string | null;
}

export const DetailPage: React.FC<DetailPageProps> = ({
    wijkenData,
    selectedWijk,
    buurten,
    buurtenIsLoading,
    stadsdeelData,
    handleSelect,
    buurtenError
}) => {

    return (
        <main className={styles.main}>
            <Stadsdeel
                stadsdeelData={stadsdeelData}
            />
            <Wijken
                wijkenData={wijkenData}
                handleSelect={handleSelect}
            />
            <Buurten
                selectedWijk={selectedWijk}
                buurtenIsLoading={buurtenIsLoading}
                buurten={buurten}
                buurtenError={buurtenError}
            />
        </main>
    );
}