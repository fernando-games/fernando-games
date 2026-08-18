export type HomeMode =
    | "atlas"
    | "pc"
    | "games"
    | "promotion";

export type HomeState = {
    mode: HomeMode;
    banner: number;
    workspace: string;
};

export default class HomeController {
    private static instance: HomeController;
    private listeners: (() => void)[] = [];

    private state: HomeState = {
        mode: "atlas",
        banner: 0,
        workspace: "home"
    };
    public static getInstance(): HomeController {

        if (!HomeController.instance) {

            HomeController.instance = new HomeController();

        }

        return HomeController.instance;

    }

    getState() {
        return this.state;
    }
    subscribe(listener: () => void) {
        this.listeners.push(listener);
    }

    private notify() {
        this.listeners.forEach(listener => listener());
    }
    private updateBanner(mode: HomeMode) {

        switch (mode) {

            case "atlas":
                this.state.banner = 0;
                break;

            case "pc":
                this.state.banner = 1;
                break;

            case "games":
                this.state.banner = 2;
                break;

            case "promotion":
                this.state.banner = 3;
                break;

        }

    }
    private updateWorkspace(mode: HomeMode) {

        switch (mode) {

            case "atlas":
                this.state.workspace = "home";
                break;

            case "pc":
                this.state.workspace = "pc";
                break;

            case "games":
                this.state.workspace = "games";
                break;

            case "promotion":
                this.state.workspace = "promotion";
                break;

        }

    }
    changeMode(mode: HomeMode) {

        this.state.mode = mode;
        this.updateBanner(mode);
        this.updateWorkspace(mode);

        this.notify();
        console.log("🔔 Observer notificou todos!");

        console.log("🏠", this.state);

    }

}