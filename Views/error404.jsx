const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src='Public/Images/404-cow.jpg' alt='Calf in field' />
                </div>
                <div>
                    Photo by <a href='https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Annie Spratt</a> on <a href='https://unsplash.com/'>Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404