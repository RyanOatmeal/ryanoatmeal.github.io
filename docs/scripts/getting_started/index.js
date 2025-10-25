import init, { greet } from "./pkg/getting_started.js";
export const world = () => {
    init().then(() => {
        greet("WebAssembly");
    });
};
//# sourceMappingURL=index.js.map