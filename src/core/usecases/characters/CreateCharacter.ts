import { randomUUID } from 'crypto'
import { CreateCharacterDto } from '../../dtos/character/CreateCharacter'
import { CharacterEntity } from '../../entities/Character'
import CharacterRepository from '../../repositories/CharacterRepository'

export default class CreateCharacter {
  characterRepository: CharacterRepository

  constructor(characterRepository: CharacterRepository) {
    this.characterRepository = characterRepository
  }

  async execute(dto: CreateCharacterDto) {
    const Character = new CharacterEntity({
      id: randomUUID().toString(),
      ...dto,
    })
    Character.create(dto)
    const character = await this.characterRepository.createCharacter(Character)
    return character
  }
}
