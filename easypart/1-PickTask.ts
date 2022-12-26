interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
console.log(todo)

type MyPick<T, K> = {
    [Key in keyof T as Key extends K ? Key : never]: T[Key]
}


