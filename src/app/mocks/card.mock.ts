import { Card } from '../models/card.model';

export const mockCards: { [key: string]: Card } = {
  '1': { id: '1', name: 'Visa', number: '4111111111111111' },
  '2': { id: '2', name: 'MasterCard', number: '5500000000000004' },
  '3': { id: '3', name: 'American Express', number: '340000000000009' },
};



// Tipo di Dato Specifico in TypeScript: La sintassi { [key: string]: Card } indica un tipo di dato in TypeScript che rappresenta un oggetto dove le chiavi sono stringhe e i valori sono di tipo Card.

// Indice di Tipo string: Questo oggetto può avere chiavi che sono stringhe. Queste chiavi sono utilizzate per identificare e accedere ai valori dell'oggetto.

// Valori di Tipo Card: Ogni valore associato a una chiave nel suddetto oggetto deve essere di tipo Card. Il tipo Card è presumibilmente un'interfaccia o una classe definita altrove nel codice che ha specifiche proprietà come id, name, e number.

// Esempio di mockCards:

// L'oggetto mockCards è un esempio di uso di questo tipo di oggetto.
// Contiene tre entrate, dove ogni chiave è un identificatore unico di una carta (ad esempio, '1', '2', '3').
// Ogni chiave è associata a un valore che è un oggetto di tipo Card, contenente le proprietà id, name, e number.

