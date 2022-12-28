// @ts-ignore
import {Equal, Expect} from "@type-challenges/utils";
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType>

type MyAwaited<Type> = Type extends Promise<infer K> ? MyAwaited<K>: Type

type cases = [
    Expect<Equal<MyAwaited<Promise<string>>, string>>,
    Expect<Equal<MyAwaited<Promise<number>>, number>>,
    Expect<Equal<MyAwaited<Promise<never>>, never>>
]