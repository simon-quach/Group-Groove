import mongoose from 'mongoose';

// SCHEMA FOR MONGODB
const Group = new mongoose.Schema({
  group_id: { type: Number, required: true },
  songs_list: [{
    id: Number,
    trackName: String,
    albumCover: String,
    artistName: String,
    upvotes: Number
  }],
});

const GroupSchema = mongoose.model('Group', Group);

export default GroupSchema;