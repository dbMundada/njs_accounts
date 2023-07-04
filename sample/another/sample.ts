// class Test {
//     run(credentials: { username: string; password: string; }): string {
//         console.log(credentials);
//         return ``;
//     }
// }


import ServerRoute from "@hapi/hapi";

interface Auth0UserHandler {
    resetPassword: (password) => string;
    updateEmail: (emailId: string) => string;
}

export const v1Auth0UserRoutes = (handler: Auth0UserHandler): ServerRoute[] => [
    {
        method: "POST",
        url: "/v1/auth0/user/reset-password",
        handler: (password) => {
            handler.resetPassword(password);
        },
        options: {
            description: "Triggers a password reset email to be send to the provided email address.",
            notes: ["Will return a success regardless if the email address is valid or not"],
            auth: false
        },
    },
    {
        method: "GET",
        path: "/v1/auth0/user/update-email",
        handler: (emailId, userName) => {
            console.log(emailId, userName);
        },
        options: {
            description: "ADMIN ONLY. Updates the user's email address in Auth0 _only_.",
            notes: ["To change a user's email address everywhere, use the profile-service endpoints"]
        },
    }
]