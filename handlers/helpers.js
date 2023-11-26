const updateRowLoop = (body, row, name) => {
  Object.keys(body).forEach((column) => {
    if (column !== 'id') {
      console.log(`update${name}, updating column:`, column, 'with value:', body[column])
      row[column] = body[column]
    }
  })
}

module.exports = { updateRowLoop }
