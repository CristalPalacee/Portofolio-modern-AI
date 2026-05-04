import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const ChatSessionScalarFieldEnum = {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ChatMessageScalarFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    role: 'role',
    content: 'content',
    model: 'model',
    tokens: 'tokens',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const ChatSessionOrderByRelevanceFieldEnum = {
    id: 'id',
    title: 'title'
};
export const ChatMessageOrderByRelevanceFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    content: 'content',
    model: 'model'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map