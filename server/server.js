import express from 'express';
import cors from 'cors';

import connectDB from './mongodb/connect.js'
import Group from './mongodb/models/group.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.post('/add-song', async (req, res) => {
  const { trackId, trackName, albumCover, artistName, groupCode} = req.body;
  const findExistingSong = await Group.findOne({
    group_id: groupCode,
    songs_list: {id: trackId}
  });
  
  if (findExistingSong === null){
    const newSong = await Group.findOne({
      group_id: groupCode
    })
    newSong.songs_list.push({
      trackid: trackId,
      trackName: trackName,
      albumCover: albumCover,
      artistName: artistName,
      upvotes: 0
    })
    newSong.save();
    console.log(newSong.songs_list)
  }
})

app.post('/add-group', async (req, res) => {
  try {
    const groupCode = req.body.groupCode;

    const newGroup = await Group.create({
      group_id: groupCode,
      songs_list: []
    })
  } catch(err) {
    res.status(500).json({ success: false, message: err })
  }
  
})

app.get('/:id', async (req, res) => {
  try {
    const groupId = req.params.id;
    const group = await Group.findOne({
      group_id: groupId
    });
    res.json({data: group});
  } catch(err) {
    res.status(500).json({ success: false , message: err })
  }
})

app.get('/join-group/:id', async (req, res) => {
  try {
    const groupId = req.params.id;
    const group = await Group.findOne({
      group_id: groupId
    });
    console.log(group)
    if (group !== null){
      res.json(true);
    } else {
      res.json(false);
    }
  } catch(err) {
    res.status(500).json({ success: false , message: err })
  }
})

app.delete('/delete-song', (req, res) => {
  res.send(req.body)
})

const startServer = async () => { // starts the server
  try {
    connectDB('mongodb+srv://simonquach:Sq07112004!@group-groove.ngyhnqe.mongodb.net/?retryWrites=true&w=majority'); // connects to MongoDB database with url
    app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
  } catch (err) {
    console.log(err);
  }
}

startServer();