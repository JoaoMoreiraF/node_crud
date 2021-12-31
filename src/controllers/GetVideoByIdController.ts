import { Request, Response } from "express";
import { GetVideoByIdService } from "../services/GetVideoByIdService";

export class GetVideoByIdController { 
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetVideoByIdService();

    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}