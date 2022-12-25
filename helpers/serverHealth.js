
const serverHealth = async (req, res) => {
  res.send('<div style="width:200px; margin: auto auto;"><img width="100%"  src="https://i.giphy.com/media/9DaWtzJV7WZpxQVzNz/giphy.webp"></div><div style="width:220px; margin: 0 auto;"><h2>Server is Running...</h2></div>')
}

module.exports = { serverHealth }
