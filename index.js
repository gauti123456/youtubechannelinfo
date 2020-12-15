const express = require('express')

const channelinfo = require('youtube-channel-info')

const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:false}))

app.set("view engine","ejs")

app.get('/',(req,res) =>{
    res.render('index')
})

app.post("/getchannelinfo",(req,res) => {
    var name = req.body.channelname

    channelinfo(name, function (channelStats) {
        if (!channelStats) {
          return console.error("Channel not found!")
        }
        res.json({
            stats:channelStats
        }); 
      })
})



app.listen(5000,() =>{
    console.log(`App is listening on port 5000`)
})