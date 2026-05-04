import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChatSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$ChatSessionPayload>;
export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null;
    _min: ChatSessionMinAggregateOutputType | null;
    _max: ChatSessionMaxAggregateOutputType | null;
};
export type ChatSessionMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChatSessionMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChatSessionCountAggregateOutputType = {
    id: number;
    title: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ChatSessionMinAggregateInputType = {
    id?: true;
    title?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChatSessionMaxAggregateInputType = {
    id?: true;
    title?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChatSessionCountAggregateInputType = {
    id?: true;
    title?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ChatSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatSessionWhereInput;
    orderBy?: Prisma.ChatSessionOrderByWithRelationInput | Prisma.ChatSessionOrderByWithRelationInput[];
    cursor?: Prisma.ChatSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChatSessionCountAggregateInputType;
    _min?: ChatSessionMinAggregateInputType;
    _max?: ChatSessionMaxAggregateInputType;
};
export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChatSession[P]> : Prisma.GetScalarType<T[P], AggregateChatSession[P]>;
};
export type ChatSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatSessionWhereInput;
    orderBy?: Prisma.ChatSessionOrderByWithAggregationInput | Prisma.ChatSessionOrderByWithAggregationInput[];
    by: Prisma.ChatSessionScalarFieldEnum[] | Prisma.ChatSessionScalarFieldEnum;
    having?: Prisma.ChatSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatSessionCountAggregateInputType | true;
    _min?: ChatSessionMinAggregateInputType;
    _max?: ChatSessionMaxAggregateInputType;
};
export type ChatSessionGroupByOutputType = {
    id: string;
    title: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ChatSessionCountAggregateOutputType | null;
    _min: ChatSessionMinAggregateOutputType | null;
    _max: ChatSessionMaxAggregateOutputType | null;
};
export type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChatSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChatSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChatSessionGroupByOutputType[P]>;
}>>;
export type ChatSessionWhereInput = {
    AND?: Prisma.ChatSessionWhereInput | Prisma.ChatSessionWhereInput[];
    OR?: Prisma.ChatSessionWhereInput[];
    NOT?: Prisma.ChatSessionWhereInput | Prisma.ChatSessionWhereInput[];
    id?: Prisma.StringFilter<"ChatSession"> | string;
    title?: Prisma.StringNullableFilter<"ChatSession"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ChatSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChatSession"> | Date | string;
    messages?: Prisma.ChatMessageListRelationFilter;
};
export type ChatSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    messages?: Prisma.ChatMessageOrderByRelationAggregateInput;
    _relevance?: Prisma.ChatSessionOrderByRelevanceInput;
};
export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ChatSessionWhereInput | Prisma.ChatSessionWhereInput[];
    OR?: Prisma.ChatSessionWhereInput[];
    NOT?: Prisma.ChatSessionWhereInput | Prisma.ChatSessionWhereInput[];
    title?: Prisma.StringNullableFilter<"ChatSession"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ChatSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChatSession"> | Date | string;
    messages?: Prisma.ChatMessageListRelationFilter;
}, "id">;
export type ChatSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ChatSessionCountOrderByAggregateInput;
    _max?: Prisma.ChatSessionMaxOrderByAggregateInput;
    _min?: Prisma.ChatSessionMinOrderByAggregateInput;
};
export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChatSessionScalarWhereWithAggregatesInput | Prisma.ChatSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChatSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChatSessionScalarWhereWithAggregatesInput | Prisma.ChatSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ChatSession"> | string;
    title?: Prisma.StringNullableWithAggregatesFilter<"ChatSession"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ChatSession"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ChatSession"> | Date | string;
};
export type ChatSessionCreateInput = {
    id?: string;
    title?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.ChatMessageCreateNestedManyWithoutSessionInput;
};
export type ChatSessionUncheckedCreateInput = {
    id?: string;
    title?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutSessionInput;
};
export type ChatSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.ChatMessageUpdateManyWithoutSessionNestedInput;
};
export type ChatSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.ChatMessageUncheckedUpdateManyWithoutSessionNestedInput;
};
export type ChatSessionCreateManyInput = {
    id?: string;
    title?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChatSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatSessionOrderByRelevanceInput = {
    fields: Prisma.ChatSessionOrderByRelevanceFieldEnum | Prisma.ChatSessionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ChatSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChatSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChatSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChatSessionScalarRelationFilter = {
    is?: Prisma.ChatSessionWhereInput;
    isNot?: Prisma.ChatSessionWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.ChatSessionCreateWithoutMessagesInput, Prisma.ChatSessionUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ChatSessionCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.ChatSessionWhereUniqueInput;
};
export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.ChatSessionCreateWithoutMessagesInput, Prisma.ChatSessionUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ChatSessionCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.ChatSessionUpsertWithoutMessagesInput;
    connect?: Prisma.ChatSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChatSessionUpdateToOneWithWhereWithoutMessagesInput, Prisma.ChatSessionUpdateWithoutMessagesInput>, Prisma.ChatSessionUncheckedUpdateWithoutMessagesInput>;
};
export type ChatSessionCreateWithoutMessagesInput = {
    id?: string;
    title?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string;
    title?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: Prisma.ChatSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatSessionCreateWithoutMessagesInput, Prisma.ChatSessionUncheckedCreateWithoutMessagesInput>;
};
export type ChatSessionUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.ChatSessionUpdateWithoutMessagesInput, Prisma.ChatSessionUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.ChatSessionCreateWithoutMessagesInput, Prisma.ChatSessionUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.ChatSessionWhereInput;
};
export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.ChatSessionWhereInput;
    data: Prisma.XOR<Prisma.ChatSessionUpdateWithoutMessagesInput, Prisma.ChatSessionUncheckedUpdateWithoutMessagesInput>;
};
export type ChatSessionUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatSessionCountOutputType = {
    messages: number;
};
export type ChatSessionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs;
};
export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionCountOutputTypeSelect<ExtArgs> | null;
};
export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatMessageWhereInput;
};
export type ChatSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    messages?: boolean | Prisma.ChatSession$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ChatSessionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatSession"]>;
export type ChatSessionSelectScalar = {
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ChatSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["chatSession"]>;
export type ChatSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | Prisma.ChatSession$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ChatSessionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ChatSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChatSession";
    objects: {
        messages: Prisma.$ChatMessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["chatSession"]>;
    composites: {};
};
export type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload, S>;
export type ChatSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChatSessionCountAggregateInputType | true;
};
export interface ChatSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'];
        meta: {
            name: 'ChatSession';
        };
    };
    findUnique<T extends ChatSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChatSessionClient<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatSessionClient<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChatSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChatSessionClient<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatSessionClient<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChatSessionFindManyArgs>(args?: Prisma.SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChatSessionCreateArgs>(args: Prisma.SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma.Prisma__ChatSessionClient<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChatSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ChatSessionDeleteArgs>(args: Prisma.SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__ChatSessionClient<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChatSessionUpdateArgs>(args: Prisma.SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__ChatSessionClient<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChatSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ChatSessionUpsertArgs>(args: Prisma.SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__ChatSessionClient<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChatSessionCountArgs>(args?: Prisma.Subset<T, ChatSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChatSessionCountAggregateOutputType> : number>;
    aggregate<T extends ChatSessionAggregateArgs>(args: Prisma.Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>;
    groupBy<T extends ChatSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChatSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: ChatSessionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChatSessionFieldRefs;
}
export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    messages<T extends Prisma.ChatSession$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChatSessionFieldRefs {
    readonly id: Prisma.FieldRef<"ChatSession", 'String'>;
    readonly title: Prisma.FieldRef<"ChatSession", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ChatSession", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ChatSession", 'DateTime'>;
}
export type ChatSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
    where: Prisma.ChatSessionWhereUniqueInput;
};
export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
    where: Prisma.ChatSessionWhereUniqueInput;
};
export type ChatSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
    where?: Prisma.ChatSessionWhereInput;
    orderBy?: Prisma.ChatSessionOrderByWithRelationInput | Prisma.ChatSessionOrderByWithRelationInput[];
    cursor?: Prisma.ChatSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatSessionScalarFieldEnum | Prisma.ChatSessionScalarFieldEnum[];
};
export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
    where?: Prisma.ChatSessionWhereInput;
    orderBy?: Prisma.ChatSessionOrderByWithRelationInput | Prisma.ChatSessionOrderByWithRelationInput[];
    cursor?: Prisma.ChatSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatSessionScalarFieldEnum | Prisma.ChatSessionScalarFieldEnum[];
};
export type ChatSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
    where?: Prisma.ChatSessionWhereInput;
    orderBy?: Prisma.ChatSessionOrderByWithRelationInput | Prisma.ChatSessionOrderByWithRelationInput[];
    cursor?: Prisma.ChatSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatSessionScalarFieldEnum | Prisma.ChatSessionScalarFieldEnum[];
};
export type ChatSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatSessionCreateInput, Prisma.ChatSessionUncheckedCreateInput>;
};
export type ChatSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChatSessionCreateManyInput | Prisma.ChatSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChatSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatSessionUpdateInput, Prisma.ChatSessionUncheckedUpdateInput>;
    where: Prisma.ChatSessionWhereUniqueInput;
};
export type ChatSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChatSessionUpdateManyMutationInput, Prisma.ChatSessionUncheckedUpdateManyInput>;
    where?: Prisma.ChatSessionWhereInput;
    limit?: number;
};
export type ChatSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
    where: Prisma.ChatSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatSessionCreateInput, Prisma.ChatSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChatSessionUpdateInput, Prisma.ChatSessionUncheckedUpdateInput>;
};
export type ChatSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
    where: Prisma.ChatSessionWhereUniqueInput;
};
export type ChatSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatSessionWhereInput;
    limit?: number;
};
export type ChatSession$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where?: Prisma.ChatMessageWhereInput;
    orderBy?: Prisma.ChatMessageOrderByWithRelationInput | Prisma.ChatMessageOrderByWithRelationInput[];
    cursor?: Prisma.ChatMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatMessageScalarFieldEnum | Prisma.ChatMessageScalarFieldEnum[];
};
export type ChatSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSessionSelect<ExtArgs> | null;
    omit?: Prisma.ChatSessionOmit<ExtArgs> | null;
    include?: Prisma.ChatSessionInclude<ExtArgs> | null;
};
