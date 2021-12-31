import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { DeleteVideoController } from "./controllers/DeleteVideoController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { GetCategoryByIdController } from "./controllers/GetCategoryByIdController";
import { GetVideoByIdController } from "./controllers/GetVideoByIdController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { UpdateVideoController } from "./controllers/UpdateVideoController";

const routes = Router();

const createCategoryController = new CreateCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const deleteCategoryController = new DeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();
const getCategoryByIdController = new GetCategoryByIdController();

routes.post("/categories", createCategoryController.handle);
routes.get("/categories", getAllCategoriesController.handle);
routes.delete("/categories/:id", deleteCategoryController.handle);
routes.put("/categories/:id", updateCategoryController.handle);
routes.get("/categories/:id", getCategoryByIdController.handle);


const createVideoController = new CreateVideoController();
const getAllVideosController = new GetAllVideosController();
const updateVideoController = new UpdateVideoController();
const deleteVideoController = new DeleteVideoController();
const getVideoByIdController = new GetVideoByIdController();

routes.post("/videos", createVideoController.handle);
routes.get("/videos", getAllVideosController.handle);
routes.put("/videos/:id", updateVideoController.handle);
routes.delete("/videos/:id", deleteVideoController.handle);
routes.get("/videos/:id", getVideoByIdController.handle);

export { routes }