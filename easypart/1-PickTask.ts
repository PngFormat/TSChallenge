interface Todo1 {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo1, 'title' | 'completed'>


const test: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
console.log(test)

type MyPick<T, K> = {
    [Key in keyof T as Key extends K ? Key : never]: T[Key]
}


