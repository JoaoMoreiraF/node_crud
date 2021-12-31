import { getRepository } from "typeorm";
import { Video } from "../entities/Video";
import { Category } from "../entities/Category";

type VideoRequest = {
  name: string;
  description: string;
  category_id: string;
  duration: number;
}

export class CreateVideoService {
  async execute({name, description, category_id, duration}: VideoRequest) : Promise<Video | Error> {
    const videosRepo = getRepository(Video);
    const categoriesRepo = getRepository(Category);

    const categoryExists = await categoriesRepo.findOne(category_id);
    const videoAlreadyExists = await videosRepo.findOne({name});

    if(!categoryExists) {
      return new Error("Choosen category does not exists!");
    }

    if(videoAlreadyExists) {
      return new Error("Video already exists!");
    }

    try {
      const video = videosRepo.create({ name, description, category_id, duration });

      await videosRepo.save(video);

      return video;
    } catch (err) {
      console.log(err)
    }

  }
}