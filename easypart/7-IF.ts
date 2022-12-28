import {Equal, Expect} from "@type-challenges/utils";

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

type If<T extends boolean,K,F> = T extends true ? K: F

type cases = [
    Expect<Equal<If<false, 1,true>, true>>
]