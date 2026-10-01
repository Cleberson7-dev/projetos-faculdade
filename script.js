document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================
    // 1. INTERAÇÃO: Botão "Começar a estudar" (Cursos & Concursos)
    // ==========================================================
    const btnComecar = document.getElementById("btn-comecar");

    if (btnComecar) {
        btnComecar.addEventListener("click", (e) => {
            e.preventDefault();

            const conteudoPagina = `
                <!DOCTYPE html>
                <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Cursos & Concursos - Tá no SEU Radar!</title>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
                    <style>
                        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }
                        body { background-color: #f4f7f6; color: #333; padding: 40px 20px; }
                        .container { max-width: 1000px; margin: 0 auto; }
                        .header { text-align: center; margin-bottom: 40px; }
                        .header h1 { color: #0056b3; font-size: 2.2rem; margin-bottom: 10px; }
                        .header p { color: #666; font-size: 1.1rem; }
                        .section-title { font-size: 1.4rem; color: #2c3e50; margin: 30px 0 15px 0; border-left: 5px solid #0056b3; padding-left: 10px; }
                        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
                        .card { background: #fff; border-radius: 12px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s; }
                        .card:hover { transform: translateY(-5px); }
                        .tag { align-self: flex-start; padding: 4px 12px; font-size: 0.75rem; font-weight: 700; border-radius: 20px; text-transform: uppercase; margin-bottom: 15px; }
                        .tag.curso { background: #e3f2fd; color: #0056b3; }
                        .tag.concurso { background: #e8f5e9; color: #2e7d32; }
                        .card h3 { font-size: 1.1rem; color: #1a252f; margin-bottom: 10px; }
                        .card p { font-size: 0.9rem; color: #666; line-height: 1.5; margin-bottom: 15px; }
                        .price { font-size: 1.25rem; font-weight: 700; color: #2e7d32; margin-bottom: 15px; }
                        .price small { display: block; font-size: 0.75rem; color: #888; font-weight: 400; }
                        .btn { width: 100%; padding: 12px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; background: #0056b3; color: #fff; }
                        .btn:hover { background: #003d80; }
                        .btn.concurso-btn { background: #2e7d32; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🚀 Oportunidades no seu Radar</h1>
                            <p>Escolha o seu próximo passo e acelere a sua preparação!</p>
                        </div>
                        <div class="section-title">📚 Cursos Recomendados</div>
                        <div class="grid">
                            <div class="card">
                                <div><span class="tag curso">Curso</span><h3>Desenvolvimento Web Full Stack</h3><p>Aprenda HTML, CSS, JavaScript, React e Node.js na prática.</p></div>
                                <div><div class="price">R$ 189,90 <small>ou 12x R$ 18,90</small></div><button class="btn" onclick="alert('Inscrição realizada com sucesso!')">Garantir Vaga</button></div>
                            </div>
                            <div class="card">
                                <div><span class="tag curso">Curso</span><h3>Banco de Dados & SQL para Devs</h3><p>Domine MySQL, PostgreSQL e estrutura de dados relacionais.</p></div>
                                <div><div class="price">R$ 129,00 <small>ou 12x R$ 12,80</small></div><button class="btn" onclick="alert('Inscrição realizada com sucesso!')">Garantir Vaga</button></div>
                            </div>
                            <div class="card">
                                <div><span class="tag curso">Curso</span><h3>Lógica de Programação & Python</h3><p>Construa a base essencial para qualquer área da tecnologia.</p></div>
                                <div><div class="price">R$ 97,50 <small>ou 6x R$ 17,90</small></div><button class="btn" onclick="alert('Inscrição realizada com sucesso!')">Garantir Vaga</button></div>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `;

            const novaAba = window.open();
            if (novaAba) {
                novaAba.document.write(conteudoPagina);
                novaAba.document.close();
            }
        });
    }

    // ==========================================================
    // 2. INTERAÇÃO: Card "Concursos Públicos" (Ver Preparação)
    // ==========================================================
    const btnConcursos = document.getElementById("btn-concursos");

    if (btnConcursos) {
        btnConcursos.addEventListener("click", (e) => {
            e.preventDefault();

            const conteudoConcursos = `
                <!DOCTYPE html>
                <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Preparação para Concursos Públicos - Tá no SEU Radar!</title>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
                    <style>
                        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }
                        body { background-color: #f0f4f8; color: #333; padding: 40px 20px; }
                        .container { max-width: 900px; margin: 0 auto; }
                        .header { text-align: center; margin-bottom: 35px; }
                        .header h1 { color: #0d47a1; font-size: 2.2rem; margin-bottom: 8px; }
                        .header p { color: #555; font-size: 1.05rem; }
                        .concursos-list { display: flex; flex-direction: column; gap: 20px; }
                        .concurso-card { background: #fff; border-radius: 12px; padding: 25px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border-left: 6px solid #1565c0; transition: transform 0.2s; }
                        .concurso-card:hover { transform: translateX(5px); }
                        .card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px; }
                        .card-top h3 { font-size: 1.3rem; color: #1565c0; }
                        .badge-status { background: #e3f2fd; color: #0d47a1; padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; }
                        .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; background: #f8fafc; padding: 12px; border-radius: 8px; margin-bottom: 15px; }
                        .info-item span { display: block; font-size: 0.75rem; color: #777; text-transform: uppercase; font-weight: 600; }
                        .info-item strong { font-size: 1rem; color: #2e7d32; }
                        .info-item .data { color: #c62828; }
                        .descricao { font-size: 0.92rem; color: #555; line-height: 1.6; margin-bottom: 15px; }
                        .btn-preparar { display: inline-block; padding: 10px 20px; background: #1565c0; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; text-decoration: none; transition: background 0.2s; }
                        .btn-preparar:hover { background: #0d47a1; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🏛 Concursos Públicos no Radar</h1>
                            <p>Confira as principais oportunidades previstas e com editais abertos:</p>
                        </div>

                        <div class="concursos-list">
                            <!-- Concurso 1 -->
                            <div class="concurso-card">
                                <div class="card-top">
                                    <h3>1. Banco do Brasil - TI</h3>
                                    <span class="badge-status">Previsto para 2026/2027</span>
                                </div>
                                <div class="info-grid">
                                    <div class="info-item"><span>Piso Salarial Initial</span><strong>R$ 3.850,00 + Benefícios</strong></div>
                                    <div class="info-item"><span>Previsão de Edital</span><strong class="data">Novembro / 2026</strong></div>
                                </div>
                                <p class="descricao">Excelente oportunidade para a área de Tecnologia da Informação com foco em suporte, desenvolvimento de sistemas e análise de dados. Inclui auxílio-alimentação expressivo e plano de previdência.</p>
                                <button class="btn-preparar" onclick="alert('Acessando cronograma de estudos do BB TI...')">Acessar Plano de Estudos</button>
                            </div>

                            <!-- Concurso 2 -->
                            <div class="concurso-card">
                                <div class="card-top">
                                    <h3>2. SERPRO (Serviço Federal de Processamento de Dados)</h3>
                                    <span class="badge-status">Edital em Breve</span>
                                </div>
                                <div class="info-grid">
                                    <div class="info-item"><span>Piso Salarial Inicial</span><strong>R$ 7.800,00</strong></div>
                                    <div class="info-item"><span>Previsão de Edital</span><strong class="data">Dezembro / 2026</strong></div>
                                </div>
                                <p class="descricao">Vagas focadas em Desenvolvimento de Software, Segurança da Informação e Infraestrutura em Nuvem. Modalidade de trabalho híbrido/remoto com abrangência nacional.</p>
                                <button class="btn-preparar" onclick="alert('Acessando edital verticalizado SERPRO...')">Acessar Plano de Estudos</button>
                            </div>

                            <!-- Concurso 3 -->
                            <div class="concurso-card">
                                <div class="card-top">
                                    <h3>3. TRT - Analista de TI</h3>
                                    <span class="badge-status">Previsto para 2027</span>
                                </div>
                                <div class="info-grid">
                                    <div class="info-item"><span>Piso Salarial Inicial</span><strong>R$ 13.200,00</strong></div>
                                    <div class="info-item"><span>Previsão de Edital</span><strong class="data">Março / 2027</strong></div>
                                </div>
                                <p class="descricao">O Tribunal Regional do Trabalho oferece vagas de nível superior com alta estabilidade. O cargo exige conhecimento em governança de TI, gestão de banco de dados e engenharia de software.</p>
                                <button class="btn-preparar" onclick="alert('Acessando materiais para o TRT...')">Acessar Plano de Estudos</button>
                            </div>

                            <!-- Concurso 4 -->
                            <div class="concurso-card">
                                <div class="card-top">
                                    <h3>4. Polícia Federal - Perito de TI</h3>
                                    <span class="badge-status">Em Estudos</span>
                                </div>
                                <div class="info-grid">
                                    <div class="info-item"><span>Piso Salarial Inicial</span><strong>R$ 23.600,00</strong></div>
                                    <div class="info-item"><span>Previsão de Edital</span><strong class="data">Segundo Semestre / 2027</strong></div>
                                </div>
                                <p class="descricao">Um dos concursos mais almejados da carreira policial de TI. Atuação direta em computação forense, investigação cibernética e inteligência de dados.</p>
                                <button class="btn-preparar" onclick="alert('Acessando guia de preparação da PF...')">Acessar Plano de Estudos</button>
                            </div>

                            <!-- Concurso 5 -->
                            <div class="concurso-card">
                                <div class="card-top">
                                    <h3>5. DATAPREV - Tecnologia da Informação</h3>
                                    <span class="badge-status">Confirmado</span>
                                </div>
                                <div class="info-grid">
                                    <div class="info-item"><span>Piso Salarial Inicial</span><strong>R$ 8.700,00</strong></div>
                                    <div class="info-item"><span>Previsão de Edital</span><strong class="data">Outubro / 2026</strong></div>
                                </div>
                                <p class="descricao">Vagas voltadas para governança de TI, infraestrutura, desenvolvimento Java e Python. Excelente plano de cargos e salários na administração pública federal.</p>
                                <button class="btn-preparar" onclick="alert('Acessando questões do simulado DATAPREV...')">Acessar Plano de Estudos</button>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `;

            const novaAbaConcursos = window.open();
            if (novaAbaConcursos) {
                novaAbaConcursos.document.write(conteudoConcursos);
                novaAbaConcursos.document.close();
            }
        });
    }
});