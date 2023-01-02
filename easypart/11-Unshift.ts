type Result2 = Unshift<[1, 2,3], 0> // [0, 1, 2,]

type Unshift<T extends unknown[],K> = [K,...T]