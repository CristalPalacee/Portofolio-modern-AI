import { envSchema } from './env.schema.js';
export default () => {
    const env = envSchema.parse(process.env);
    return {
        app: {
            nodeEnv: env.NODE_ENV,
            port: env.PORT,
            database: {
                host: env.DATABASE_HOST,
                port: env.DATABASE_PORT,
                user: env.DATABASE_USER,
                password: env.DATABASE_PASSWORD,
                name: env.DATABASE_NAME,
                url: env.DATABASE_URL,
            },
            ollama: {
                baseUrl: env.OLLAMA_BASE_URL,
                model: env.OLLAMA_MODEL,
            },
        },
    };
};
//# sourceMappingURL=app.config.js.map