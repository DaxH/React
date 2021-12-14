const getGiftsByCategory = async (category) => {
    const apiKey = 'UY3BsMfcBi5H6UHM9H5C2OZ2zDHhRRnf'
    const urlGiftsByCategory = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const response = await fetch(urlGiftsByCategory);
    const { data } = await response.json();
    const gifts = data.map((image) => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        }
    })
    return gifts;
}
export {
    getGiftsByCategory
}