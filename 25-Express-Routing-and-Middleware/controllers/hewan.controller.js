
const hewan = [
  {id: 1, nama: 'Snowy', spesies: 'kucing'},
  {id: 2, nama: 'Blacki', spesies: 'anjing'},
  {id: 3, nama: 'Molly', spesies: 'kucing'},
  {id: 4, nama: 'Milo', spesies: 'kelinci'},
  {id: 5, nama: 'Rere', spesies: 'kucing'},
]

exports.getAllHewan = (req, res) => {
  try {
    res.status(200).json({
      messsage: "success get data",
      hewan: hewan
    })
  } catch (error) {
    res.status(500).send({
      messsage: error
    })
  }
}

exports.getHewanByID = (req, res) => {
  try {
    const hewanID = req.params.id
    const search = hewan.find(item => item.id === Number(hewanID))

    if(search) {
      res.status(200).json({
        messsage: "success get data",
        hewan: search
      })
    } else {
      res.status(404).json({
        message: `data with id ${hewanID} not found`
      })
    }
  } catch (error) {
    res.status(500).send( {messsage: error })
  }
}

exports.createNewHewan = (req, res) => {
  const body = req.body
  const newID = hewan[hewan.length - 1].id + 1
  
  const new_hewan = {
    id: newID,
    nama: body.nama,
    spesies: body.spesies
  }

  hewan.push(new_hewan)
  res.status(201).json({
    message: "success adding one pet",
    hewan: hewan
  })
}

exports.updateHewan = (req, res) => {
  const hewanID = req.params.id
  const body = req.body
  const index = hewan.findIndex(item => item.id === Number(hewanID))

  if(index !== -1) {
    hewan[index].nama = body.nama || hewan[index].nama
    hewan[index].spesies = body.spesies || hewan[index].spesies
  
    res.status(200).send({
      message: "success update data pet"
    })
  } else {
    res.status(404).send({ message: "data not found" })
  }

}

exports.deleteHewan = (req, res) => {
  const index = hewan.findIndex(item => item.id === Number(req.params.id))

  if(index !== -1) {
    hewan.splice(index, 1)

    res.status(200).json({
      message: "success delete data pet",
      hewan: hewan
    })
  } else {
    res.status(404).send({ message: "data not found" })
  }
}