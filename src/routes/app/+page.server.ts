export const actions = {
    default: async ({ request }) => {
        const form = await request.formData();
        const email = form.get("email");
        const password = form.get("password");
        // do whatever you want to do with email and password
        console.log(email, password);
    },
};
