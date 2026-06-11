/* =========================================================================
   MOTO MANIA CG — BANCO DE PRODUTOS
   -------------------------------------------------------------------------
   Fonte única de dados do catálogo. Para adicionar / editar um produto,
   mexa SOMENTE neste arquivo. O index.html e o detalhes-produto.html leem
   tudo daqui automaticamente.

   ESTRUTURA: cada item de MODELOS é UM MODELO de veículo. Se o mesmo modelo
   existe em várias cores, todas ficam dentro de "cores" (uma página só, com
   seletor de cor no detalhe).

   Campos de cada MODELO:
     id        -> slug único (vai na URL: detalhes-produto.html?id=slug)
     modelo    -> nome do modelo (título / card)
     categoria -> "motos" | "triciclos" | "patinetes" | "drifts"  (filtro)
     novidade  -> (opcional) true = mostra selo "Novidade" no card e entra
                  no filtro "Só novidades". Basta apagar a linha quando
                  o modelo deixar de ser lançamento.
     destaque  -> (opcional) true = selo "Destaque" no card (carro-chefe).
     lugares   -> (opcional) nº de pessoas (1, 2, 3...). Quando omitido o
                  site assume 2. Gera o filtro "Lugares".
     descricao -> texto comercial que aparece no detalhe
     specs     -> ficha técnica (objeto; campos vazios não aparecem)
     cores     -> lista de variações de cor. Cada cor tem:
                    cor   -> nome da cor
                    loja  -> unidade onde está
                    fotos -> arquivos da pasta (1ª = capa). 1ª cor = capa do card
                    ref   -> (opcional) id numérico antigo, p/ links legados

   ATENÇÃO: parte das specs vem de ficha oficial e parte é estimada pela
   classe de potência (modelos sem ficha pública). Sempre confira a etiqueta
   da unidade física antes de tratar como definitivo.
   ========================================================================= */

// Pasta onde estão as fotos enviadas
window.FOTOS_DIR = "fotos pro claude adicionar";

// Monta o caminho final já com encoding (espaços, etc.)
window.fotoSrc = function (arquivo) {
    return encodeURIComponent(window.FOTOS_DIR) + "/" + encodeURIComponent(arquivo);
};

