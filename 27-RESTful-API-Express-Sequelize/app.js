const express = require('express')
const { Sequelize } = require('sequelize')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

const sequlize = new Sequelize("hewans", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

sequlize
    .authenticate()
    .then(() => {
        console.log("connection has been established successfully");
    })
    .then(() => {
        Hewan.sync().then(() => console.log("table Hewan created"));
    })
    .catch((err) => {
        console.log("unable to connect", err);
    });

    // table Hewan models
const Hewan = sequlize.define(
    "hewans", {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: Sequelize.DataTypes.STRING,
        umur: Sequelize.DataTypes.INTEGER,
        nameSpesies: Sequelize.DataTypes.STRING,
    }, {
        createdAt: false,
        updatedAt: false,
    }
);

// Check connection
app.get("/", (req, res) => {
    res.send("server");
});

// Get all hewan from database
app.get("/hewan", (req, res) => {
    Hewan.findAll()
        .then((result) => {
            res.json({
                message: "OK",
                data: result ? result : `No Data = ${result}`,
            });
        })
        .catch((error) => res.send(error));
});

// Get animal by id
app.get("/hewan/:id", (req, res) => {
    Hewan.findOne({
        where: {
            id: req.params.id,
        },
    }).then((result) => {
        res.json({
            message: "OK",
            data: result ? result : `No Data = ${result}`,
        });
    });
});

// Add new animal
app.post("/hewan", (req, res) => {
    const newHewan = {
        name: req.body["name"],
        umur: req.body["umur"],
        nameSpesies: req.body["nameSpesies"],
    };
    Hewan.create(newHewan)
        .then((result) => {
            res.json({
                message: "OK",
                data: result ? result : `No Data = ${result}`,
            });
        })
        .catch(error => console.log(error))
})

// Update animal by id
app.patch("/hewan/:id", (req, res) => {
    const updateHewan = {
        name: req.body["name"],
        umur: req.body["umur"],
        nameSpesies: req.body["nameSpesies"],
    };

    Hewan.update(updateHewan, {
            where: {
                id: req.params.id,
            },
        }).then((result) => {
            res.json({
                message: "OK",
                data: result ? updateHewan : `No Data = ${result}`,
            });
        })
.catch(error => console.log(error))

})

// Delete animal by id
app.delete("/hewan/:id", (req, res) => {
    Hewan.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.json({
                message: "OK",
                data: result ? `${result} Deleted` : `No Data = ${result}`,
            });
        })
        .catch(error => console.log(error))
})

app.listen(port, () => {
    console.log('server berjalan')
})