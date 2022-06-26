import express, { Request, Response } from "express";
import { Todo } from "../models/user-models";

const router = express.Router();

// add data to db
router.post("/add", async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const dataItem = Todo.set({ title, description });

  await dataItem.save();
  return res.status(200).json({
    data: dataItem,
  });
});

// retrive data from the db
router.get("/", async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const dataItem = await Todo.find({});
    res.status(200).json({
      data: dataItem,
    });
  } catch (e) {
    console.log(e);
  }
});

// delete data from the db
router.delete("/delete", async (req: Request, res: Response) => {
  const filter = {
    title: req.body.title
  };
  const dataItem = await Todo.deleteOne(filter)
    .then((data) =>
      res.json({
        data: data,
      })
    )
    .catch((error) => {
      return res.send(error);
    });
    console.log(dataItem);
});


// update data from the db
router.put("/update", async (req: Request, res: Response) => {
  const filter = {
    title: req.body.title
  };
  const updatedData = {
    description: req.body.description 
  };
  const dataItem = await Todo.updateOne(filter,updatedData,{
    new: true
  })
    .then((data) =>
      res.json({
        data: data,
      })
    )
    .catch((error) => {
      return res.send(error);
    });
    console.log(dataItem);
});


// router.get("/", (req: Request, res: Response) => {
//   res.json({
//     msg: "API RUNNING on /",
//   });
// });
// router.get("/about", (req: Request, res: Response) => {
//   res.json({
//     msg: "API RUNNING on /about",
//   });
// });
// router.post("/profile", (req: Request, res: Response) => {
//   const {name, email} = req.body
//   console.log(name);
//   console.log(email);

//   res.json({
//     log: "API RUNNING on /profile",
//     user: {
//       name,
//       email
//     }
//   });
// });

export { router };
