type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // expected to be `false`

type Includes<T extends any[],K> = K extends T[number] ? true : false