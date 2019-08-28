import { IAutorizzazione } from './IAutorizzazione';
export interface IPagamento {
    data: Date;
    mercato: string;
    giornoMercato: string;
    autorizzazione: IAutorizzazione;
    posteggio: number;
    metriQuadri: number;
    importo: number;
}
