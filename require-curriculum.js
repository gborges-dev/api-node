import { randomUUID } from 'node:crypto'
import { sql } from './db.js';

export class RequiresCV {
    async readById(id) {
        const res = await sql` select * from curriculum where id = ${String(id)}`;

        return res;
    };

    async readAll() {
        const res = await sql` select * from curriculum`;

        return res;
    };

    async create(dto) {
        const curriculumId = randomUUID();
        const { nome, nacionalidade, estado_civil, data_nascimento, endereco, num_endereco, cep, telefone, email, objetivo, formacao, experiencias, at_complementares, idiomas, ref_pessoal } = dto;

        await sql` insert into curriculum (id, nome, nacionalidade, estado_civil, data_nascimento, endereco, num_endereco, cep, telefone, email, objetivo, formacao, experiencias, at_complementares, idiomas, ref_pessoal) 
                   VALUES (${curriculumId}, ${nome}, ${nacionalidade}, ${estado_civil}, ${data_nascimento}, ${endereco}, ${num_endereco}, ${cep}, ${telefone}, ${email}, ${objetivo}, ${formacao}, ${experiencias}, ${at_complementares}, ${idiomas}, ${ref_pessoal})`;
    };

    async update(dto) {
        const { id, nome, nacionalidade, estado_civil, data_nascimento, endereco, num_endereco, cep, telefone, email, objetivo, formacao, experiencias, at_complementares, idiomas, ref_pessoal } = dto;

        await sql` update curriculum set nome = ${nome}, nacionalidade = ${nacionalidade}, estado_civil = ${estado_civil}, data_nascimento = ${data_nascimento}, endereco = ${endereco}, 
                                    num_endereco = ${num_endereco}, cep = ${cep}, telefone = ${telefone}, email = ${email}, objetivo = ${objetivo}, formacao = ${formacao}, 
                                    experiencias = ${experiencias}, at_complementares = ${at_complementares}, idiomas = ${idiomas}, ref_pessoal = ${ref_pessoal} 
                    where id = ${id}`;
    };

    async delete(id) {
        await sql` DELETE FROM curriculum WHERE id = ${id};`
    };
}