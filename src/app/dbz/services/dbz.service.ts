import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 6000
    }
  ];

  
  onNewCharacter(char: Character): void {
  const newCharacter: Character = { id: uuid(), ...char };
  this.characters.push(newCharacter);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(char => char.id != id);
  }

}
