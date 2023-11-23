import { randomUUID } from 'node:crypto'
import { sql } from './db.js';

export class RequiresUsers {
    async readLogin(dto) {
        const { email, password } = dto;

        const res = await sql` select COUNT(*) as total from users where email = ${email} and password = ${password}`;

        return res[0].total;
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