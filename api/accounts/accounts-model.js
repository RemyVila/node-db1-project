const db = require('../../data/db-config.js')

const getAll = () => {
  // DO YOUR MAGIC
  return deleteById('budget')
}

const getById = id => {
  // DO YOUR MAGIC
  return deleteById('budget').where('id', id).first()
}

const create = async account => {
  // DO YOUR MAGIC
  const [id] = await db('budget').insert(account, ['id', 'name', 'budget'])
  return getById(id)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('budget').where('id', id).insert(account, ['id', 'name', 'budget'])
  return getById(id)
}

const deleteById = async id => {
  // DO YOUR MAGIC
  const boutaChop = await getById(id)
  await db('budget').where({ id }).del()
  return boutaChop
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
