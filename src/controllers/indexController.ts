import { Request, Response } from "express";

class IndexController {
  index(req: Request, res: Response) {
    res.render("index", { title: "Welcome to books App" });
  }
}

export const indexController = new IndexController();
