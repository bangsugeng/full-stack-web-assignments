const express = require("express")
const TODO_MODEL = require("./models").Todo

const app = express()
const PORT = process.env.PORT || '8080';

app.use(express.json())

app.get("/todos", async (req, res) => {
  try{
    const todos = await TODO_MODEL.findAll();
    res.status(200).json(todos)
  } catch(err){
    res.status(500).json({
      message: err.message || "internal server error"
    })
  }
});
  
app.get("/todo/:id", (req, res) => {
  const todoID = req.params.id;
  
  TODO_MODEL.findOne({
    where: {
      id: todoID,
    },
  })
  .then((result) => {
    {
      res.send({
        message: "OK",
        data: result,
      });
    }
  })
  .catch((error) => {
    res.send({
      message: error.message,
    });
  });
});

app.post("/todos", async (req, res)=>{
  try{
    const { title, description, startTime } = req.body
    const newTodoData = {
        title: title,
        description: description,
        startTime: startTime,
        status: 'false',
    }

    const newTodo = await TODO_MODEL.create(newTodoData)

    res.status(201).json({
      message: "new todo created",
      todo: newTodo
    })
        
  } catch(err){
    res.status(500).send({
      message: err.message
    })
  }
})

app.patch("/todos/:todoId", async function (req, res) {
  try{
    const { todoId } = req.params;
    const { title, description, startTime, status } = req.body;

    const updateTodoData = {
      title : title,
      description : description,
      startTime : startTime,
      status : status
    }

    const updatedTodo = await TODO_MODEL.update(updateTodoData, {
      where: {
        id: todoId
      }
    })

    res.status(200).json({
      message: "update todo success"
    })
  } catch (err) {
    res.status(500).json({
      message: error.message || "internal server error"
    })
  }
})

app.delete("/todos/:id", async (req, res) => {
  try {
    const todoID = req.params.id;

    await TODO_MODEL.destroy({
      where: {
        id: todoID,
      },
    });
    res.status(200).json({
      message: "Deleted Success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(process.env.PORT || 8080, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});