[English](README.md) | [简体中文](README.zh-CN.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [日本語](README.ja.md)

# 🎃 Pumpkin Shift — Quebra-cabeça deslizante de Halloween

**A mansão está quieta. As abóboras numeradas têm outros planos.** Pumpkin Shift é um quebra-cabeça de Halloween criado para o [2048 Online](https://2048online.top/). Organize os números, reserve um pouco de luar para um atalho e explore doze salas mais um desafio diário. Os clássicos jogos de oito e quinze peças ganham dois deslizes lunares por sala.

**[Jogar agora](https://halloween-pumpkin-shift.crazy3d.org/)** · [Coleção de Halloween](https://github.com/AshinTop/halloween-games) · [Guia de incorporação](EMBEDDING.md) · [Notas de design](DESIGN.md)

**Idiomas da documentação:** English, 简体中文, Español, Português (Brasil), 日本語. **Interface do jogo:** apenas inglês e chinês simplificado. Os demais idiomas do README não significam que os menus do jogo já foram traduzidos.

![Tabuleiro de Halloween Pumpkin Shift com números, um espaço vazio e contadores de deslizes lunares](docs/images/gameplay.jpg)

## Pequenas descobertas na mansão 👻

- **12 salas de campanha:** oito tabuleiros de 3×3, seguidos por quatro de 4×4.
- Dois deslizes lunares por sala, movimentos comuns ilimitados e desfazer que devolve a magia usada.
- Um desafio diário de 3×3 reproduzível pela data UTC.
- Peças na posição correta ficam verdes; metas de movimentos, estrelas, som opcional e arte original acompanham o progresso.
- Dicas de caminho, seleção de sala e salvamento local para jogar sem pressa.

## Como jogar

Deixe os números em ordem crescente, da esquerda para a direita e de cima para baixo, com o espaço vazio no canto inferior direito. Os números deslizam; não se juntam.

Toque em uma peça ao lado do espaço vazio para fazer um movimento comum. Para usar um **deslize lunar**, toque em uma peça mais distante na mesma linha ou coluna. Toda a sequência entre ela e o espaço vazio se desloca. Isso conta como um movimento e gasta um dos dois deslizes da sala. Não há movimentos diagonais.

As setas do teclado e os botões de direção movem o **espaço vazio**. Por isso a peça parece ir na direção oposta. Toque diretamente nas peças quando quiser escolher um movimento específico.

Não há cronômetro nem limite obrigatório de movimentos. As estrelas recompensam soluções eficientes, mas você pode terminar depois de ultrapassar a meta. As metas da campanha têm caminhos de solução verificados; no desafio diário, inverter o embaralhamento inicial alcança a meta sem magia.

## Controles

| Ação | Mouse ou toque | Teclado |
|---|---|---|
| Mover peça vizinha | Toque na peça | Setas movem o espaço vazio |
| Deslize lunar | Toque em peça alinhada mais distante | Foque a peça e ative |
| Desfazer | Botão de desfazer | Z |
| Pedir dica de caminho | Botão de dica | Tab até o botão |
| Reiniciar ou trocar de sala | Reinício, seletor, anterior / próxima | Tab e Enter |

**A dica mostra um caminho seguro, não necessariamente o mais curto.** Ela pode desfazer seus desvios e depois inverter o embaralhamento inicial. Pedir uma dica não move uma peça nem gasta uma jogada.

## Desafio diário e progresso

Todos os tabuleiros são gerados por movimentos legais a partir da posição resolvida, portanto têm solução. A [sala 9](https://halloween-pumpkin-shift.crazy3d.org/?level=9) abre o capítulo de 4×4. O [desafio de hoje](https://halloween-pumpkin-shift.crazy3d.org/?mode=daily) usa UTC; um [link com data](https://halloween-pumpkin-shift.crazy3d.org/?mode=daily&date=2026-10-31) mantém aquele dia.

O tabuleiro atual, recordes, estrelas e preferências ficam salvos no navegador. Recarregar pode retomar a partida quando o link não pede outro tabuleiro. O histórico de desfazer dura apenas a sessão atual.

## Perguntas frequentes

**É uma versão de 2048?** As regras são de quebra-cabeça deslizante. Números iguais nunca se combinam.

**Gastei os dois deslizes. E agora?** Os movimentos comuns continuam disponíveis. Desfazer devolve magia; reiniciar recupera o desafio original.

**Por que a dica manda voltar?** Ela usa uma rota segura conhecida, sem prometer que cada passo faça parte da solução mais curta.

## Imagens e vídeo

![Pumpkin Shift em janela compacta com tabuleiro, controles de direção e botão para desfazer](docs/images/mobile.jpg)

Interface real capturada em um iframe compacto no navegador. A imagem mostra a organização dos controles; não representa um teste de desempenho em um celular físico.

[Assista à apresentação de 24 segundos](https://halloween-pumpkin-shift.crazy3d.org/intro.html) · [Baixe o MP4 com legendas](docs/media/intro.mp4). O vídeo é silencioso e foi montado com capturas reais do jogo, não com uma partida gravada continuamente. As imagens registram a interface na data da captura e podem ser anteriores a melhorias visuais posteriores.

## Coloque o jogo no seu site

```html
<iframe src="https://halloween-pumpkin-shift.crazy3d.org/"
  title="Pumpkin Shift"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

O layout considera janelas iframe de 1160×654 no desktop, 390×650 em retrato e 844×340 em paisagem. Não exige parâmetro especial de incorporação. Use a altura realmente disponível depois da barra do site principal.

A versão on-line é publicada no Cloudflare a partir deste repositório do GitHub. Defina uma altura real para o iframe e reserve espaço para a barra do site principal. O site pode oferecer tela cheia. Consulte [EMBEDDING.md](EMBEDDING.md) para os detalhes.

## Executar e verificar localmente

```sh
python3 -m http.server 4173
```

Sirva a pasta raiz do repositório e abra [http://localhost:4173/](http://localhost:4173/). O jogo é estático, sem compilação ou instalação de dependências. Use HTTP(S), pois abrir por `file://` pode bloquear os módulos JavaScript. Os testes exigem Node.js.

```sh
npm test
```

Os **11 testes** cobrem soluções e metas da campanha, geração diária, gasto e esgotamento dos deslizes, dicas após desvios, limites do tabuleiro, links com data e validação do estado salvo.

O código do jogo não exige conta, API remota, SDK de anúncios nem CDN de arquivos externos. Os registros ficam no navegador, sem sincronização na nuvem. O Cloudflare pode adicionar scripts de hospedagem e registros de requisições. O áudio sintetizado opcional segue as permissões do navegador.

## Outras aventuras ao luar 🍬

- [Pumpkin 2048](https://halloween-2048.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-2048) — Fusões clássicas e Lantern Trials.
- [Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-3d) — Lights Out espacial com lanternas conectadas.
- [Haunted Hearts](https://halloween-love-game.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-love-game) — Dois fantasmas, portões e uma lanterna compartilhada.
- [Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-tripeaks) — Paciência com valores vizinhos e Moon Bridges.

## Créditos e apoio

Criado para o **Midnight Candy Club de AshinTop**, com colaboração de IA orientada por pessoas em design, programação, documentação, testes e revisão. As ilustrações originais e os sons sintetizados foram feitos para este projeto. Veja as [notas de design](DESIGN.md).

Gostou desta pequena aventura? **[Deixe uma estrela para Pumpkin Shift no GitHub](https://github.com/AshinTop/halloween-pumpkin-shift)** para guardar o projeto e acompanhar novidades. Ao relatar um problema, informe fase ou modo, navegador, tamanho da janela e passos para reproduzi-lo. Conheça a [coleção completa de Halloween](https://github.com/AshinTop/halloween-games).
