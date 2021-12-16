export const consultaCeva = async() => {
    try {  const url = `https://api.punkapi.com/v2/beers`
           const response = await fetch(url)
           const json = await response.json();
           console.log(json);     
    return json;
}
catch(error){console.log(error)}
};