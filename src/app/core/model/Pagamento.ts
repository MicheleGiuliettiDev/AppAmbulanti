import { IPagamento } from 'src/app/Interfaces/IPagamento';
import { Autorizzazione } from './Autorizzazione';

export class Pagamento implements IPagamento{
    data: Date;
    mercato: string;
    giornoMercato: string;
    autorizzazione: Autorizzazione;
    posteggio: number;
    metriQuadri: number;
    importo: number;
}
