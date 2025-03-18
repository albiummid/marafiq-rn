const isDev = true;
const setENV = (productionValue: any, developmentValue: any): any => {
    if (isDev) {
        return developmentValue;
    } else {
        return productionValue;
    }
};

export default {
    baseURL: setENV("https://server.com", "http://10.0.2.2:5000/api/v1"),
};
