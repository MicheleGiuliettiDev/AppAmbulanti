import { IAutorizzazione } from 'src/app/Interfaces/IAutorizzazione';

export class Autorizzazione implements IAutorizzazione {
    numero: string;
    comune: string;
    stato: string;
    autorizzazioneOriginaria: string;
    comuneAutorizzazioneOriginaria: string;
    autorizzazionePrecedente: string;
    ruoloAutorizzazione: string;

}
