export const findRandomCountry = (data: any) => {
  const randomIdx = Math.floor(Math.random() * data.countries?.length);

  return data.countries[randomIdx];
};
