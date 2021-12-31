import { getRepository } from "typeorm"
import { Category } from "../entities/Category";
import { Video } from "../entities/Video"

type VideoUpdateRequest = {
  id: string;
  name: string;
  description: string;
  category_id: string;
  duration: number;
}

export class UpdateVideoService {
  async execute({id, name, description, duration, category_id} : VideoUpdateRequest) {
    const videoRepo = getRepository(Video);
    const categoryRepo = getRepository(Category);
    
    const category = await categoryRepo.findOne(category_id);
    const video = await videoRepo.findOne(id);

    if(!category) {
      return new Error("Choosen category does not exists!");
    }

    if(!video) {
      return new Error("Video does not exists!");
    }

    video.name = name ? name : video.name;
    video.description = description ? description : video.description;
    video.duration = duration ? duration : video.duration;
    video.category_id = category_id ? category_id : video.category_id;

    await videoRepo.save(video);

    return video;

  }
}