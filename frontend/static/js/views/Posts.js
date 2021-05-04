import AbstractView from "./AbstractView.js";

class Posts extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHTML() {
        return `
            <h1>Posts</h1>
        `;
    }
}

export default Posts;
