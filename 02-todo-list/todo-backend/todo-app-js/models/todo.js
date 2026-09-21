// Use a process-global store so that all module instances (test imports and
// app require) share the same array — needed because vitest's ESM/CJS interop
// can load this file in separate module registries within the same worker.
const STATE_KEY = Symbol.for('__todo_store_state');
if (!global[STATE_KEY]) {
    global[STATE_KEY] = { todos: [], nextId: 1 };
}
const state = global[STATE_KEY];

class TodoInstance {
    constructor({ id, task, completed }) {
        this.id = id;
        this.task = task;
        this.completed = completed ?? false;
    }

    async save() {
        const idx = state.todos.findIndex(t => t.id === this.id);
        if (idx !== -1) {
            state.todos[idx] = { id: this.id, task: this.task, completed: this.completed };
        }
    }

    async destroy() {
        const idx = state.todos.findIndex(t => t.id === this.id);
        if (idx !== -1) state.todos.splice(idx, 1);
    }

    toJSON() {
        return { id: this.id, task: this.task, completed: this.completed };
    }
}

const ToDo = {
    async create({ task, completed = false }) {
        if (task == null) throw new Error('task cannot be null');
        const record = { id: state.nextId++, task, completed };
        state.todos.push(record);
        return new TodoInstance(record);
    },

    async findAll() {
        return state.todos.map(r => new TodoInstance(r));
    },

    async findByPk(id) {
        const record = state.todos.find(t => t.id === Number(id));
        return record ? new TodoInstance(record) : null;
    },

    async destroy({ where } = {}) {
        if (where) {
            const keep = state.todos.filter(t =>
                !Object.entries(where).every(([k, v]) => t[k] === v)
            );
            state.todos.splice(0, state.todos.length, ...keep);
        } else {
            state.todos.splice(0, state.todos.length);
        }
    },

    async sync({ force = false } = {}) {
        if (force) {
            state.todos.splice(0, state.todos.length);
            state.nextId = 1;
        }
    },
};

module.exports = ToDo;
