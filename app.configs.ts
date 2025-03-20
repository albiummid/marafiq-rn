const isDev = true;
const setENV = (productionValue: any, developmentValue: any): any => {
  if (isDev) {
    return developmentValue;
  } else {
    return productionValue;
  }
};

export default {
  baseURL: setENV(
    'https://subdev.trymarafiq.com/en',
    'https://subdev.trymarafiq.com/en',
  ),
};
