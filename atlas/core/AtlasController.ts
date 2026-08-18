import HomeController from "../../controllers/HomeController";
export class AtlasController {
    private home = HomeController.getInstance();

    startThinking() {
        console.log("🧠 Atlas pensando...");
    }

    speak(message: string) {
        console.log("💬", message);
    }

    finishThinking() {
        console.log("✅ Atlas respondeu.");
    }
    openWorkspace() {

    this.home.changeMode("pc");

}

}