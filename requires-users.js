import { randomUUID } from 'node:crypto'
import { sql } from './db.js';

export class RequiresUsers {
    list(filters) {
        
    };

    async create(dto) {
        const userId = randomUUID();
        const { username, date, email, password } = dto;

        await sql` insert into users (id, username, date, email, password) VALUES (${userId}, ${username}, ${date}, ${email}, ${password})`;

    };

    update(id, dto) {

    };

    delete(id) {

    };
}