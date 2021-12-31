import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class GetVideoByIdService {
  async execute(id: string): Promise <Video | Error> { 
    const repo = getRepository(Video);

    const video = await repo.findOne(id, {
      relations: ["category"]
    });

    if(!video) { 
      return new Error("Video not found");
    }

    return video;
  }
}