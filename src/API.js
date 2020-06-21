export const GET = "GET";
export const POST = "POST";
export const DELETE = "DELETE";

export const postApi = {
    async getPosts(id = 0) {
        try {
            const response = await fetch("http://localhost:7777/posts/");
            const responseJSON = await response.json();
            return responseJSON;
        } catch (error) {
            alert(error.message);
        }
    },

    async deletePost(id) {
        try {
            const response = await fetch(`http://localhost:7777/posts/${id}`, {
                method: DELETE,
            });
            if (!response.ok) {
                throw Error("Server error");
            }
        } catch {
            alert("Something went wrong");
        }
    },

    async postPost(payload) {
        try {
            const response = await fetch("http://localhost:7777/posts/", {
                method: POST,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                throw Error("Server error");
            }
        } catch (error) {
            alert(error.message);
        }
    },

};
