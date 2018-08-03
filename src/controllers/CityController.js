import {
  getAll,
  create,
  updateOrCreate,
  removeById,
} from '../services/CityService';


export const getCities = (req, res) => getAll()
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));

export const addCity = (req, res) => create(req.body)
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));

export const removeCity = (req, res) => removeById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));

export const updateOrCreateCity = (req, res) => {
  const city = req.body;
  const cityId = city._id;
  delete city._id;
  updateOrCreate(cityId, city)
    .then(data => res.status(200).json(data))
    .catch(e => res.status(500).json({ error: e.message }));
};
