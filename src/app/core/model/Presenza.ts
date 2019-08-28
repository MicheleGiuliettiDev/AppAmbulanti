import { IPresenza } from 'src/app/Interfaces/IPresenza';

export class Presenza implements IPresenza {
    data: Date;
    mercato: string;
    giorno: string;
    presenzaMaturata: boolean;
    piazzato: boolean;
    posteggio: number;
    superficie: string;
    pagato: boolean;
    importoPagato: number;

}
