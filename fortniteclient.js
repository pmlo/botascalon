
const email = process.env.email;
const password = process.env.password;
const Fortnite = require("fortnite-api");

var self = module.exports = {

    fortniteAPI: new Fortnite(
        [
            email,
            password,
            "MzRhMDJjZjhmNDQxNGUyOWIxNTkyMTg3NmRhMzZmOWE6ZGFhZmJjY2M3Mzc3NDUwMzlkZmZlNTNkOTRmYzc2Y2Y=",
            "ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ"
        ],
        {
            debug: true
        }
    ),
    news: (channel) => {

        self.fortniteAPI.login().then(() => {
            self.fortniteAPI
                .getFortniteNews("fr")
                .then(news => {
                    var newsArr = [];
                    for (var i = 0, len = news.br.length; i < len; i++) {
                        newsArr.push([news.br[i].title, news.br[i].body]);
                    }
                    channel.send({embed: Embed.formatNews(newsArr)});
                })
                .catch(err => {
                    console.log(err);
                });
        });
    },
    store: (channel) => {

        self.fortniteAPI
        .getStore("fr")
        .then(store => {
            console.log(store);
        })
        .catch(err => {
            console.log(err);
        });
    }

}