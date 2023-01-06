interface Todo {
    title: string
    description: string
}

const test5: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

type MyReadonly<T> = {
    readonly [field in keyof T]: T[field]
}

// test1.title = "Hello" // Error: cannot reassign a readonly property
// test1.description = "barFoo" // Error: cannot reassign a readonly property