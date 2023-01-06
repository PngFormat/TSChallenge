interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

type MyReadonly2<T,K extends keyof T = keyof T> = {[Key in Exclude<keyof T,K>] : T[Key] } & {readonly [Key in K]: T[Key]}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK