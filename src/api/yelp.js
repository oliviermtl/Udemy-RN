import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer -zhJaeTNi6mzHGl5xuwUzssGcX0PETlDSsT80-hUh6Ltoq_x_yy-D1Wxzsy3AZfmkYKiw446icTBe5r5DDc_cnYbkR64WYez_PBtLimryyOL2kVZe4I-0oisEbZ5XnYx',
  },
});
