import AbstractView from "./AbstractView.js";

class Dashboard extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHTML() {
        return `
            <h1>Welcome to Dashboard!</h1>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quod magnam
                quae repellendus id quis odit veniam nobis repellat ipsam nemo assumenda harum
                enim facilis ab quam aliquam sint tempora molestiae, quasi soluta maxime fugiat
                expedita! Maiores fugit labore neque.
            </p>

            <a href="/posts" data-link>Learn more...</a>
        `;
    }
}

export default Dashboard;
