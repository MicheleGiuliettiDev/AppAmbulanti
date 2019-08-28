import { IGraduatoria } from 'src/app/Interfaces/IGraduatoria';

export class Graduatoria implements IGraduatoria {
    numeroAutorizzazione: number;
    comuneRilascio: string;
    autorizzazioneOriginaria: number;
    protocollo: string;
    autorizzazionePrecedente: number;
    mercato: string;
    giornoSettimana: string;
    numeroPresenze: number;
    dataRiferimentoGraduatoria: Date;
}
