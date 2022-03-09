export const getCurrentUser = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  if (users) return users;
  return null;
};
