import { ResponseCharacterDto } from '../../dtos/character/ResponseCharacter'
import CharacterRepository from '../../repositories/CharacterRepository'

export default class ListCharacter {
  characterRepository: CharacterRepository

  constructor(characterRepository: CharacterRepository) {
    this.characterRepository = characterRepository
  }

  async execute(id: string): Promise<ResponseCharacterDto> {
    const character = await this.characterRepository.getCharacter(id)

    return character
  }
}
