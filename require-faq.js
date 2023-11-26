import { sql } from './db.js';

export class RequiresFaq {
    async readById(id) {
        const res = await sql` select * from faq where id = ${String(id)}`;

        return res;
    };

    async readAll() {
        const res = await sql` select * from faq ORDER BY pergunta`;

        return res;
    };

    async update(dto) {
        const { id, pergunta, resposta } = dto;

        await sql` update faq set pergunta = ${pergunta}, resposta = ${resposta} where id = ${id}`;
    };
}