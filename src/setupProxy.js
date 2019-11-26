const proxy = require('http-proxy-middleware');
module.exports = function(app){
    app.use(
        proxy('/playlist',
            {
                target:'http://localhost:3000',
                changeOrigin: true
            }
            )
    );
    app.use(
        proxy('/song',
            {
                target:'http://localhost:3000',
                changeOrigin: true
            }
        )
    );
    app.use(
        proxy('/check',
            {
                target:'http://localhost:3000',
                changeOrigin: true
            }
        )
    );
    app.use(
        proxy('/search',
            {
                target:'http://localhost:3000',
                changeOrigin: true
            }
        )
    );
}