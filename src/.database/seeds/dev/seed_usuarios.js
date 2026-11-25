export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('usuarios').del()
  await knex('usuarios').insert([
    {
      id: 1,
      nome: 'Admin do sistema',
      login: 'admin',
      senha: '12345',
      email: 'admin@email.com'
    },
  ]);
};