window.MODELOS = [
    {
        id: "triciclo-duos-eko-10",
        modelo: "Triciclo Duos Eko-10",
        categoria: "triciclos",
        lugares: 1,
        descricao: "O Triciclo Elétrico Duos Eko-10 une a estabilidade de três rodas com a praticidade de não exigir CNH nem emplacamento. Com motor de 1000W, marcha à ré, alarme e bagageiro amplo, é ideal para o dia a dia urbano com total segurança e conforto.",
        specs: {
            motor: "1000W brushless (traseiro)",
            bateria: "Lítio 60V 20Ah",
            autonomia: "Até 45 km por carga",
            velocidade: "25 km/h (3 níveis)",
            freios: "Disco hidráulico dianteiro + tambor traseiro",
            suspensao: "Dianteira e traseira",
            pneus: "Aro 10\" tubeless",
            capacidade: "150 kg",
            tempoCarga: "6 a 8 horas"
        },
        cores: [
            { cor: "Vermelho", loja: "Shopping Luiza Motta", fotos: ["1.jpeg", "1 (1).jpeg", "1 (2).jpeg"], ref: 1 }
        ]
    },
    {
        id: "eko-7",
        modelo: "Eko 7",
        categoria: "motos",
        descricao: "A Scooter Elétrica Duos Eko 7 é um ciclomotor leve e econômico, autopropelido (sem CNH e sem emplacamento). Com farol LED, painel digital, alarme e setas, oferece até 50 km de autonomia — uma opção estilosa e prática para trajetos urbanos do dia a dia.",
        specs: {
            motor: "600W",
            bateria: "Chumbo 48V 20Ah",
            autonomia: "Até 50 km por carga",
            velocidade: "32 km/h",
            freios: "Tambor dianteiro e traseiro",
            suspensao: "Dianteira e traseira",
            pneus: "Aro 12\"",
            capacidade: "120 kg",
            tempoCarga: "7 a 8 horas"
        },
        cores: [
            { cor: "Verde", loja: "Shopping Luiza Motta", fotos: ["2 (1).jpeg", "2 (2).jpeg"], ref: 2 }
        ]
    },
    {
        id: "raptor-pro",
        modelo: "Raptor Pro",
        categoria: "motos",
        descricao: "A Trixx Raptor Pro 1000W é uma scooter elétrica robusta e equipada, isenta de CNH e emplacamento. Traz cartão NFC, alarme antifurto, piloto automático, freio dianteiro a disco hidráulico e 3 níveis de velocidade. Combina visual agressivo e ótimo custo-benefício para a mobilidade urbana.",
        specs: {
            motor: "1000W brushless",
            bateria: "Chumbo 60V 20Ah",
            autonomia: "40 a 50 km por carga",
            velocidade: "32 km/h (3 níveis)",
            freios: "Disco hidráulico dianteiro + tambor traseiro",
            suspensao: "Hidráulica dianteira + amortecedor traseiro",
            pneus: "Aro 10\" tubeless",
            capacidade: "150 kg",
            tempoCarga: "7 a 9 horas"
        },
        cores: [
            { cor: "Branca", loja: "Shopping Luiza Motta", fotos: ["3 (1).jpeg", "3 (2).jpeg"], ref: 3 },
            { cor: "Verde camaleão", loja: "Anthenor Navarro – Esperança", fotos: ["19 (1).jpeg", "19 (2).jpeg"], ref: 19 }
        ]
    },
    {
        id: "jet-1000w",
        modelo: "JET 1000W",
        categoria: "motos",
        destaque: true,
        descricao: "A Scooter Elétrica JET 1000W (MotoChefe) é autopropelida — sem CNH e sem emplacamento — com bateria de lítio removível para carregar onde quiser. Oferece banco duplo, baú traseiro, farol Full LED, marcha à ré e alarme antifurto. Resistente à chuva, é prática, econômica e ideal para o trânsito urbano.",
        specs: {
            motor: "1000W",
            bateria: "Lítio 60V 20Ah (removível)",
            autonomia: "Até 45 km por carga",
            velocidade: "32 km/h",
            freios: "Disco hidráulico (dianteiro e traseiro)",
            suspensao: "Amortecedor duplo dianteiro + traseira dupla",
            pneus: "Aro 10\" sem câmara",
            capacidade: "180 kg",
            tempoCarga: "Até 5 horas (carregador turbo)"
        },
        cores: [
            { cor: "Preta", loja: "Shopping Luiza Motta", fotos: ["4 (1).jpeg", "4 (2).jpeg", "4 (3).jpeg", "4 (4).jpeg"], ref: 4 },
            { cor: "Prata", loja: "Anthenor Navarro – Esperança", fotos: ["9 (1).jpeg", "9 (2).jpeg"], ref: 9 }
        ]
    },
    {
        id: "maxus-duact-litio",
        modelo: "Maxus Duact Lítio",
        categoria: "motos",
        destaque: true,
        descricao: "A Maxus Duact é uma scooter elétrica a lítio pensada para a mobilidade urbana sem complicação: dispensa CNH e emplacamento. Com motor de 1000W, painel digital, alarme antifurto, tecnologia de cartão de aproximação (NFC) e baú integrado, une autonomia generosa e conforto no dia a dia.",
        specs: {
            motor: "1000W (torque 60 Nm)",
            bateria: "Lítio 60V 20Ah (removível)",
            autonomia: "Até 80 km por carga",
            velocidade: "32 km/h",
            freios: "Disco hidráulico ventilado (dianteiro e traseiro)",
            suspensao: "Amortecedores reguláveis (DuactLink)",
            pneus: "Aro 10\" tubeless",
            capacidade: "150 kg",
            tempoCarga: "6 horas"
        },
        cores: [
            { cor: "Verde", loja: "Shopping Luiza Motta", fotos: ["5 (1).jpeg", "5 (2).jpeg"], ref: 5 },
            { cor: "Vermelha", loja: "Anthenor Navarro – Esperança", fotos: ["10 (1).jpeg", "10 (2).jpeg"], ref: 10 },
            { cor: "Azul escuro", loja: "Anthenor Navarro – Esperança", fotos: ["11 (1).jpeg", "11 (2).jpeg"], ref: 11 },
            { cor: "Rosê", loja: "Anthenor Navarro – Esperança", fotos: ["12 (1).jpeg", "12 (2).jpeg"], ref: 12 },
            { cor: "Verde", loja: "Anthenor Navarro – Esperança", fotos: ["13 (1).jpeg", "13 (2).jpeg", "13 (3).jpeg"], ref: 13 }
        ]
    },
    {
        id: "monaco-2026",
        modelo: "Mônaco 2026",
        categoria: "motos",
        descricao: "A Conduzza Mônaco 2026 é uma scooter elétrica de visual moderno e linhas elegantes, com iluminação full LED, painel digital com tecnologia NFC e baú interno sob o banco. Motor de 1000W e bateria de 72V entregam desempenho estável no trânsito urbano, sem exigir CNH nem emplacamento.",
        specs: {
            motor: "1000W",
            bateria: "72V 20Ah",
            autonomia: "Até 80 km por carga",
            velocidade: "32 km/h",
            freios: "Disco hidráulico dianteiro e traseiro",
            suspensao: "Hidráulica dianteira e traseira",
            pneus: "Aro 10\" tubeless (3.5-10)",
            capacidade: "150 kg",
            tempoCarga: "6 a 8 horas"
        },
        cores: [
            { cor: "Branca", loja: "Shopping Luiza Motta", fotos: ["6 (1).jpeg", "6 (2).jpeg", "6 (3).jpeg", "6 (4).jpeg"], ref: 6 }
        ]
    },
    {
        id: "triciclo-bonmad-1000w",
        modelo: "Triciclo Bonmad 1000W",
        categoria: "triciclos",
        lugares: 3,
        descricao: "O Triciclo Elétrico Bonmad 1000W combina a estabilidade de três rodas com a liberdade de não exigir CNH nem emplacamento. Com cesta frontal, banco com garupa para até 3 pessoas e bateria de lítio removível, é uma opção prática tanto para a família quanto para pequenas entregas no dia a dia urbano.",
        specs: {
            motor: "1000W",
            bateria: "Lítio 60V 20Ah (removível)",
            autonomia: "Até 55 km por carga",
            velocidade: "32 km/h",
            freios: "Disco hidráulico traseiro",
            suspensao: "Dianteira + roda de segurança",
            pneus: "Aro 10\" liga leve",
            capacidade: "150 kg (até 3 pessoas)",
            tempoCarga: "5 a 6 horas"
        },
        cores: [
            { cor: "Preto", loja: "Shopping Luiza Motta", fotos: ["7 (1).jpeg", "7 (2).jpeg"], ref: 7 }
        ]
    },
    {
        id: "yoo-y200-350w",
        modelo: "Yoo Y200 350W",
        categoria: "patinetes",
        descricao: "A Yoo Y200 350W é uma bicicleta/patinete elétrico autopropelido fabricado no Brasil, homologado pelo CONTRAN e que dispensa CNH e emplacamento. Com farol LED, buzina, painel digital, cestinha frontal e dois assentos, é ideal para deslocamentos urbanos curtos e econômicos.",
        specs: {
            motor: "350W 48V (picos de 500W)",
            bateria: "Chumbo 48V 12Ah",
            autonomia: "Até 30 km por carga",
            velocidade: "25 a 32 km/h",
            freios: "Tambor 110mm com corte automático",
            suspensao: "Dianteira e traseira",
            pneus: "Aro 14\" tubeless",
            capacidade: "120 kg",
            tempoCarga: "6 a 8 horas"
        },
        cores: [
            { cor: "Faixa Vermelha", loja: "Shopping Luiza Motta", fotos: ["8 (1).jpeg", "8 (2).jpeg"], ref: 8 }
        ]
    },
    {
        id: "gts-500w",
        modelo: "GTS 500W",
        categoria: "motos",
        descricao: "A GTS 500W é uma das scooters elétricas urbanas mais populares do Brasil para quem quer mobilidade sem CNH, placa ou IPVA. Com visual retrô, faróis de LED e painel digital, encara o dia a dia da cidade com conforto e economia em trajetos curtos e médios.",
        specs: {
            motor: "500W brushless",
            bateria: "Chumbo 48V 12Ah",
            autonomia: "30 a 40 km por carga",
            velocidade: "32 km/h",
            freios: "Tambor dianteiro e traseiro",
            suspensao: "Telescópica dianteira + dupla traseira",
            pneus: "Aro 14\"",
            capacidade: "120 kg",
            tempoCarga: "6 a 8 horas"
        },
        cores: [
            { cor: "Branca com rosa", loja: "Anthenor Navarro – Esperança", fotos: ["14 (1).jpeg", "14 (2).jpeg"], ref: 14 }
        ]
    },
    {
        id: "centry-mini-500w",
        modelo: "Centry Mini 500W",
        categoria: "patinetes",
        descricao: "A Centry Mini 500W é uma scooter elétrica compacta pensada para a mobilidade urbana leve do dia a dia, sem necessidade de CNH. Tamanho reduzido, fácil de guardar e econômica, é ideal para trajetos curtos na cidade.",
        specs: {
            motor: "500W",
            bateria: "Chumbo 48V 12Ah",
            autonomia: "25 a 35 km por carga",
            velocidade: "32 km/h",
            freios: "Tambor dianteiro e traseiro",
            suspensao: "Dianteira e traseira",
            pneus: "Aro 12\" a 14\"",
            capacidade: "120 kg",
            tempoCarga: "6 a 8 horas"
        },
        cores: [
            { cor: "Azul", loja: "Anthenor Navarro – Esperança", fotos: ["15 (1).jpeg", "15 (2).jpeg"], ref: 15 }
        ]
    },
    {
        id: "bonmad-500w",
        modelo: "Bonmad 500W",
        categoria: "motos",
        descricao: "A Bonmad 500W é uma scooter elétrica robusta de quadro em aço carbono, com cestinha frontal, faróis e luz de freio em LED e painel eletrônico. Anda sem CNH, placa ou IPVA. O sistema E-ABS e os três níveis de velocidade trazem mais segurança e controle ao condutor.",
        specs: {
            motor: "500W",
            bateria: "Chumbo 48V 12Ah (removível)",
            autonomia: "Até 50 km por carga",
            velocidade: "32 km/h (3 níveis)",
            freios: "Tambor com sistema E-ABS",
            suspensao: "Dianteira + dupla traseira",
            pneus: "Aro 14\"",
            capacidade: "150 kg",
            tempoCarga: "6 a 8 horas"
        },
        cores: [
            { cor: "Verde", loja: "Anthenor Navarro – Esperança", fotos: ["16 (1).jpeg", "16 (2).jpeg", "16 (3).jpeg"], ref: 16 }
        ]
    },
    {
        id: "cruiser-1000w-rio-south",
        modelo: "Cruiser 1000W Rio South",
        categoria: "motos",
        descricao: "A Rio South Cruiser 1000W é uma scooter elétrica autopropelida de maior potência, com bateria de lítio removível — ideal para quem quer mais torque em subidas e conforto no trajeto urbano, sem CNH, placa ou IPVA. Une presença, faróis full LED e porta-objetos traseiro à praticidade da recarga em tomada comum.",
        specs: {
            motor: "1000W",
            bateria: "Lítio 60V 20Ah (removível)",
            autonomia: "40 a 50 km por carga",
            velocidade: "32 km/h",
            freios: "Disco dianteiro e traseiro",
            suspensao: "Dianteira + traseira dupla",
            pneus: "Aro 12\" a 14\"",
            capacidade: "150 kg",
            tempoCarga: "4 a 6 horas"
        },
        cores: [
            { cor: "Chumbo", loja: "Anthenor Navarro – Esperança", fotos: ["17 (1).jpeg", "17 (3).jpeg", "17 (4).jpeg"], ref: 17 }
        ]
    },
    {
        id: "agile-raphynus-1000w-litio",
        modelo: "Agile Raphynus 1000W Lítio",
        categoria: "motos",
        novidade: true,
        descricao: "A Agile Raphynus 1000W é a versão mais potente da linha Agile, ideal para o dia a dia urbano sem necessidade de CNH. Com motor de 1000W e bateria de lítio removível, oferece arranque firme e autonomia confortável. O acabamento preto com banco marrom dá um visual elegante ao banco duplo com encosto de garupa.",
        specs: {
            motor: "1000W",
            bateria: "Lítio 60V 20Ah (removível)",
            autonomia: "Até 45 km por carga",
            velocidade: "32 km/h",
            freios: "Tambor dianteiro e traseiro",
            suspensao: "Duplo amortecedor (dianteiro e traseiro)",
            pneus: "Aro 14\"",
            capacidade: "150 kg",
            tempoCarga: "6 a 8 horas"
        },
        cores: [
            { cor: "Preta com banco marrom", loja: "Anthenor Navarro – Esperança", fotos: ["18 (1).jpeg", "18 (2).jpeg"], ref: 18 }
        ]
    },
    {
        id: "sudu-a5",
        modelo: "Sudu A5",
        categoria: "motos",
        novidade: true,
        descricao: "A Sudu A5 é a scooter elétrica premium da Sudu, autopropelida e dispensando emplacamento e CNH. Com motor de 1000W, bateria de lítio de 60V 20Ah e até 60 km de autonomia, entrega desempenho e economia para o uso urbano. Freios a disco hidráulicos e banco para duas pessoas garantem segurança e conforto.",
        specs: {
            motor: "1000W",
            bateria: "Lítio 60V 20Ah (removível)",
            autonomia: "Até 60 km por carga",
            velocidade: "32 km/h",
            freios: "Disco hidráulico (dianteiro e traseiro)",
            suspensao: "Amortecimento hidráulico",
            pneus: "Aro 10\" a 12\"",
            capacidade: "150 kg",
            tempoCarga: "7 a 8 horas"
        },
        cores: [
            { cor: "Azul", loja: "Anthenor Navarro – Esperança", fotos: ["20 (1).jpeg", "20 (2).jpeg"], ref: 20 }
        ]
    },
    {
        id: "triciclo-sousa",
        modelo: "Triciclo Sousa",
        categoria: "triciclos",
        novidade: true,
        descricao: "O Triciclo Elétrico Sousa é um modelo nacional projetado para mobilidade segura e acessível, com estabilidade de três rodas e marcha à ré. Motor de 600W e bateria selada de 48V garantem autonomia de até 45 km, ideal para deslocamentos urbanos do dia a dia. Chassi em aço-carbono robusto.",
        specs: {
            motor: "600W 48V (torque 125 Nm)",
            bateria: "Chumbo 48V 20Ah",
            autonomia: "40 a 45 km por carga",
            velocidade: "32 km/h",
            freios: "Disco dianteiro + tambor traseiro (com ré)",
            suspensao: "Amortecedor traseiro",
            pneus: "Aro 16\" (3.0)",
            capacidade: "150 kg",
            tempoCarga: "6 a 8 horas"
        },
        cores: [
            { cor: "Vermelho", loja: "Anthenor Navarro – Esperança", fotos: ["21 (1).jpeg", "21 (2).jpeg"], ref: 21 }
        ]
    }
];

