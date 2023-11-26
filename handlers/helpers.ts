import { Model } from "sequelize"

export const updateRowLoop = (body: Record<string, unknown>, row: Model<Record<string, unknown>, unknown>, name: string) => {
  Object.keys(body).forEach((column) => {
    if (column !== 'id') {
      console.log(`update${name}, updating column:`, column, 'with value:', body[column])
      // @ts-ignore
      row[column] = body[column]
    }
  })
}
