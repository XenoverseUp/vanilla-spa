import AbstractView from "./AbstractView.js";

class PostView extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle(`Post ${params.id}`);
    }

    async getHTML() {
        return `
            <h1>Post ${this.params.id}</h1>
        `;
    }
}

export default PostView;
