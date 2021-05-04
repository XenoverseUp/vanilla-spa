import AbstractView from "./AbstractView.js";

class Settings extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHTML() {
        return `
            <h1>Settings</h1>
        `;
    }
}
export default Settings;
