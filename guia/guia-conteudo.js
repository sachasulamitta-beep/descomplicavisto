/* ===== Guia Prático do Visto — conteúdo (Descomplica Visto) ===== */
/* Ícones reutilizáveis */
const I = {
  pass:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.6 6 3.6 9s-1.1 6.4-3.6 9c-2.5-2.6-3.6-6-3.6-9S9.5 5.6 12 3z"/>',
  plane:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/>',
  chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  doc:'<path d="M4 4h6l2 2h8v12a2 2 0 0 1-2 2H4z"/><path d="M9 14l2 2 4-4"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  ck:'<path d="M5 12l5 5L20 6"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  warn:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  money:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>'
};
const sv=(p,w=20)=>`<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">${p}</svg>`;

/* Helpers de bloco */
function slot(id,ph,ratio){return `<div class="photo reveal"><image-slot id="${id}" shape="rect" fit="cover" style="aspect-ratio:${ratio||'16/9'}" placeholder="${ph}"></image-slot></div>`;}
function gfx(scene,cap){return `<div class="gfx reveal"><span class="dots"></span>${scene}<span class="cap">${cap}</span></div>`;}

/* Cenas gráficas (na identidade da marca) */
const SCENE_PASSPORT=`<svg class="scene" viewBox="0 0 460 260" fill="none">
  <defs><linearGradient id="gP" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FCEFC0"/><stop offset=".5" stop-color="#EBC56A"/><stop offset="1" stop-color="#A9781F"/></linearGradient></defs>
  <path d="M30 70 L300 70 A8 8 0 0 1 308 78 L308 232 A8 8 0 0 1 300 240 L30 240 A8 8 0 0 1 22 232 L22 78 A8 8 0 0 1 30 70Z" fill="#0a1f4d" stroke="url(#gP)" stroke-width="2"/>
  <path d="M22 78 A8 8 0 0 1 30 70 L60 70 L60 240 L30 240 A8 8 0 0 1 22 232Z" fill="#081634" stroke="url(#gP)" stroke-width="1.4"/>
  <circle cx="184" cy="128" r="36" fill="none" stroke="url(#gP)" stroke-width="1.6"/>
  <ellipse cx="184" cy="128" rx="15" ry="36" fill="none" stroke="url(#gP)" stroke-width="1"/><path d="M148 128h72M184 92v72" stroke="url(#gP)" stroke-width="1"/>
  <text x="184" y="196" text-anchor="middle" fill="#F7E2A0" font-family="Cinzel,serif" font-size="13" letter-spacing="3">PASSAPORTE</text>
  <text x="184" y="214" text-anchor="middle" fill="#9DB0D6" font-family="Cinzel,serif" font-size="7" letter-spacing="2">REPÚBLICA FEDERATIVA DO BRASIL</text>
  <g transform="rotate(-12 380 110)"><rect x="330" y="60" width="110" height="150" rx="8" fill="#0c2350" stroke="url(#gP)" stroke-width="1.6"/>
  <path d="M348 92h74M348 108h74M348 124h52" stroke="#3a5da0" stroke-width="3" stroke-linecap="round"/>
  <circle cx="385" cy="170" r="18" fill="none" stroke="url(#gP)" stroke-width="1.4"/><path d="M377 170l6 6 10-12" stroke="url(#gP)" stroke-width="2" fill="none" stroke-linecap="round"/></g>
  <path d="M40 40 C140 12 300 18 430 30" stroke="url(#gP)" stroke-width="1.4" stroke-dasharray="2 8" stroke-linecap="round" opacity=".7"/>
  <path d="M430 30l-12 -4 4 9z" fill="#F7E2A0"/>
</svg>`;
const SCENE_FORM=`<svg class="scene" viewBox="0 0 460 280" fill="none">
  <defs><linearGradient id="gF" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FCEFC0"/><stop offset=".5" stop-color="#EBC56A"/><stop offset="1" stop-color="#A9781F"/></linearGradient></defs>
  <rect x="40" y="34" width="380" height="212" rx="12" fill="#0a1f4d" stroke="url(#gF)" stroke-width="1.8"/>
  <path d="M40 58 A12 12 0 0 1 52 46 L408 46 A12 12 0 0 1 420 58 L420 70 L40 70Z" fill="#081634"/>
  <circle cx="60" cy="58" r="4" fill="#cf6a5e"/><circle cx="76" cy="58" r="4" fill="#EBC56A"/><circle cx="92" cy="58" r="4" fill="#1f9e57"/>
  <rect x="150" y="52" width="200" height="12" rx="6" fill="#0c2350"/><text x="250" y="61" text-anchor="middle" fill="#6F82A8" font-family="Hanken Grotesk,sans-serif" font-size="7">ceac.state.gov · DS-160</text>
  <text x="66" y="100" fill="#F7E2A0" font-family="Cinzel,serif" font-size="9" letter-spacing="2">FORMULÁRIO DS-160</text>
  <g>
  <text x="66" y="126" fill="#9DB0D6" font-family="Hanken Grotesk,sans-serif" font-size="8">Surnames</text><rect x="66" y="132" width="150" height="16" rx="4" fill="#0c2350" stroke="#274d8f" stroke-width="1"/>
  <text x="240" y="126" fill="#9DB0D6" font-family="Hanken Grotesk,sans-serif" font-size="8">Given Names</text><rect x="240" y="132" width="150" height="16" rx="4" fill="#0c2350" stroke="#274d8f" stroke-width="1"/>
  <text x="66" y="172" fill="#9DB0D6" font-family="Hanken Grotesk,sans-serif" font-size="8">Visa Class</text><rect x="66" y="178" width="150" height="16" rx="4" fill="#16306a" stroke="url(#gF)" stroke-width="1"/><text x="74" y="190" fill="#F7E2A0" font-family="Hanken Grotesk,sans-serif" font-size="8">B1 / B2</text>
  <text x="240" y="172" fill="#9DB0D6" font-family="Hanken Grotesk,sans-serif" font-size="8">Duration</text><rect x="240" y="178" width="150" height="16" rx="4" fill="#0c2350" stroke="#274d8f" stroke-width="1"/><text x="248" y="190" fill="#9DB0D6" font-family="Hanken Grotesk,sans-serif" font-size="8">15 dias</text>
  </g>
  <circle cx="372" cy="222" r="15" fill="url(#gF)"/><path d="M364 222l6 6 11-13" stroke="#0a1f4d" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const SCENE_INTERVIEW=`<svg class="scene" viewBox="0 0 460 270" fill="none">
  <defs><linearGradient id="gI" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FCEFC0"/><stop offset=".5" stop-color="#EBC56A"/><stop offset="1" stop-color="#A9781F"/></linearGradient></defs>
  <rect x="150" y="40" width="160" height="150" rx="6" fill="#0c2350" stroke="url(#gI)" stroke-width="1.8"/>
  <path d="M150 96 H310 M230 40 V190" stroke="url(#gI)" stroke-width="1" opacity=".5"/>
  <path d="M120 190 H340 L352 214 H108 Z" fill="#081634" stroke="url(#gI)" stroke-width="1.4"/>
  <rect x="120" y="214" width="220" height="10" fill="#0a1f4d" stroke="url(#gI)" stroke-width="1"/>
  <circle cx="190" cy="150" r="20" fill="none" stroke="#3a5da0" stroke-width="2"/><path d="M168 182a22 22 0 0 1 44 0" fill="none" stroke="#3a5da0" stroke-width="2"/>
  <circle cx="270" cy="150" r="20" fill="none" stroke="url(#gI)" stroke-width="2"/><path d="M248 182a22 22 0 0 1 44 0" fill="none" stroke="url(#gI)" stroke-width="2"/>
  <g><rect x="40" y="60" width="96" height="42" rx="10" fill="#0a1f4d" stroke="url(#gI)" stroke-width="1.4"/><path d="M64 102l-6 14 18-12z" fill="#0a1f4d" stroke="url(#gI)" stroke-width="1.4"/><path d="M58 76h60M58 86h40" stroke="#EBC56A" stroke-width="3" stroke-linecap="round"/></g>
  <g><rect x="330" y="118" width="90" height="40" rx="10" fill="#16306a" stroke="url(#gI)" stroke-width="1.4"/><path d="M398 158l6 13-18-11z" fill="#16306a" stroke="url(#gI)" stroke-width="1.4"/><path d="M346 132h58M346 142h36" stroke="#9DB0D6" stroke-width="3" stroke-linecap="round"/></g>
  <path d="M210 26 C260 8 320 12 380 22" stroke="url(#gI)" stroke-width="1.2" stroke-dasharray="2 8" stroke-linecap="round" opacity=".6"/>
