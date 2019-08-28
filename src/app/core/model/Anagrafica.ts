import { IAnagrafica } from 'src/app/Interfaces/IAnagrafica';

export class Anagrafica implements IAnagrafica {
    cf: string;
    nome: string;
    cognome: string;
    denominazione: string;
    email: string;
    telefono?: string;

}
