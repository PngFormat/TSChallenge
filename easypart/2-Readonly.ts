interface Todo {
    title: string
    description: string
}

const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}
// add modificator readonly in type
type MyReadonly<T> = {
    readonly title: string
    readonly description: string
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property