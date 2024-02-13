import { ResponseCharacterDto } from '../dtos/character/ResponseCharacter'
import { CharacterEntity } from '../entities/Character'

export default interface CharacterRepository {
  createCharacter(Entity: CharacterEntity): Promise<ResponseCharacterDto>
  getCharacter(id: string): Promise<ResponseCharacterDto>
  updateCharacter(
    id: string,
    Entity: CharacterEntity
  ): Promise<ResponseCharacterDto>
  deleteCharacter(id: string): Promise<ResponseCharacterDto>
  listCharacters(): Promise<ResponseCharacterDto[]>
}
