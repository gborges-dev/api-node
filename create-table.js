import { sql } from "./db.js";

sql`
    INSERT INTO faq (id, pergunta, resposta)
    VALUES ('c29ebd1a-7903-4fc5-8a04-487f819279fc', '1. Onde posso encontrar moradia temporária em Criciúma?', 'Você pode encontrar moradia temporária na Assistência Social de Criciúma.');
    )
`.then(() => {
    console.log('Registro inserido!')
})