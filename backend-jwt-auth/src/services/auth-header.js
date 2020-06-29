export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {

//  For SpringBoot backend use below
//  return { Authorization: 'Bearer ' + user.accessToken };

//  For Express backend use below
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}

