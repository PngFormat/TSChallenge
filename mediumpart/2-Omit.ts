interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview1 = MyOmit<Todo, 'description' | 'title'>


// type MyOmit<T,K extends keyof T> = Omit<T,K>
//or

type MyOmit<T,K> = {[Key in keyof T as Key extends K ? never : Key]:T[Key]}