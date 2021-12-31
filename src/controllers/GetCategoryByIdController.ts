import { Request, Response } from "express";
import { GetCategoryByIdService } from "../services/GetCategoryByIdService";

export class GetCategoryByIdController { 
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetCategoryByIdService();

    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(200).json(result);
  }
}