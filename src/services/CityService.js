import City from '../models/City';

export const getAll = () => City.find();

export const create = (city) => new City(city).save();

export const removeById = (id) => City.findOneAndRemove(id);

export const updateOrCreate = (id, city) => City.update({ _id: id }, city, { upsert: true });


