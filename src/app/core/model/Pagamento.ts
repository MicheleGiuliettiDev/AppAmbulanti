import { IPagamento } from 'src/app/Interfaces/IPagamento';

export class Pagamento implements IPagamento{
    data: Date;
    mercato: string;
    giornoMercato: string;
    autorizzazione: import("../../Interfaces/IAutorizzazione").IAutorizzazione;
    posteggio: number;
    metriQuadri: number;
    importo: number;
}
