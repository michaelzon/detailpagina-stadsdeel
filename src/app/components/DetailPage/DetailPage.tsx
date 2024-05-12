import styles from './DetailPage.module.css'
import { Buurt, Wijk } from '@/app/types/gebiedenTypes';
import { Stadsdeel } from './Stadsdeel/Stadsdeel';
import { Wijken } from './Wijken/Wijken';
import { Buurten } from './Buurten/Buurten';

interface DetailPageProps {
    wijken: Wijk[];
    selectedWijk: Wijk;
    buurten: Buurt[];
    buurtenIsLoading: boolean;
    stadsdeelCode: string;
    handleSelect: (wijk: Wijk) => void;
    buurtenError: string | null;
}

export const DetailPage: React.FC<DetailPageProps> = ({
    wijken,
    selectedWijk,
    buurten,
    buurtenIsLoading,
    stadsdeelCode,
    handleSelect,
    buurtenError
}) => {

    return (
        <main className={styles.main}>
            <Stadsdeel stadsdeelCode={stadsdeelCode} />
            <Wijken wijken={wijken} handleSelect={handleSelect} />
            <Buurten selectedWijk={selectedWijk} buurtenIsLoading={buurtenIsLoading} buurten={buurten} buurtenError={buurtenError} />
        </main>
    );
}