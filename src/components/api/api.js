import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '31605839-858af090e8e0e31dbfed95a6b',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  },
});

export const searchImage = async (search, page = 1) => {
  const { data } = await instance.get(`/?q=${search}`, {
    params: {
      page,
    },
  });
  return data;
};
