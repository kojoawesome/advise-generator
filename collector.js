const api_url = 'https://api.adviceslip.com/advice'

async function getAdvice  (){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.slip.advice)
    
}

getAdvice();