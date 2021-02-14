export const fetchTickerData = async ticker => {
  const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${ticker}&tsyms=USD&api_key=${process.env.VUE_APP_API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) return Promise.reject(res.status);

  const json = await res.json();

  return json;
};