// Ordem em que as specs aparecem na ficha técnica (campos vazios são omitidos)
window.SPECS_ORDEM = [
    { chave: "motor", label: "Motor" },
    { chave: "bateria", label: "Bateria" },
    { chave: "autonomia", label: "Autonomia" },
    { chave: "velocidade", label: "Velocidade máxima" },
    { chave: "freios", label: "Freios" },
    { chave: "suspensao", label: "Suspensão" },
    { chave: "pneus", label: "Pneus" },
    { chave: "capacidade", label: "Capacidade de carga" },
    { chave: "tempoCarga", label: "Tempo de carga" }
];

// Rótulos e ordem dos filtros. Só aparecem botões de categorias que tiverem produto.
window.CATEGORIAS_LABEL = {
    motos: "Motos / Scooters",
    triciclos: "Triciclos",
    patinetes: "Patinetes",
    drifts: "Drifts"
};
window.CATEGORIAS_ORDEM = ["motos", "triciclos", "patinetes", "drifts"];

// Número de WhatsApp padrão para o botão de interesse
window.WHATSAPP_PADRAO = "5583981869199";

// Busca um modelo pelo id (slug) OU por um ref numérico antigo (links legados).
// Retorna { modelo, corIndex } ou null.
window.getModelo = function (id) {
    if (id == null) return null;
    var alvo = String(id);
    var porSlug = window.MODELOS.find(function (m) { return m.id === alvo; });
    if (porSlug) return { modelo: porSlug, corIndex: 0 };
    for (var i = 0; i < window.MODELOS.length; i++) {
        var idx = window.MODELOS[i].cores.findIndex(function (c) { return String(c.ref) === alvo; });
        if (idx >= 0) return { modelo: window.MODELOS[i], corIndex: idx };
    }
    return null;
};
