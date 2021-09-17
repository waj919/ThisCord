export const fetchAllUsers = () => {
    return $.ajax({
        method: "get",
        url: "/api/users"
    })
}