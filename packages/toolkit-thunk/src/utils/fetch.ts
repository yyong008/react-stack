const baseUrl = 'http://localhost:9898'

export const getAge = async () => {
  const res = await fetch(`${baseUrl}/age`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
  return res;
};

export const getUserInfo = async ()=> {
  const res = await fetch(`${baseUrl}/thunk-userinfo`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
  return res;

}