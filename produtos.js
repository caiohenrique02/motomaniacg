/* =========================================================================
   MOTO MANIA CG — BANCO DE PRODUTOS
   -------------------------------------------------------------------------
   Fonte única de dados do catálogo. Para adicionar / editar um produto,
   mexa SOMENTE neste arquivo. O index.html e o detalhes-produto.html leem
   tudo daqui automaticamente.

   Campos de cada produto:
     id        -> número do grupo de fotos (precisa ser único)
     modelo    -> nome do modelo (aparece no card e no título)
     cor       -> cor do produto
     loja      -> unidade onde o produto está
     categoria -> "motos" | "triciclos" | "patinetes" | "drifts"  (controla o filtro)
     fotos     -> lista de arquivos da pasta. A 1ª foto é a PRINCIPAL (capa do card)

   ATENÇÃO categorias: as categorias abaixo foram um chute inicial do Caio.
   Ajuste cada "categoria" conforme o produto real.
   ========================================================================= */

// Pasta onde estão as fotos enviadas
window.FOTOS_DIR = "fotos pro claude adicionar";

// Monta o caminho final já com encoding (espaços, etc.)
window.fotoSrc = function (arquivo) {
    return encodeURIComponent(window.FOTOS_DIR) + "/" + encodeURIComponent(arquivo);
};

window.PRODUTOS = [
    {
        id: 1,
        modelo: "Triciclo Duos Eko-10",
        cor: "Vermelho",
        loja: "Shopping Luiza Motta",
        categoria: "triciclos",
        fotos: ["1.jpeg", "1 (1).jpeg", "1 (2).jpeg"]
    },
    {
        id: 2,
        modelo: "Eko 7",
        cor: "Verde",
        loja: "Shopping Luiza Motta",
        categoria: "motos",
        fotos: ["2 (1).jpeg", "2 (2).jpeg"]
    },
    {
        id: 3,
        modelo: "Trixx Raptor Pro",
        cor: "Branca",
        loja: "Shopping Luiza Motta",
        categoria: "motos",
        fotos: ["3 (1).jpeg", "3 (2).jpeg"]
    },
    {
        id: 4,
        modelo: "JET 1000w Motochefe",
        cor: "Preta",
        loja: "Shopping Luiza Motta",
        categoria: "motos",
        fotos: ["4 (1).jpeg", "4 (2).jpeg", "4 (3).jpeg", "4 (4).jpeg"]
    },
    {
        id: 5,
        modelo: "Maxus Duact Lítio",
        cor: "Verde",
        loja: "Shopping Luiza Motta",
        categoria: "motos",
        fotos: ["5 (1).jpeg", "5 (2).jpeg"]
    },
    {
        id: 6,
        modelo: "Mônaco 2026",
        cor: "Branca",
        loja: "Shopping Luiza Motta",
        categoria: "motos",
        fotos: ["6 (1).jpeg", "6 (2).jpeg", "6 (3).jpeg", "6 (4).jpeg"]
    },
    {
        id: 7,
        modelo: "Triciclo Bonmad 1000w",
        cor: "Preto",
        loja: "Shopping Luiza Motta",
        categoria: "triciclos",
        fotos: ["7 (1).jpeg", "7 (2).jpeg"]
    },
    {
        id: 8,
        modelo: "Yoo y200 350w",
        cor: "Faixa Vermelha",
        loja: "Shopping Luiza Motta",
        categoria: "patinetes",
        fotos: ["8 (1).jpeg", "8 (2).jpeg"]
    },
    {
        id: 9,
        modelo: "JET 1000w",
        cor: "Prata",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["9 (1).jpeg", "9 (2).jpeg"]
    },
    {
        id: 10,
        modelo: "Maxus Duact Lítio",
        cor: "Vermelha",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["10 (1).jpeg", "10 (2).jpeg"]
    },
    {
        id: 11,
        modelo: "Maxus Duact Lítio",
        cor: "Azul escuro",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["11 (1).jpeg", "11 (2).jpeg"]
    },
    {
        id: 12,
        modelo: "Maxus Duact Lítio",
        cor: "Rosê",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["12 (1).jpeg", "12 (2).jpeg"]
    },
    {
        id: 13,
        modelo: "Maxus Duact Lítio",
        cor: "Verde",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["13 (1).jpeg", "13 (2).jpeg", "13 (3).jpeg"]
    },
    {
        id: 14,
        modelo: "GTS 500w",
        cor: "Branca com rosa",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["14 (1).jpeg", "14 (2).jpeg"]
    },
    {
        id: 15,
        modelo: "Centry Mini 500w",
        cor: "Azul",
        loja: "Anthenor Navarro – Esperança",
        categoria: "patinetes",
        fotos: ["15 (1).jpeg", "15 (2).jpeg"]
    },
    {
        id: 16,
        modelo: "Bonmad 500w",
        cor: "Verde",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["16 (1).jpeg", "16 (2).jpeg", "16 (3).jpeg"]
    },
    {
        id: 17,
        modelo: "Cruiser 1000w Rio South chumbo",
        cor: "Preta",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["17 (1).jpeg", "17 (3).jpeg", "17 (4).jpeg"]
    },
    {
        id: 18,
        modelo: "Agile Raphynus 1000w Lítio",
        cor: "Preta com banco marrom",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["18 (1).jpeg", "18 (2).jpeg"]
    },
    {
        id: 19,
        modelo: "Raptor Pro",
        cor: "Verde camaleão",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["19 (1).jpeg", "19 (2).jpeg"]
    },
    {
        id: 20,
        modelo: "Sudu A5",
        cor: "Azul",
        loja: "Anthenor Navarro – Esperança",
        categoria: "motos",
        fotos: ["20 (1).jpeg", "20 (2).jpeg"]
    },
    {
        id: 21,
        modelo: "Triciclo Sousa",
        cor: "Vermelho",
        loja: "Anthenor Navarro – Esperança",
        categoria: "triciclos",
        fotos: ["21 (1).jpeg", "21 (2).jpeg"]
    }
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

// Busca um produto pelo id
window.getProduto = function (id) {
    return window.PRODUTOS.find(function (p) { return String(p.id) === String(id); });
};
