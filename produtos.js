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
        "id": "triciclo-duos-eko-10",
        "modelo": "Triciclo Duos Eko-10",
        "categoria": "triciclos",
        "lugares": 1,
        "descricao": "Triciclo elétrico de três rodas que oferece máxima estabilidade e segurança no dia a dia. Não exige CNH nem emplacamento, conta com marcha à ré, alarme e bagageiro, sendo ideal para uso urbano e mobilidade da família. Conforto e praticidade com painel digital e três níveis de velocidade.",
        "specs": {
            "motor": "1000W brushless (traseiro)",
            "bateria": "Lítio 60V 20Ah",
            "autonomia": "Até 45 km por carga",
            "velocidade": "25 km/h (3 níveis)",
            "freios": "Disco dianteiro + tambor traseiro",
            "suspensao": "Dianteira e traseira",
            "pneus": "Aro 10\" em liga de alumínio",
            "capacidade": "150 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "cores": [
            {
                "cor": "Vermelho",
                "loja": "Shopping Luiza Motta",
                "fotos": [
                    "1.jpeg",
                    "1 (1).jpeg",
                    "1 (2).jpeg",
                    "19 (1).jpeg",
                    "19 (2).jpeg"
                ],
                "ref": 1
            }
        ]
    },
    {
        "id": "eko-7",
        "modelo": "Eko 7",
        "categoria": "motos",
        "descricao": "Scooter elétrica Duos Eko 7 com motor de 600W, ideal para o dia a dia urbano: não precisa de CNH nem emplacamento. Vem com farol de LED, painel digital, alarme antifurto e acionamento por cartão NFC, além de cestinha para pequenas cargas. Autonomia de até 50 km com conforto para duas pessoas.",
        "specs": {
            "motor": "600W",
            "bateria": "Chumbo 48V 20Ah",
            "autonomia": "Até 50 km por carga",
            "velocidade": "32 km/h",
            "freios": "Tambor dianteiro e traseiro",
            "suspensao": "Dianteira e traseira",
            "pneus": "Aro 12\"",
            "capacidade": "120 kg",
            "tempoCarga": "7 a 8 horas"
        },
        "cores": [
            {
                "cor": "Verde",
                "loja": "Shopping Luiza Motta",
                "fotos": [
                    "2 (1).jpeg",
                    "2 (2).jpeg"
                ],
                "ref": 2
            }
        ]
    },
    {
        "id": "raptor-pro",
        "modelo": "Raptor Pro",
        "categoria": "motos",
        "descricao": "Scooter elétrica Trixx Raptor Pro 1000W brushless, robusta e com visual esportivo, dispensa CNH e emplacamento. Conta com freio dianteiro a disco hidráulico, suspensão telescópica hidráulica, proteção IP54, farol de LED e painel digital. Perfeita para deslocamentos urbanos com autonomia de 40 a 50 km.",
        "specs": {
            "motor": "1000W brushless",
            "bateria": "Chumbo 60V 20Ah",
            "autonomia": "40 a 50 km por carga",
            "velocidade": "32 km/h (3 níveis)",
            "freios": "Disco hidráulico dianteiro + tambor traseiro",
            "suspensao": "Garfo telescópico hidráulico dianteiro + mola dupla traseira",
            "pneus": "Aro 10\" tubeless",
            "capacidade": "150 kg",
            "tempoCarga": "6 a 9 horas"
        },
        "cores": [
            {
                "cor": "Branca",
                "loja": "Shopping Luiza Motta",
                "fotos": [
                    "3 (1).jpeg",
                    "3 (2).jpeg"
                ],
                "ref": 3
            }
        ]
    },
    {
        "id": "jet-1000w",
        "modelo": "JET 1000W",
        "categoria": "motos",
        "destaque": true,
        "descricao": "Scooter elétrica MotoChefe JET 1000W com bateria de lítio removível, autopropelida: não exige CNH nem emplacamento. Equipada com farol full LED, painel digital, setas, alarme antirroubo, marcha à ré e banco duplo com encosto. Recarga rápida (até 5h) e autonomia de até 45 km para o uso urbano.",
        "specs": {
            "motor": "1000W",
            "bateria": "Lítio 60V 20Ah (removível)",
            "autonomia": "Até 45 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico (dianteiro e traseiro)",
            "suspensao": "Amortecedor duplo dianteiro + traseira dupla",
            "pneus": "Aro 10\" sem câmara",
            "capacidade": "180 kg",
            "tempoCarga": "Até 5 horas (carregador turbo)"
        },
        "cores": [
            {
                "cor": "Preta",
                "loja": "Shopping Luiza Motta",
                "fotos": [
                    "4 (1).jpeg",
                    "4 (2).jpeg",
                    "4 (3).jpeg",
                    "4 (4).jpeg"
                ],
                "ref": 4
            },
            {
                "cor": "Prata",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [
                    "9 (1).jpeg",
                    "9 (2).jpeg"
                ],
                "ref": 9
            },
            {
                "cor": "Branca",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.27 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.27.jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.28 (4).jpeg"
                ]
            }
        ]
    },
    {
        "id": "maxus-duact-litio",
        "modelo": "Maxus Duact Lítio",
        "categoria": "motos",
        "destaque": true,
        "descricao": "Scooter elétrica Maxus Duact com motor de 1000W e 60Nm de torque, topo de linha em autonomia e conforto, dispensando CNH e emplacamento. Traz bateria de lítio removível, farol full LED, painel digital inteligente, alarme com cartão de aproximação (TAG), suspensão regulável DuactLink e baú resistente à água. Autonomia de até 80 km para enfrentar a cidade sem preocupação.",
        "specs": {
            "motor": "1000W (torque 60 Nm)",
            "bateria": "Lítio 60V 20Ah (removível)",
            "autonomia": "Até 80 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico ventilado (dianteiro e traseiro)",
            "suspensao": "Amortecedores reguláveis (DuactLink, 3 níveis)",
            "pneus": "Aro 10\" tubeless",
            "capacidade": "150 kg",
            "tempoCarga": "6 horas"
        },
        "cores": [
            {
                "cor": "Verde",
                "loja": "Shopping Luiza Motta",
                "fotos": [
                    "5 (1).jpeg",
                    "5 (2).jpeg",
                    "13 (1).jpeg",
                    "13 (2).jpeg",
                    "13 (3).jpeg"
                ],
                "ref": 5
            },
            {
                "cor": "Vermelha",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [
                    "10 (1).jpeg",
                    "10 (2).jpeg"
                ],
                "ref": 10
            },
            {
                "cor": "Azul escuro",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [
                    "11 (1).jpeg",
                    "11 (2).jpeg"
                ],
                "ref": 11
            },
            {
                "cor": "Rosê",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [
                    "12 (1).jpeg",
                    "12 (2).jpeg"
                ],
                "ref": 12
            },
            {
                "cor": "Prata",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.58 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.58 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.58 (3).jpeg"
                ]
            },
            {
                "cor": "Preto",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.55 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.55 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.55.jpeg"
                ]
            }
        ]
    },
    {
        "id": "monaco-2026",
        "modelo": "Mônaco 2026",
        "categoria": "motos",
        "descricao": "A Conduzza Mônaco 2026 é uma scooter elétrica autopropelida que dispensa CNH e emplacamento. Com motor de 1000W, bateria 72V/20Ah e iluminação Full LED com painel digital, oferece até 100 km de autonomia para a mobilidade urbana do dia a dia. Acionamento triplo (chave, controle e TAG) e botão de ré fazem dela uma das mais completas da categoria.",
        "specs": {
            "motor": "1000W brushless",
            "bateria": "72V 20Ah",
            "autonomia": "Até 100 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico dianteiro e traseiro",
            "suspensao": "Hidráulica dianteira e traseira",
            "pneus": "Aro 10\" tubeless (3.5-10)",
            "capacidade": "150 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "cores": [
            {
                "cor": "Branca",
                "loja": "Shopping Luiza Motta",
                "fotos": [
                    "6 (1).jpeg",
                    "6 (2).jpeg",
                    "6 (3).jpeg",
                    "6 (4).jpeg"
                ],
                "ref": 6
            },
            {
                "cor": "Prata",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.53.02 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.53.03 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.50.58 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.50.59 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.53.02.jpeg"
                ]
            }
        ]
    },
    {
        "id": "triciclo-bonmad-1000w",
        "modelo": "Triciclo Bonmad 1000W",
        "categoria": "triciclos",
        "lugares": 3,
        "descricao": "Triciclo elétrico autopropelido de três rodas com estabilidade reforçada, que transporta até 3 pessoas. Não precisa de CNH nem emplacamento e já vem com marcha à ré, sinalização e alarme. Bateria de lítio removível para recarga prática, perfeito para o dia a dia da família na cidade.",
        "specs": {
            "motor": "1000W (traseiro)",
            "bateria": "Lítio 60V 20Ah (removível)",
            "autonomia": "Até 55 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco traseiro",
            "suspensao": "Dianteira + roda de segurança (anti-tombamento)",
            "pneus": "Aro 10\" em liga leve",
            "capacidade": "Até 3 pessoas (carga até 180 kg)",
            "tempoCarga": "5 a 6 horas"
        },
        "cores": [
            {
                "cor": "Preto",
                "loja": "Shopping Luiza Motta",
                "fotos": [
                    "7 (1).jpeg",
                    "7 (2).jpeg"
                ],
                "ref": 7
            },
            {
                "cor": "Azul",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.28.jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.29 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.29 (3).jpeg"
                ]
            }
        ]
    },
    {
        "id": "yoo-y200-350w",
        "modelo": "Yoo Y200 350W",
        "categoria": "patinetes",
        "descricao": "Bicicleta/patinete elétrico Yoo Y200 350W homologado pelo CONTRAN, que dispensa CNH e habilitação. Combina autonomia urbana, conforto com banco duplo e suspensão completa, ideal para o dia a dia na cidade. Equipado com farol LED, painel digital e cestinha frontal.",
        "specs": {
            "motor": "350W 48V (pico de 500W) brushless",
            "bateria": "Chumbo 48V 12Ah",
            "autonomia": "Até 30 km por carga",
            "velocidade": "25 a 32 km/h",
            "freios": "Tambor 110mm dianteiro e traseiro (corte do motor)",
            "suspensao": "Dianteira (garfo) e traseira (mola)",
            "pneus": "Aro 14\" tubeless (14x2.5)",
            "capacidade": "120 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "cores": [
            {
                "cor": "Faixa Vermelha",
                "loja": "Shopping Luiza Motta",
                "fotos": [
                    "8 (1).jpeg",
                    "8 (2).jpeg"
                ],
                "ref": 8
            }
        ]
    },
    {
        "id": "gts-500w",
        "modelo": "GTS 500W",
        "categoria": "motos",
        "descricao": "A scooter elétrica GTS 500W é uma opção econômica e legalizada para o dia a dia, sem necessidade de CNH, IPVA ou emplacamento. Com motor brushless de 500W, velocidade de até 32 km/h e painel digital com iluminação LED, atende perfeitamente os deslocamentos urbanos. Aro 14 e suspensão completa garantem conforto e estabilidade.",
        "specs": {
            "motor": "500W brushless",
            "bateria": "Chumbo (grafeno) 48V 12Ah",
            "autonomia": "30 a 40 km por carga",
            "velocidade": "32 km/h",
            "freios": "Tambor dianteiro e traseiro",
            "suspensao": "Telescópica dianteira + dupla traseira",
            "pneus": "Aro 14\"",
            "capacidade": "120 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "cores": [
            {
                "cor": "Branca com rosa",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [
                    "14 (1).jpeg",
                    "14 (2).jpeg"
                ],
                "ref": 14
            }
        ]
    },
    {
        "id": "centry-mini-500w",
        "modelo": "Centry Mini 500W",
        "categoria": "patinetes",
        "descricao": "Mini scooter elétrica compacta de 500W, perfeita para deslocamentos urbanos curtos com agilidade e baixo custo de recarga. Suspensão completa e freios a tambor garantem conforto e segurança. Não exige CNH nem emplacamento dentro do limite legal.",
        "specs": {
            "motor": "500W brushless 48V",
            "bateria": "Chumbo 48V 12Ah",
            "autonomia": "25 a 35 km por carga",
            "velocidade": "32 km/h",
            "freios": "Tambor dianteiro e traseiro (corte do motor)",
            "suspensao": "Dianteira e traseira",
            "pneus": "Aro 12\" a 14\"",
            "capacidade": "120 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "cores": [
            {
                "cor": "Azul",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [
                    "15 (1).jpeg",
                    "15 (2).jpeg"
                ],
                "ref": 15
            }
        ]
    },
    {
        "id": "bonmad-500w",
        "modelo": "Bonmad 500W",
        "categoria": "motos",
        "descricao": "A scooter elétrica Bonmad 500W é prática e sustentável, dispensando CNH e emplacamento para circular na cidade. Motor brushless de 500W, bateria 48V 12Ah removível (carregue em casa ou no trabalho) e até 50 km de autonomia, com painel digital LCD e iluminação LED completa. Freios a tambor com E-ABS e seletor de 3 velocidades trazem segurança ao uso urbano.",
        "specs": {
            "motor": "500W brushless",
            "bateria": "Chumbo 48V 12Ah (removível)",
            "autonomia": "Até 50 km por carga",
            "velocidade": "32 km/h (3 níveis)",
            "freios": "Tambor dianteiro e traseiro com E-ABS",
            "suspensao": "Garfo dianteiro com amortecedor + dupla traseira",
            "pneus": "Aro 14\" (14x2.5)",
            "capacidade": "150 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "cores": [
            {
                "cor": "Verde",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [
                    "16 (1).jpeg",
                    "16 (2).jpeg",
                    "16 (3).jpeg"
                ],
                "ref": 16
            }
        ]
    },
    {
        "id": "agile-raphynus-1000w-litio",
        "modelo": "Agile Raphynus 1000W Lítio",
        "categoria": "motos",
        "novidade": true,
        "descricao": "Scooter elétrica Agile Raphynus na versão 1000W com bateria de lítio removível, ideal para o dia a dia urbano sem CNH e sem emplacamento. Com farol LED, painel digital e autonomia de até 45 km, une conforto do banco duplo e estabilidade dos pneus aro 14 para deslocamentos econômicos pela cidade.",
        "specs": {
            "motor": "1000W brushless",
            "bateria": "Lítio 60V 20Ah (removível)",
            "autonomia": "Até 45 km por carga",
            "velocidade": "32 km/h",
            "freios": "Tambor dianteiro e traseiro",
            "suspensao": "Duplo amortecedor (dianteiro e traseiro)",
            "pneus": "Aro 14\"",
            "capacidade": "150 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "cores": [
            {
                "cor": "Preta com banco marrom",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [
                    "17 (1).jpeg",
                    "17 (4).jpeg"
                ],
                "ref": 18
            }
        ]
    },
    {
        "id": "sudu-a5",
        "modelo": "Sudu A5",
        "categoria": "motos",
        "novidade": true,
        "descricao": "Scooter elétrica Sudu A5 linha premium, autopropelida, sem CNH e sem emplacamento. Com bateria de lítio removível de 60V, farol LED e painel digital, oferece autonomia de até 60 km e a segurança de freios a disco hidráulicos com suspensão hidráulica, perfeita para a mobilidade urbana com conforto.",
        "specs": {
            "motor": "1000W brushless",
            "bateria": "Lítio 60V 20Ah (removível)",
            "autonomia": "Até 60 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico (dianteiro e traseiro)",
            "suspensao": "Hidráulica (dianteira e traseira)",
            "pneus": "Aro 10\" a 12\" (tubeless)",
            "capacidade": "150 kg",
            "tempoCarga": "5 a 6 horas"
        },
        "cores": [
            {
                "cor": "Azul",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [
                    "18 (1).jpeg",
                    "18 (2).jpeg"
                ],
                "ref": 20
            },
            {
                "cor": "Vinho",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.31 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.31.jpeg"
                ]
            }
        ]
    },
    {
        "id": "triciclo-sousa",
        "modelo": "Triciclo Sousa",
        "categoria": "triciclos",
        "novidade": true,
        "descricao": "Triciclo elétrico Sousa de três rodas, robusto e estável, com pneus aro 16 e motor de alto torque. Dispensa CNH e emplacamento, possui marcha à ré e freios independentes, oferecendo segurança e conforto para o uso urbano e da família.",
        "specs": {
            "motor": "600W 48V (torque 125 Nm)",
            "bateria": "Chumbo selada 48V 20Ah",
            "autonomia": "45 a 65 km por carga",
            "velocidade": "30 km/h",
            "freios": "Disco dianteiro + tambor traseiro (com ré)",
            "suspensao": "Amortecedor dianteiro e traseiro",
            "pneus": "Aro 16\" (3.0)",
            "capacidade": "150 kg",
            "tempoCarga": "5 a 8 horas"
        },
        "cores": [
            {
                "cor": "Vermelho",
                "loja": "Anthenor Navarro – Esperança",
                "fotos": [],
                "ref": 21
            }
        ]
    },
    {
        "id": "gts-pro-500w",
        "modelo": "GTS Pro 500W",
        "categoria": "motos",
        "cores": [
            {
                "cor": "Branca",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.22 (3).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.23 (2).jpeg"
                ]
            },
            {
                "cor": "Branca e rosa",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.54.51.jpeg"
                ]
            }
        ],
        "descricao": "Scooter elétrica GTS Pro 500W, autopropelida e liberada para uso urbano sem CNH e sem emplacamento. Com iluminação LED, display digital e velocidade de até 32 km/h, é a opção econômica e prática para trajetos curtos e médios na cidade, com pneus aro 14 e freios a tambor.",
        "specs": {
            "motor": "500W brushless",
            "bateria": "Chumbo (grafeno) 48V 12Ah",
            "autonomia": "30 a 40 km por carga",
            "velocidade": "32 km/h",
            "freios": "Tambor dianteiro e traseiro",
            "suspensao": "Dianteira e traseira (mola)",
            "pneus": "Aro 14\"",
            "capacidade": "120 kg",
            "tempoCarga": "6 a 8 horas"
        }
    },
    {
        "id": "sudu-a2-plus",
        "modelo": "Sudu A2+",
        "categoria": "motos",
        "cores": [
            {
                "cor": "Branca",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.29.jpeg"
                ]
            }
        ],
        "descricao": "Mini scooter elétrica Sudu A2+, a irmã compacta da A5, autopropelida e isenta de CNH e emplacamento. Com bateria de lítio removível, farol LED, painel digital LCD e entrada USB, entrega autonomia de até 60 km e ótima agilidade urbana com seu desenho compacto e banco duplo.",
        "specs": {
            "motor": "1000W brushless",
            "bateria": "Lítio 48V 20Ah (removível)",
            "autonomia": "Até 60 km por carga",
            "velocidade": "32 km/h",
            "freios": "Tambor dianteiro e traseiro",
            "suspensao": "Dianteira hidráulica + traseira por mola",
            "pneus": "Aro 10\" (60/100-10 tubeless)",
            "capacidade": "100 kg",
            "tempoCarga": "5 a 6 horas"
        }
    },
    {
        "id": "triciclo-sudu-a3t",
        "modelo": "Triciclo Sudu A3T",
        "categoria": "triciclos",
        "cores": [
            {
                "cor": "Branco com vinho",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.50.56.jpeg"
                ]
            },
            {
                "cor": "Azul",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.50.54 (1).jpeg"
                ]
            }
        ],
        "descricao": "Triciclo elétrico Sudu A3T de três rodas com excelente estabilidade, ideal para quem busca segurança no dia a dia urbano e familiar. Não exige CNH nem emplacamento (veículo autopropelido) e conta com marcha à ré para facilitar manobras e estacionamento. Perfeito para o trajeto casa-trabalho, compras e pequenas cargas com economia total.",
        "specs": {
            "motor": "800W brushless (traseiro)",
            "bateria": "Lítio 60V 20Ah (removível)",
            "autonomia": "Até 50 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco (dianteiro e traseiro)",
            "suspensao": "Dianteira e traseira",
            "pneus": "Aro 10\" (liga leve)",
            "capacidade": "2 pessoas",
            "tempoCarga": "7 a 8 horas"
        }
    },
    {
        "id": "triciclo-fenix",
        "modelo": "Triciclo Fênix",
        "categoria": "triciclos",
        "cores": [
            {
                "cor": "Branca",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.50.53 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.50.53.jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.54 (2).jpeg",
                    "21 (1).jpeg",
                    "21 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.50.53 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.54 (3).jpeg"
                ]
            },
            {
                "cor": "Preto",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.50.52.jpeg",
                    "WhatsApp Image 2026-06-01 at 14.50.52 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.50.52 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.24 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.24.jpeg",
                    "20 (1).jpeg",
                    "20 (2).jpeg"
                ]
            },
            {
                "cor": "Vermelho",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.54.jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.55 (3).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.51.08.jpeg",
                    "WhatsApp Image 2026-06-01 at 14.51.09.jpeg",
                    "WhatsApp Image 2026-06-01 at 14.51.08 (1).jpeg"
                ]
            }
        ],
        "descricao": "Triciclo familiar com motor 750W e três rodas para máxima estabilidade no uso urbano, sem necessidade de CNH ou emplacamento (autopropelido). Disponível com bateria de lítio (mais leve, maior autonomia) ou chumbo (preço menor). Ambas as versões têm marcha à ré, painel digital e suspensão dianteira e traseira — ideal para transporte familiar e pequenas entregas.",
        "specs": {
            "motor": "750W",
            "bateria": "Lítio 48V 20Ah (maior autonomia) / Chumbo 48V 20Ah (custo menor)",
            "autonomia": "45 a 55 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico",
            "suspensao": "Dianteira e traseira",
            "pneus": "Aro 10\"",
            "capacidade": "2 lugares (até 150-180 kg)",
            "tempoCarga": "5 a 8 horas"
        }
    },
    {
        "id": "triciclo-raphynus",
        "modelo": "Triciclo Raphynus",
        "categoria": "triciclos",
        "cores": [
            {
                "cor": "Preto",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.53.01 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.53.01 (3).jpeg"
                ]
            }
        ],
        "descricao": "Triciclo elétrico Raphynus compacto e estável, perfeito para a mobilidade urbana do dia a dia. Com três rodas aro 10, freios a tambor e capacidade para adulto e criança, oferece conforto e segurança sem precisar de CNH. Painel digital, alarme e iluminação completa em LED de série.",
        "specs": {
            "motor": "650W",
            "bateria": "Chumbo 48V 20Ah (fixa)",
            "autonomia": "40 a 45 km por carga",
            "velocidade": "32 km/h",
            "freios": "Tambor (dianteiro e traseiro)",
            "suspensao": "Dianteira com amortecedor",
            "pneus": "Aro 10\" (dianteiro e traseiro)",
            "capacidade": "Até 185 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "lugares": 2
    },
    {
        "id": "triciclo-alpha",
        "modelo": "Triciclo Alpha",
        "categoria": "triciclos",
        "cores": [
            {
                "cor": "Vermelho",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.34 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.34.jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.36 (1).jpeg"
                ]
            }
        ],
        "descricao": "Triciclo elétrico Alpha robusto com motor de 1000W e marcha à ré, ideal para quem busca potência e praticidade sem CNH. Freio dianteiro a disco hidráulico, suspensão hidráulica e piloto automático garantem rodar firme e confortável. Painel digital, alarme antifurto e acionamento por cartão NFC.",
        "specs": {
            "motor": "1000W (3 níveis de velocidade)",
            "bateria": "Chumbo 48V 20Ah",
            "autonomia": "30 a 40 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico dianteiro (150mm) + tambor traseiro",
            "suspensao": "Dianteira hidráulica (bengala 35mm) + duplo amortecedor traseiro",
            "pneus": "Aro 10\" alumínio (3.00-10 tubeless)",
            "capacidade": "Até 120 kg",
            "tempoCarga": "7 a 9 horas"
        }
    },
    {
        "id": "triciclo-ved-litio",
        "modelo": "Triciclo Ved Lítio",
        "categoria": "triciclos",
        "cores": [
            {
                "cor": "Prata",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.37.jpeg"
                ]
            }
        ],
        "descricao": "Triciclo elétrico VED com potente bateria de lítio removível, unindo autonomia e praticidade para o uso urbano sem CNH. Conta com marcha à ré, freios a disco hidráulicos, roda de segurança anticapotamento e acionamento por controle remoto. Iluminação completa em LED, baú bagageiro e alarme antifurto de série.",
        "specs": {
            "motor": "1000W",
            "bateria": "Lítio 60V 20Ah (removível)",
            "autonomia": "35 a 40 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico traseiro",
            "suspensao": "Dianteira com amortecedor",
            "pneus": "Aro 12\"",
            "capacidade": "Até 150 kg",
            "tempoCarga": "Até 5 horas"
        }
    },
    {
        "id": "patinete-vexor-flow-350w",
        "modelo": "Patinete Vexor Flow 350W",
        "categoria": "patinetes",
        "cores": [
            {
                "cor": "Preto",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.32 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.32.jpeg"
                ]
            }
        ],
        "descricao": "Patinete elétrico Vexor Flow 350W dobrável, leve e prático para a mobilidade urbana do dia a dia. Estrutura compacta para transporte fácil, painel digital e bom alcance por carga. Ideal para trajetos curtos e médios na cidade.",
        "specs": {
            "motor": "350W brushless 36V",
            "bateria": "Lítio 36V 10Ah",
            "autonomia": "25 a 30 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco traseiro + freio eletrônico (luz de freio)",
            "suspensao": "Dianteira e traseira (conforme versão)",
            "pneus": "Aro 10\" pneumáticos",
            "capacidade": "120 kg",
            "tempoCarga": "4 a 6 horas"
        }
    },
    {
        "id": "patinete-zetto-vexor",
        "modelo": "Patinete Zetto Vexor",
        "categoria": "patinetes",
        "cores": [
            {
                "cor": "Preto",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.50.57 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.50.57 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.50.57 (3).jpeg"
                ]
            }
        ],
        "descricao": "Patinete elétrico urbano da linha Vexor, com design moderno e foco em praticidade para o dia a dia. Boa autonomia, freios de segurança e estrutura resistente. Solução econômica para deslocamentos curtos.",
        "specs": {
            "motor": "800W",
            "bateria": "Lítio 36V 8 a 10Ah",
            "autonomia": "20 a 30 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco / eletrônico (luz de freio)",
            "suspensao": "Dianteira (conforme versão)",
            "pneus": "Aro 8,5\" a 10\"",
            "capacidade": "120 kg",
            "tempoCarga": "4 a 6 horas"
        }
    },
    {
        "id": "quadriciclo-emobi",
        "modelo": "Quadriciclo E-mobi",
        "categoria": "quadriciclos",
        "cores": [
            {
                "cor": "Vermelho",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.28 (2).jpeg"
                ]
            }
        ],
        "descricao": "Quadriciclo elétrico adulto E-Mobi (Duos), compacto e estável sobre quatro rodas, com bateria de lítio e zero necessidade de CNH. Freio eletromagnético, painel digital LED e alarme antifurto trazem segurança no dia a dia. Design leve e resistente, com baú traseiro e farol de lente dupla.",
        "specs": {
            "motor": "500W",
            "bateria": "Lítio 48V 20Ah",
            "autonomia": "Até 40 km por carga",
            "velocidade": "20 km/h",
            "freios": "Eletromagnético",
            "suspensao": "Dianteira com amortecedor",
            "pneus": "Pneus compactos (aro pequeno)",
            "capacidade": "Até 120 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "lugares": 1
    },
    {
        "id": "quadriciclo-ecross-1000w",
        "modelo": "Quadriciclo e-Cross 1000W",
        "categoria": "quadriciclos",
        "cores": [
            {
                "cor": "Vinho",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.51.09 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.51.09 (3).jpeg"
                ]
            },
            {
                "cor": "Cinza",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.53.04.jpeg",
                    "WhatsApp Image 2026-06-01 at 14.53.05.jpeg"
                ]
            }
        ],
        "descricao": "Quadriciclo elétrico Duos E-Cross 1000W, estilo ATV com quatro rodas largas e suspensão independente para encarar o terreno com firmeza. Motor brushless potente, marcha à ré com aviso sonoro e freios a tambor nas quatro rodas, sem precisar de CNH. Painel digital, iluminação LED, retrovisores e cesta traseira inclusos.",
        "specs": {
            "motor": "1000W brushless",
            "bateria": "Chumbo 60V 20Ah (removível)",
            "autonomia": "Até 40 km por carga",
            "velocidade": "25 km/h",
            "freios": "Tambor nas quatro rodas",
            "suspensao": "Independente nas quatro rodas",
            "pneus": "Pneus largos aro 10\"",
            "capacidade": "Até 150 kg",
            "tempoCarga": "6 a 8 horas"
        },
        "lugares": 1
    },
    {
        "id": "tazzo",
        "modelo": "Tazzo",
        "categoria": "motos",
        "cores": [
            {
                "cor": "Vermelho",
                "loja": "",
                "fotos": []
            },
            {
                "cor": "Azul claro",
                "loja": "",
                "fotos": []
            }
        ],
        "descricao": "Scooter elétrica urbana Tazzo (Veloster) com motor de 1000W e bateria de lítio removível, autopropelida e isenta de CNH e emplacamento. Conta com painel digital, faróis em LED e autonomia de até 65 km por carga, ideal para o trajeto diário na cidade. Freios a disco hidráulicos e pneus tubeless para conforto e segurança.",
        "specs": {
            "motor": "1000W (60V)",
            "bateria": "Lítio 60V 24Ah (removível)",
            "autonomia": "Até 65 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico dianteiro (265mm) e traseiro (220mm)",
            "suspensao": "Hidráulica dianteira e traseira",
            "pneus": "90/90-12 tubeless (aro 12 alumínio)",
            "capacidade": "170 kg",
            "tempoCarga": "6 a 8 horas"
        }
    },
    {
        "id": "zenvo",
        "modelo": "Zenvo",
        "categoria": "motos",
        "cores": [
            {
                "cor": "Cinza",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.26 (1).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.26.jpeg"
                ]
            }
        ],
        "descricao": "Scooter elétrica urbana Zenvo (Veloster), autopropelida e dispensada de CNH e emplacamento. Equipada com motor de 1000W, bateria de lítio removível e painel digital com iluminação em LED, oferece autonomia em torno de 50-70 km por carga para o uso no dia a dia da cidade. Freios a disco e pneus aro 12 para mais estabilidade.",
        "specs": {
            "motor": "1000W (60V)",
            "bateria": "Lítio 60V (removível)",
            "autonomia": "50 a 70 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico (dianteiro e traseiro)",
            "suspensao": "Dianteira e traseira hidráulica",
            "pneus": "Aro 12\" (90/90-12 tubeless)",
            "capacidade": "150 kg",
            "tempoCarga": "6 a 8 horas"
        }
    },
    {
        "id": "grok",
        "modelo": "Grok",
        "categoria": "motos",
        "cores": [
            {
                "cor": "Vermelho",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.27 (2).jpeg",
                    "WhatsApp Image 2026-06-01 at 14.52.27 (4).jpeg"
                ]
            }
        ],
        "descricao": "Scooter elétrica urbana autopropelida, sem necessidade de CNH ou emplacamento (Resolução CONTRAN 996/2023). Motor de 1000W e bateria de lítio removível 60V, com painel digital e iluminação em LED, voltada ao deslocamento diário na cidade. Velocidade de até 32 km/h e freios a disco para uso urbano seguro.",
        "specs": {
            "motor": "1000W (60V)",
            "bateria": "Lítio 60V 20Ah (removível)",
            "autonomia": "40 a 50 km por carga",
            "velocidade": "32 km/h",
            "freios": "Disco hidráulico (dianteiro e traseiro)",
            "suspensao": "Dianteira e traseira (amortecedor duplo)",
            "pneus": "Aro 12\"",
            "capacidade": "150 kg",
            "tempoCarga": "4 a 6 horas"
        }
    },
    {
        "id": "bicicleta-brave-x-pro",
        "modelo": "Bicicleta Brave X Pro",
        "categoria": "bikes",
        "cores": [
            {
                "cor": "Preto",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.53 (2).jpeg"
                ]
            }
        ],
        "descricao": "Bicicleta elétrica RioSouth Brave X Pro de alta performance, com motor 750W (pico 1000W) e tecnologia High Speed para mais torque. Quadro de alumínio, freios a disco, suspensão com trava e banco duplo. Autonomia de até 65 km no modo pedal assist.",
        "specs": {
            "motor": "750W HS 48V (pico de 1000W)",
            "bateria": "Lítio 48V de alta capacidade",
            "autonomia": "Até 65 km (pedal assist) / até 35 km (elétrico)",
            "velocidade": "32 km/h",
            "freios": "Disco dianteiro e traseiro com E-ABS",
            "suspensao": "Dianteira com trava",
            "pneus": "Aro fat/MTB com pneus largos",
            "capacidade": "Banco duplo (até ~150 kg)",
            "tempoCarga": "6 a 8 horas"
        }
    },
    {
        "id": "bike-sousa",
        "modelo": "Bike Sousa",
        "categoria": "bikes",
        "cores": [
            {
                "cor": "Vermelho",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.52.33 (1).jpeg"
                ]
            }
        ],
        "descricao": "Bicicleta elétrica Sousa (Sousa Motos) modelo Eco 350W, completa e confiável para o uso urbano. Conta com acelerador, sistema Pedelec, freio a disco dianteiro, E-ABS e diversos acessórios de série. Dispensa CNH dentro do limite legal.",
        "specs": {
            "motor": "350W brushless 48V",
            "bateria": "Chumbo 48V 12Ah (ciclo profundo)",
            "autonomia": "Até 30 km por carga",
            "velocidade": "25 a 32 km/h",
            "freios": "Disco dianteiro / tambor traseiro com E-ABS",
            "suspensao": "Dianteira (garfo)",
            "pneus": "Aro 24\" (24x2.175)",
            "capacidade": "120 kg",
            "tempoCarga": "6 a 8 horas"
        }
    },
    {
        "id": "drift-homem-aranha",
        "modelo": "Drift Homem Aranha",
        "categoria": "drifts",
        "cores": [
            {
                "cor": "Vermelho",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.50.56 (1).jpeg"
                ]
            }
        ],
        "descricao": "Triciclo elétrico infantil drift com tema Homem Aranha. Motor de 250W nas rodas com sistema hoverboard-drift e bateria de lítio 36V recarregável. Rodas de 8 polegadas com deslize independente, LEDs coloridos e suspensão dupla. Indicado para até 65 kg — confirme a faixa etária adequada na unidade.",
        "specs": {
            "motor": "250W (sistema hoverboard-drift)",
            "bateria": "Lítio 36V 4.4Ah",
            "autonomia": "40 min a 1h30 de uso",
            "velocidade": "até 15 km/h",
            "freios": "",
            "suspensao": "Amortecedor duplo",
            "pneus": "Aro 8\"",
            "capacidade": "até 65 kg",
            "tempoCarga": "3 a 5 horas"
        }
    },
    {
        "id": "drift-rosa-galaxia",
        "modelo": "Drift Rosa Galáxia",
        "categoria": "drifts",
        "cores": [
            {
                "cor": "Rosa galáxia",
                "loja": "",
                "fotos": [
                    "WhatsApp Image 2026-06-01 at 14.50.57.jpeg"
                ]
            }
        ],
        "descricao": "Triciclo elétrico infantil drift na cor rosa galáxia. Motor de 350W com sistema hoverboard-drift e bateria de lítio 36V recarregável. Rodas de 8 polegadas com deslize independente, LEDs coloridos e suspensão dupla. Indicado para até 65 kg — confirme a faixa etária adequada na unidade.",
        "specs": {
            "motor": "350W (sistema hoverboard-drift)",
            "bateria": "Lítio 36V 4.4Ah",
            "autonomia": "40 min a 1h30 de uso",
            "velocidade": "até 30 km/h",
            "freios": "",
            "suspensao": "Amortecedor duplo",
            "pneus": "Aro 8\"",
            "capacidade": "até 65 kg",
            "tempoCarga": "3 a 5 horas"
        }
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
    quadriciclos: "Quadriciclos",
    bikes: "Bikes Elétricas",
    patinetes: "Patinetes",
    drifts: "Drifts"
};
window.CATEGORIAS_ORDEM = ["motos", "triciclos", "quadriciclos", "bikes", "patinetes", "drifts"];

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
