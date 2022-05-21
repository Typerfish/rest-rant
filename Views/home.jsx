const React = require('react')
const Def = require('./default')

function home(){
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='/images/flatbread.jpg' alt='Assorted Flatbread' />
                </div>
                <div>
                    Photo by <a href='https://unsplash.com/@ellaolsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Ella Olsson</a> on <a href='https://unsplash.com/'>Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

<a href="/places">
    <button className = 'btn-primary'>Places Pages</button>
</a>

module.exports = home