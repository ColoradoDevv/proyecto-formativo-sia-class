export function logoutService() {
    sessionStorage.removeItem("token");
}