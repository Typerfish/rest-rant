const React = require('react')

function Def (html){
    return (
        <html>
            <head>
                <title>Restaurants and Shiz</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/package@version/file' />
                <link rel='stylesheet' href='/css/style.css' />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def