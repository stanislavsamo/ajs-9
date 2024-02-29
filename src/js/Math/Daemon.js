import Character, { CharacterTypes } from './Characters';

export default class Daemon extends Character {
  constructor(name) {
    super(name, CharacterTypes.DAEMON);
  }
}
