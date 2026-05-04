declare const _default: () => {
    app: {
        nodeEnv: "development" | "test" | "production";
        port: number;
        database: {
            host: string;
            port: number;
            user: string;
            password: string;
            name: string;
            url: string;
        };
        ollama: {
            baseUrl: string;
            model: string;
        };
    };
};
export default _default;
