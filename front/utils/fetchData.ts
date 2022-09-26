import axios from "axios";

export const getData = async (url: string) => {
  const res: any = axios.get(url);
  const data = await res;
  return data;
};

export const postData = async (url: string, post: any) => {
  const res = axios.post(url, {
    username: post.username,
    password: post.password,
  });

  const data = await res;
  return data;
};

export const postProduct = async (url: string, post: any) => {
  const res = axios.post(url, {
    name: post.name,
    description: post.description,
    price: post.price,
    image: post.image,
  });

  const data = await res;
  return data;
};
export const patchData = async (url: string, patch: any) => {
  const res: any = axios.patch(url, {
    username: patch.username,
    email: patch.email,
    password: patch.password,
  });

  const data = await res;
  return data;
};
