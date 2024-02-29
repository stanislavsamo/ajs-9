import Character, { CharacterTypes } from './Characters';

export default class Magician extends Character {
  constructor(name) {
    super(name, CharacterTypes.MAGICIAN);
  }
}
