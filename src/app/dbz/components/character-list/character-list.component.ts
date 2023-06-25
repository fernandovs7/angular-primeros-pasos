import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  @Output()
  deleteCharacter: EventEmitter<string> = new EventEmitter;

  @Input()
  characterList!: Character[];

  onDeleteCharacter(index: string): void {
    this.deleteCharacter.emit(index);
  }

}
