const React = require('react')
const Def = require('../default')

function Def (html){
    return (
        <html>
            <head>
                <title>Restaurants and Shiz</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/package@version/file' />
                <link rel='stylesheet' href='/css/style.css' />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            <a href='/places/new'>Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def