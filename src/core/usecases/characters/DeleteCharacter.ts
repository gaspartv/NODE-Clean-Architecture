import { ResponseCharacterDto } from '../../dtos/character/ResponseCharacter'
import CharacterRepository from '../../repositories/CharacterRepository'

export default class DeleteCharacter {
  characterRepository: CharacterRepository

  constructor(characterRepository: CharacterRepository) {
    this.characterRepository = characterRepository
  }

  async execute(id: string): Promise<ResponseCharacterDto> {
    const character = await this.characterRepository.deleteCharacter(id)

    return character
  }
}
