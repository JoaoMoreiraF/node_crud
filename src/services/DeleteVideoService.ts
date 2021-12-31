import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class DeleteVideoService {
  async execute(id: string) {
    const repo = getRepository(Video);

    const videoExists = await repo.findOne(id);

    if(!videoExists) {
      return new Error("Video does not exists!");
    }

    await repo.delete(id); 
  }
}