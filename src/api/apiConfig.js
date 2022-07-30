
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6442682edab45e7b1177e201f01cc56d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;