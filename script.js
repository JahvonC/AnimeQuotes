function getQuote() {
    const choice = document.querySelector('input').value
    const url = 'https://animechan.vercel.app/api/random/anime?title='+choice

    fetch(url)
          .then((response) => response.json())
          .then((quote) => {
            console.log(quote)
            document.getElementById('Anime').innerHTML = quote.anime
            document.getElementById('Character').innerHTML = quote.character
            document.getElementById('Quote').innerHTML = quote.quote
          })
          .catch(err => {
            console.log(`error occured: ${err}`)
          })
}

