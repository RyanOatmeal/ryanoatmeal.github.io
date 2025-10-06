export interface IState {
    counter?: number | undefined;
}
export interface IInput {
    state: IState;
    input: string;
}
export interface IOutput {
    state: IState;
    output: string;
}
export declare const world: (props: IInput) => IOutput;
//# sourceMappingURL=index.d.ts.map