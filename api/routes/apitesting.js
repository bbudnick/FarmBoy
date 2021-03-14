                  
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/distributions?73?token=lMjyhDCKH5D43P-4SlgHJeM7557Ch37abJ0TBT0-gBE');
  const json = await response.json();
  console.log(json);
})();
           