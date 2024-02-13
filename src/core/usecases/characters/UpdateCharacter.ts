import { UpdateCharacterDto } from '../../dtos/character/UpdateCharacter'
import { CharacterEntity } from '../../entities/Character'
import CharacterRepository from '../../repositories/CharacterRepository'

export default class UpdateCharacter {
  characterRepository: CharacterRepository

  constructor(characterRepository: CharacterRepository) {
    this.characterRepository = characterRepository
  }

  async execute(id: string, dto: UpdateCharacterDto) {
    const characterFound = await this.characterRepository.getCharacter(id)
    const Character = new CharacterEntity({
      ...characterFound,
    })
    Character.update(dto)
    const character = await this.characterRepository.updateCharacter(
      id,
      Character
    )

    return character
  }
}
