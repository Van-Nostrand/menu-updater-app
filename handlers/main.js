import { Beer, Food } from '../models'

// view all food and beer
export const getWholeMenu = async (req, res, next) => {
  try {
    const allbeer = await Beer.findAll()
    const allfood = await Food.findAll()
    res.locals.wholeMenu = [...allbeer, ...allfood]
    res.locals.created = null //? necessary?

    next()

  } catch (err) {
    return next(err)
  }
}

// export to external api
export const exportMenuData = async (req, res, next) => {
  try {
    const allbeer = await Beer.findAll()
    const allfood = await Food.findAll()
    res.send({ allbeer, allfood })
  } catch (err) {
    console.log(err)
  }

}

