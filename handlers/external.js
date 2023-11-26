import { Beer, Food } from '../models'

// export to external api
export const exportMenuData = async (req, res, next) => {
  // console.log("external request!")
  try {
    const allbeer = await Beer.findAll()
    const allfood = await Food.findAll()
    res.locals.wholeMenu = [allbeer, allfood]

    next()
  } catch (err) {
    console.log(err)
  }
}
