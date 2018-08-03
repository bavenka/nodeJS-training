import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  country: {
    type: String,
    required: true
  },
  capital: {
    type: Boolean,
    default: false,
  },
  location: {
    lat: {
      type: Number,
      min: -90,
      max: 90,
      required: true
    },
    long: {
      type: Number,
      min: -180,
      max: 180,
      required: true
    }
  },
  lastModifiedDate: {
    type: Date,
    default: Date.now,
  }
});

const City = mongoose.model('City', citySchema);

export default City;
