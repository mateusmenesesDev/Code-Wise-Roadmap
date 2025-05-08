export const useAuth = () => {
  const currentUser = { isAdmin: true, email: null };
  const logout = () => undefined;

  return { currentUser, logout };
};