</svg>`;

const CHAPTERS=[
{ id:'cap1', n:'01', title:'Passaporte: o primeiro passo', icon:I.pass,
  body:`
  <p class="lead">Antes de qualquer coisa, você precisa de um passaporte válido. Ele é o documento que comprova sua identidade internacionalmente e é exigido em todas as etapas do processo de visto.</p>
  ${gfx(SCENE_PASSPORT,'O passaporte é o seu documento principal')}
  <h3>Validade mínima</h3>
  <p>O passaporte deve ter validade de <strong>pelo menos seis meses além da data prevista da sua viagem</strong>. Se o seu estiver vencido — ou perto disso — providencie a emissão ou renovação <strong>antes</strong> de iniciar o processo do visto.</p>
  <div class="steps reveal">
    <div class="step"><span class="sn">1</span><div class="st"><h4>Agende no Polícia Federal</h4><p>A emissão e renovação são feitas pelo site da Polícia Federal, com agendamento presencial.</p></div></div>
    <div class="step"><span class="sn">2</span><div class="st"><h4>Pague a GRU</h4><p>A taxa é paga por meio da Guia de Recolhimento da União, gerada no próprio sistema.</p></div></div>
    <div class="step"><span class="sn">3</span><div class="st"><h4>Compareça com os documentos</h4><p>Leve RG, CPF, comprovante de pagamento e foto, conforme a lista do agendamento.</p></div></div>
  </div>
  <div class="alert gold">${sv(I.info)}<div>O número do passaporte será solicitado em <b>várias etapas</b> do processo. Tenha-o sempre à mão e guarde o documento em local seguro.</div></div>
  <div class="alert warn">${sv(I.warn)}<div><b>Atenção:</b> não inicie o preenchimento do formulário de visto com um passaporte prestes a vencer. Inconsistências de validade podem comprometer toda a solicitação.</div></div>`
},
{ id:'cap2', n:'02', title:'O que é um visto e como funciona', icon:I.globe,
  body:`
  <p class="lead">O visto é uma <strong>autorização para solicitar a entrada</strong> em um país estrangeiro. É importante entender: o visto não garante a entrada — ele permite que você se apresente na fronteira e peça para entrar.</p>
  <p>No caso dos Estados Unidos, o visto é concedido (ou não) por um <strong>cônsul</strong>, após a análise do seu formulário e de uma entrevista. A decisão é soberana e exclusiva do consulado.</p>
  <div class="fcards reveal">
    <div class="fcard"><div class="ic">${sv(I.doc,22)}</div><h4>Formulário</h4><p>Você informa seus dados, a finalidade da viagem e seu histórico no formulário oficial DS-160.</p></div>
    <div class="fcard"><div class="ic">${sv(I.money,22)}</div><h4>Taxa consular</h4><p>O pagamento da taxa (MRV) é obrigatório e libera o agendamento da entrevista.</p></div>
    <div class="fcard"><div class="ic">${sv(I.chat,22)}</div><h4>Entrevista</h4><p>O cônsul avalia seu perfil e decide pela aprovação ou negativa do visto.</p></div>
    <div class="fcard"><div class="ic">${sv(I.plane,22)}</div><h4>Emissão</h4><p>Aprovado, o visto é carimbado no passaporte e devolvido a você.</p></div>
  </div>
  <div class="alert info">${sv(I.info)}<div>Visto é <b>processo</b>, não é sorte. Cada etapa bem-feita aumenta as suas chances — e cada detalhe descuidado pode custar a aprovação.</div></div>`
},
{ id:'cap3', n:'03', title:'Tipos de visto e qual escolher', icon:I.globe,
  body:`
  <p class="lead">Existem diferentes categorias de visto, de acordo com o objetivo da sua viagem. Conhecer o tipo certo evita erros logo no início do processo.</p>
  <div class="tbl reveal"><table>
    <thead><tr><th>Categoria</th><th>Para quê serve</th></tr></thead>
    <tbody>
      <tr><td><b>B1</b></td><td>Negócios — reuniões, eventos, conferências, negociações.</td></tr>
      <tr><td><b>B2</b></td><td>Turismo, lazer, tratamento médico e visita a familiares.</td></tr>
      <tr><td><b>B1/B2</b></td><td>Categoria combinada — atende negócios e turismo. É a mais comum.</td></tr>
      <tr><td><b>F1</b></td><td>Estudo — cursos acadêmicos e programas de intercâmbio.</td></tr>
      <tr><td><b>H/L</b></td><td>Trabalho — exige oferta de emprego e processo específico do empregador.</td></tr>
    </tbody>
  </table></div>
  <div class="alert gold">${sv(I.shield)}<div>Para a maioria dos viajantes, a opção correta é o <b>B1/B2</b> — ela é mais abrangente e cobre tanto turismo quanto negócios, sem precisar escolher só um propósito.</div></div>
  <h3>Visto de trabalho: o que esperar</h3>
  <div class="cols2 reveal">
    <div class="col-card yes"><h4>${sv(I.ck,18)} Perfil esperado</h4><ul>
      <li>${sv(I.ck,16)}<span>Oferta formal de emprego nos EUA</span></li>
      <li>${sv(I.ck,16)}<span>Qualificações profissionais comprovadas</span></li>
      <li>${sv(I.ck,16)}<span>Processo conduzido pelo empregador</span></li>
    </ul></div>
    <div class="col-card no"><h4>${sv(I.x,18)} Erros que reprovam</h4><ul>
      <li>${sv(I.x,16)}<span>Mudar de emprego sem transferência de visto</span></li>
      <li>${sv(I.x,16)}<span>Permanecer após o término do contrato</span></li>
      <li>${sv(I.x,16)}<span>Trabalhar com visto de turismo</span></li>
    </ul></div>
  </div>`
},
{ id:'cap4', n:'04', title:'O formulário DS-160', icon:I.doc,
  body:`
  <p class="lead">O DS-160 é o formulário oficial de solicitação do visto americano. É um questionário online detalhado — e a base de toda a sua solicitação.</p>
  ${gfx(SCENE_FORM,'DS-160 — o formulário oficial de solicitação')}
  <p>Reserve de <strong>uma hora a uma hora e meia</strong> em um momento tranquilo. A regra mais importante: preencha tudo com atenção, porque <strong>depois de finalizado, o formulário não pode ser editado</strong>.</p>
  <h3>Regras de ouro do preenchimento</h3>
  <div class="steps reveal">
    <div class="step"><span class="sn">1</span><div class="st"><h4>Idêntico ao passaporte</h4><p>Nomes, sobrenomes e datas devem ser exatamente iguais aos do passaporte.</p></div></div>
    <div class="step"><span class="sn">2</span><div class="st"><h4>Guarde o Application ID</h4><p>O código gerado no início é o que recupera o formulário se a página expirar. Anote imediatamente.</p></div></div>
    <div class="step"><span class="sn">3</span><div class="st"><h4>Estadia curta</h4><p>Informe um período de até 30 dias. Estadias longas exigem maior comprovação financeira.</p></div></div>
    <div class="step"><span class="sn">4</span><div class="st"><h4>Liste todos os países</h4><p>Registre todas as viagens dos últimos 5 anos — isso fortalece o seu perfil de viajante.</p></div></div>
  </div>
  <div class="alert warn">${sv(I.warn)}<div><b>Sem edição depois de enviar:</b> revise cada campo antes de finalizar. Um erro obriga a refazer o formulário inteiro.</div></div>`
},
{ id:'cap5', n:'05', title:'Taxa consular e agendamento', icon:I.cal,
  body:`
  <p class="lead">Com o formulário pronto, você paga a taxa consular (MRV) e agenda a entrevista — tudo pelo site oficial da CASV.</p>
  <h3>O valor e as formas de pagamento</h3>
  <p>A taxa do visto B1/B2 é de <strong>US$ 185 por pessoa</strong>, e <strong>não é reembolsável nem transferível</strong>. Há três formas de pagar, cada uma com uma particularidade:</p>
  <div class="tbl reveal"><table>
    <thead><tr><th>Forma</th><th>Particularidade</th></tr></thead>
    <tbody>
      <tr><td><b>Cartão</b></td><td>Há cobrança de IOF, mas o calendário abre na hora.</td></tr>
      <tr><td><b>Pix</b></td><td>Pago por QR Code (válido ~1h). Libera o calendário rapidamente.</td></tr>
      <tr><td><b>Boleto</b></td><td>O calendário só abre <b>24h após</b> o pagamento. Evite se tiver pressa.</td></tr>
    </tbody>
  </table></div>
  <div class="alert gold">${sv(I.cal)}<div>O posto consular escolhido no agendamento precisa ser <b>o mesmo</b> informado no DS-160. Se for diferente, o agendamento não é válido.</div></div>
  <h3>Entrega do passaporte</h3>
  <p>Após a aprovação, você pode <strong>retirar o passaporte em um centro CASV</strong> sem custo, ou optar pela <strong>entrega em casa</strong> pelos Correios, mediante uma taxa adicional (pagamento somente no cartão).</p>`
},
{ id:'cap6', n:'06', title:'A entrevista consular', icon:I.chat,
  body:`
  <p class="lead">A entrevista é o momento decisivo. Muitas pessoas temem essa etapa — mas, com preparação adequada, ela se torna uma oportunidade de fortalecer a sua solicitação.</p>
  ${gfx(SCENE_INTERVIEW,'A entrevista consular — o momento decisivo')}
  <h3>O objetivo real da entrevista</h3>
  <p>O cônsul quer responder a uma pergunta central: <strong>você tem motivos fortes para voltar ao Brasil?</strong> Tudo gira em torno dos seus vínculos — trabalho, família, estudos e compromissos no país.</p>
  <h3>Perguntas mais comuns</h3>
  <div class="qa reveal"><button class="q"><span class="qt">"Qual é o motivo da sua viagem?"</span><span class="chev">${sv('<path d="M6 9l6 6 6-6"/>',18)}</span></button><div class="a"><p>Responda de forma simples e específica, com propósito e tempo definidos.</p><div class="ex">"Vou a turismo, conhecer Nova York e os parques na Flórida, por cerca de 15 dias."</div></div></div>
  <div class="qa reveal"><button class="q"><span class="qt">"O que você faz no Brasil?"</span><span class="chev">${sv('<path d="M6 9l6 6 6-6"/>',18)}</span></button><div class="a"><p>Fale do seu trabalho com firmeza — vínculo profissional é um forte motivo de retorno.</p><div class="ex">"Trabalho como enfermeira há 6 anos em um hospital em Natal."</div></div></div>
  <div class="qa reveal"><button class="q"><span class="qt">"O que te faz voltar ao Brasil?"</span><span class="chev">${sv('<path d="M6 9l6 6 6-6"/>',18)}</span></button><div class="a"><p>Cite âncoras concretas: emprego, família, imóvel, negócio.</p><div class="ex">"Meu emprego, meus filhos e minha casa estão todos aqui."</div></div></div>
  <div class="cols2 reveal">
    <div class="col-card yes"><h4>${sv(I.ck,18)} No dia, faça</h4><ul>
      <li>${sv(I.ck,16)}<span>Chegue com antecedência</span></li>
      <li>${sv(I.ck,16)}<span>Vista-se de forma social e discreta</span></li>
      <li>${sv(I.ck,16)}<span>Responda curto, verdadeiro e com calma</span></li>
      <li>${sv(I.ck,16)}<span>Leve os documentos impressos</span></li>
    </ul></div>
    <div class="col-card no"><h4>${sv(I.x,18)} No dia, evite</h4><ul>
      <li>${sv(I.x,16)}<span>Levar celular ou eletrônicos (não entram)</span></li>
      <li>${sv(I.x,16)}<span>Respostas decoradas e longas</span></li>
      <li>${sv(I.x,16)}<span>Contradizer o que está no DS-160</span></li>
      <li>${sv(I.x,16)}<span>Demonstrar insegurança ou pressa</span></li>
    </ul></div>
  </div>`
},
{ id:'cap7', n:'07', title:'Documentos e checklist final', icon:I.doc,
  body:`
  <p class="lead">Organização é metade do caminho. Mantenha seus documentos legíveis, organizados e — quando exigido — traduzidos por tradutor juramentado.</p>
  <div class="checks reveal">
    <div class="ch-sub">Documentos essenciais</div>
    <div class="ci" data-k="c1"><span class="bx">${sv(I.ck,13)}</span><span class="tx">Passaporte válido (6+ meses além da viagem)</span></div>
    <div class="ci" data-k="c2"><span class="bx">${sv(I.ck,13)}</span><span class="tx">Página de confirmação do DS-160</span></div>
    <div class="ci" data-k="c3"><span class="bx">${sv(I.ck,13)}</span><span class="tx">Confirmação do agendamento da entrevista</span></div>
    <div class="ci" data-k="c4"><span class="bx">${sv(I.ck,13)}</span><span class="tx">Comprovante de pagamento da taxa (MRV)</span></div>
    <div class="ch-sub">Comprovações de vínculo (leve, se tiver)</div>
    <div class="ci" data-k="c5"><span class="bx">${sv(I.ck,13)}</span><span class="tx">Comprovante de renda (holerite / extrato)</span></div>
    <div class="ci" data-k="c6"><span class="bx">${sv(I.ck,13)}</span><span class="tx">Comprovante de vínculo empregatício</span></div>
    <div class="ci" data-k="c7"><span class="bx">${sv(I.ck,13)}</span><span class="tx">Documentos de imóvel, negócio ou estudos</span></div>
    <div class="ci" data-k="c8"><span class="bx">${sv(I.ck,13)}</span><span class="tx">Foto 5×5 impressa (Recife e Porto Alegre)</span></div>
  </div>
  <div class="alert info">${sv(I.info)}<div>Organize tudo em <b>pastas ou envelopes identificados</b> para facilitar o acesso durante a entrevista. Você pode não precisar mostrar todos — mas é melhor tê-los à mão.</div></div>`
},
{ id:'cap8', n:'08', title:'Quem é a especialista por trás deste guia', icon:I.user,
  body:`
  <div class="spec reveal">
    <div class="spec-photo"><image-slot id="p-isis" shape="rect" fit="cover" src="assets/isis-hero-pro.jpeg" placeholder="Foto profissional real da Isis"></image-slot></div>
    <div>
      <p class="lead" style="margin-top:0">Prazer, eu sou Isis Salles.</p>
      <p>Há mais de 14 anos ajudo brasileiros a realizarem o sonho de viajar para o exterior com segurança e orientação profissional. Ao longo da minha trajetória, desenvolvi uma metodologia própria de preparação para o processo consular — com foco especial na entrevista do visto.</p>
      <p>Este guia reúne, de forma gratuita, o essencial que todo solicitante deveria saber antes de começar. Meu compromisso é simples: tratar o seu visto com a mesma atenção que daria ao meu.</p>
      <div class="sig">Isis Salles<small>Especialista em Assessoria Consular</small></div>
    </div>
  </div>
  <div class="cta reveal">
    <div class="k">Quer ir além deste guia?</div>
    <h3>Conheça a Assessoria em Ebook</h3>
    <p>O processo completo, do início ao fim, com simulador do DS-160, vídeos explicativos e treinamento de entrevista — a assessoria da especialista, no seu ritmo.</p>
    <div class="btns">
      <a class="btn btn-wa" href="https://wa.me/5584999185400?text=Li%20o%20guia%20e%20quero%20saber%20mais%20sobre%20a%20assessoria." target="_blank" rel="noopener">${sv('<path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/>',18)} Falar com a especialista</a>
      <a class="btn btn-ghost" href="Descomplica Visto.html">Ver o site</a>
    </div>
  </div>`
}
];

function buildChapter(c){
  return `<section class="chap" id="${c.id}" data-screen-label="Cap ${c.n}">
    <div class="chap-head reveal">
      <span class="chap-num">${c.n}</span>
      <div><span class="k">Capítulo ${c.n}</span><h2 class="chap-title">${c.title}</h2></div>
    </div>
    ${c.body}
  </section>`;
}
