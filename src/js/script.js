const userEmail = document.querySelector('.email');
const userName = document.querySelector('.name');

async function fetchPage() {
  const userId = 1;
  const response = await fetch(`./api/user/${userId}`);
  const responseData = await response.json();

  const { data } = responseData;

  userEmail.innerHTML = data.email;
  userName.innerHTML = data.name;
}
fetchPage();