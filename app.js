const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())


app.get('/',(req,res)=>{
    res.send("helloo bhaiya")
})
const books = {
    Happy: [
      { title: "The Rosie Project", author: "Graeme Simsion" },
      { title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman" }
    ],
    Sad: [
      { title: "The Perks of Being a Wallflower", author: "Stephen Chbosky" },
      { title: "A Man Called Ove", author: "Fredrik Backman" }
    ],
    Adventurous: [
      { title: "Into the Wild", author: "Jon Krakauer" },
      { title: "Life of Pi", author: "Yann Martel" }
    ],
    Romantic: [
        { title: "The Rosie Project", author: "Graeme Simsion" },
        { title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman" }
      ],
      Relaxed: [
        { title: "The Perks of Being a Wallflower", author: "Stephen Chbosky" },
        { title: "A Man Called Ove", author: "Fredrik Backman" }
      ],
      Curious: [
        { title: "Into the Wild", author: "Jon Krakauer" },
        { title: "Life of Pi", author: "Yann Martel" }
      ],
    // Add other moods...
  };
  
  app.get("/recommendation/:mood", (req, res) => {
    const mood = req.params.mood;
    const recommendations = books[mood] || [];
    res.json(recommendations);
  });
  
app.listen(3000,()=>{
    console.log('server is running')
})