<div align="center">

# 🎬 Cinema OS v3.1 — DraftFilms.SKILL

### Transformando o seus prompts simples em vídeos cinematograficos 
### Pode se usar em todas as etapas pré-produção → produção → pós → distribuição → análise

**Um engine de produção audiovisual com IA que troca adjetivo vazio por parâmetro óptico real** — FOV em graus, Kelvin, obturador 180°, T-stop — em vez de `ultra real, 8k, masterpiece`.

`43 skills` · `47 estilos Visual DNA` · `17 pipelines` · `16 perfis` · `23 motores` · `21 rotas de tarefa` · `9 gates de qualidade`

*por **Daniel Rodrigues**  · Draft Creative Studio Ltd*

</div>

---

## 🧭 O que é isso

O **Cinema OS** é uma *skill* que transforma pedidos comuns ("faz um Reel do meu café") em **produção profissional estruturada**: roteiro, storyboard, shot list, prompt por motor de geração, áudio sincronizado, pós com emulação química, calendário editorial e análise de performance.

A premissa central:

> **Prompt não é achismo. É direção de fotografia escrita.**

O engine não descreve a cena com adjetivo bonito — ele resolve o plano em **geometria e física**: campo de visão em graus, movimento de câmera motivado, fonte de luz dominante, temperatura em Kelvin, proporção de contraste, paleta em HEX e áudio diegético com timestamp.

E o mais importante: **identidade visual se resolve antes de gerar** (Style Bible), e **composição se trava em still antes de animar** (Hero Frame First). Isso é o que separa clipe com cara de IA de clipe com intenção de diretor.

---

## ⚡ Começo rápido

```bash
# Rota genérica — o engine roteia sozinho
/route "quero um Reel 9:16 do meu café que nunca esfria, estilo anos 80"

# Ou seja explícito
/pipeline:p_social_reel --style SYNTHWAVE --ratio 9:16 --prompt "o café que nunca esfria"

# Analisar uma imagem e gerar prompt de recriação por motor
/route "analisa essa imagem e me dá o prompt de recriação pro Veo"

# Marca/produto real na cena? Modo Marca (opt-in)
/brand:on --marca "X" --produto "Y" --vinculo afiliado
```

**Auto-carregamento inteligente:** a Skill 15 (fundação) entra sempre · 16 se for ComfyUI · 25 se houver pós · 53 em todo vídeo · 55/56 antes de entregar · **G9** sempre que o pedido citar marca ou produto real.

---

## 🗂️ Os 5 arquivos e como conversam

| Arquivo | Papel |
|---|---|
| **`BaseSkill.md`** | 🏛️ Constituição: protocolo de execução, 14 leis universais, vocabulário óptico, conhecimento de motores, modos de tarefa, gates de qualidade |
| **`draft_studio_config.json`** | 💾 Fonte única de dados: modelos, perfis, skills, estilos, pipelines, rotas, tabelas resolvidas, templates, personagens, clientes |
| **`skillsData.ts`** | ⚙️ Tipos + carregador tipado + motor de resolução: `resolveStyle`, `routeTask`, `recommendEngines`, `compilePrompt`, `lintPrompt`, `profileKit`, helpers (FOV↔mm, wpm, hashtags) |
| **`skills_cinema_pipeline.md`** | 📚 Acervo: 43 skills + 47 estilos + 17 pipelines + metodologia pré/produção/pós/distribuição |
| **`profiles_guide.md`** | 👥 16 perfis com dores, DNA técnico, skills, estilos, motores, pipeline e KPIs já resolvidos |

**Contrato de IDs (nunca quebrar):** `skill_NN` (01–56; 32–44 = estilos legados), `dna_<alias>` + `ALIAS` em maiúsculas, `perfil_NN`, `p_<pipeline>`, `<motor>` (ex.: `seedance_2_5`), gates `G1–G9`, rotas por `id` (ex.: `analyze_image`). Todo `.md` cita apenas IDs que existem no JSON — e o TS lê o mesmo JSON. Ou seja: **os documentos nunca mente sobre os dados**.

---

## 🎥 O ciclo de produção em 5 fases

```
1 PRÉ-PRODUÇÃO   47 História → 21 Roteiro → 52 Bíblia → 22/23 Personagem → 45 Análise de refs → 48 Storyboard
2 PRODUÇÃO       46 Hero Frame → 53 Motor por plano → 19/20 Direção e câmera → Visual DNA → 24 Atuação → 26/49 Áudio
3 PÓS            54 V2V (vídeo comum → cinema) → 25 Darkroom/LUT → 26 Mix → 55 QA
4 DISTRIBUIÇÃO   17 Hook → 18 Thumb → 29 Calendário (3 hashtags) → 31 Localização → 56 Compliance
5 ANÁLISE        30 Retenção e CTR → volta para 17/18/21/28
```

### Protocolo de execução (10 passos — toda vez)

1. **Roteie** o pedido → `routeTask()`
2. **Perfil** → `perfil_01–16` herda estilos, motores e pipeline
3. **Estilo** → `resolveStyle()` — máx. **1 estilo-base + 1 acento** (ex.: NOIR + WONGKARWAI)
4. **Cadeia de skills** → `expandSkillChain()` com dependências
5. **Style Bible (G1)** → alias + paleta HEX + óptica travados
6. **Hero Frame First (G2)** → still aprovado antes de animar
7. **Feasibility Veto (G3)** → o plano viola a física? reescreva o plano, não o prompt
8. **Motor por plano** → `recommendEngines()` com `verified_on` + `status`
9. **Compilar + Lint (G4)** → `compilePrompt()` → `lintPrompt()`
10. **Entregar** o artefato + 1 linha de premissas + próximos passos

---

## 🧪 21 rotas de tarefa

| Rota | O que faz | Gate |
|---|---|---|
| `analyze_image` | Engenharia reversa de imagem → prompt de recriação por motor | G4 |
| `create_image` | T2I / I2I / multi-referência | G2 |
| `write_story` · `write_script` | Bíblia de mundo · roteiro em Master Scenes | G1 · G4 |
| `storyboard` | Storyboard, shot list e animatic | G3 |
| `generate_video` · `upgrade_video` | Vídeo por motor · V2V (vídeo comum → cinema) | G3 · G5 |
| `design_audio` · `design_sfx` · `compose_music` | Voz/SCELA · foley sincronizado · trilha | G6 · G6 · G8 |
| `grade_post` | Pós, look e LUT (emulação química) | G7 |
| `make_thumbnail` · `plan_calendar` · `analyze_performance` | Capa · calendário · performance | G4 · G8 · G4 |
| `localize` · `build_character` · `direct_acting` | Localização cultural · character sheet · direção de atuação | G4 · G2 · G5 |
| `plan_production` · `motion_ui` · `edu_content` · `audit_qa` | Bíblia/orçamento · motion de UI · edtech · auditoria | G1 · G4 · G4 · G4+G9 |

---

## 🎨 Visual DNA — 47 estilos com óptica resolvida

Cada estilo não é "referência bonitinha": é um **kit técnico pronto** — FOV°, câmera, lente, abertura, obturador, WB, fps, paleta HEX, texturas, linguagem de movimento, luz, `prompt_core` e motores recomendados por família.

| Família | Exemplos de alias |
|---|---|
| Quadrinhos | `MIGNOLA` · `SINCITY` · `MOEBIUS` |
| Anime | `AKIRA` · `GHIBLI` · `SHINKAI` · `TRIGGER` · `LOFI` |
| Animação 3D | `PIXAR` · `SPIDERVERSE` · `ARCANE` |
| Cinema de autor | `KUBRICK` · `FINCHER` · `VILLENEUVE` · `WONGKARWAI` · `WES` · `NOIR` |
| Animação clássica | `XEROX` · `LAIKA` |
| Cultura pop | `KPOP` · `SYNTHWAVE` |
| Documentário | `DOCREAL` · `PLANETEARTH` |
| Produto e marca | `KEYNOTE` · `CHEFSTABLE` · `EDITORIAL` · `SPORTS` |
| Motion / UI | `SWISS` · `BLUEPRINT` · `NEUBRUTALIST` · `LIQUIDGLASS` · `Y2K` |
| Pintura/arte | `UKIYOE` · `ARTDECO` · `STORYBOOK` · `WHITEBOARD` · `KURZGESAGT` |

```bash
/style:MIGNOLA            # por alias
styleAlias: 'SINCITY'     # no TypeScript
/style:dna_wes            # por id
```

> **🧾 IP:** nomes de artistas e estúdios são **âncoras culturais de DNA visual** (traços técnicos) — não licença para reproduzir personagem, logotipo, cena ou trade dress. Em uso comercial, use os campos `dna_tags`/`prompt_core` e mantenha o IP LOCK.

---

## 🛠️ Motores suportados (23 · specs verificadas em 2026-09-20)

| Tipo | Motores |
|---|---|
| **Vídeo** | `seedance_2_5` (até 30s, ~50 refs) · `seedance_2_0` · `veo_3_1` (áudio nativo) · `kling_3_0` (multishot/4K) · `grok_imagine_video` · `sora_2` ⚠️ *sunsetting* · `runway_gen_4_5` · `luma_ray3` · `minimax_hailuo` · `wan_2_x` · `ltx_2_x` |
| **Imagem** | `flux_2` (HEX de marca) · `gpt_image_2` (texto/UI) · `nano_banana` (4K, ~14 refs) · `seedream_5` · `midjourney` · `grok_imagine_image` |
| **Áudio** | `elevenlabs` (VO/SFX/dub) · `suno` (trilha) · áudio nativo SCELA |
| **Plataforma / pipeline / LLM** | `higgsfield` (Cinema Studio + Soul ID) · `comfyui` (DAG nodal, PuLID/IP-Adapter) · `claude` |

**Regra de decisão em uma linha:** diálogo e foley rico → Veo · multishot barato/4K → Kling · clipe longo com muitas refs → Seedance 2.5 · social rápido com som → Grok · controle total e local → ComfyUI + LTX/Wan · identidade recorrente → Soul ID ou PuLID (nunca só descrição textual).

⚠️ *`confidence: low` = specs não verificadas aqui, confirme na plataforma. Sora 2 em desativação — não iniciar pipelines novos.*

---

## 🧾 Non-IP por padrão · Modo Marca (G9) por opt-in

O estúdio trabalha **Non-IP por padrão** (Lei 11, Skill 56, G8): sem marcas reais, trade dress, vozes ou trilhas reconhecíveis.

Quando o pedido cita marca ou produto real, o engine **não recusa e não ignora** — aciona o **G9 — Modo Marca**, um portão de consentimento com 5 perguntas:

1. Qual marca e produto exatos?
2. Vínculo: afiliado · patrocinado · cedido · sem vínculo?
3. Tem link (se afiliado) e aceita rotular na descrição?
4. O contexto da cena combina com a marca?
5. Uso orgânico ou anúncio pago (pago = autorização escrita)?

**Só com as 5 respostas o modo liga.** Sem isso, segue em Non-IP com substituto genérico (ex.: *"tênis de lona clássicos preto e branco, sola de borracha desgastada"*). Mesmo com G9 ligado, continuam fora: rosto/voz de pessoa real sem consentimento, trilha reconhecível e personagens de terceiros.

Divulgação sempre que houver comissão, produto cedido ou patrocínio. Rótulo de divulgação (`#publi`, `#afiliado`) **não conta** entre as 3 hashtags da publicação. Não é aconselhamento jurídico — regras variam por país/plataforma (FTC, CONAR, normas da UE).

---

## ✅ Qualidade — gates G1–G9 e Feasibility Veto

| Gate | O que trava |
|---|---|
| **G1** | Style Bible: alias + paleta HEX + óptica antes de gerar |
| **G2** | Hero Frame aprovado em still antes de animar |
| **G3** | Feasibility Veto: nenhum plano viola a física do motor |
| **G4** | Lint limpo: sem termos vazios, mm sem justificativa, negativa plana, copy fora da lista |
| **G5** | Auditoria de atuação com <2 sintomas (15 sintomas de IA: *frozen blink*, *rubbery limbs*, *drifting eyelines*…) |
| **G6** | Áudio/lip-sync: 1 fala por vez, ≤25 palavras/10s, sem loop |
| **G7** | Darkroom: grão estocástico em todo upscale, halation, LUT testada |
| **G8** | Compliance: Non-IP, consentimento, rotulagem sintética, 3 hashtags, safe zones 12%/15% |
| **G9** | Modo Marca (opt-in, desligado por padrão) |

**Feasibility Veto** (exemplos): ação caótica com `no blur` · microatuação em FOV ≥94° · 2+ dispositivos de câmera dominantes · texto em quadro >6 palavras em motor de vídeo · multidão com >5 rostos atuando individualmente · transformação física impossível num take só.

**Lint:** erros `NO_BLUR` · `DURATION` · `SPEECH_LEN` · `ENGINE_SUNSET` · `BRAND_UNGATED` — avisos `EMPTY_TERM` · `MM_NOTATION` · `NEGATIVE_PHRASING` · `HASHTAGS` · `BRAND_NO_DISCLOSURE`.

---

## ⌨️ API em TypeScript

```ts
import { resolveStyle, routeTask, recommendEngines, compilePrompt, lintPrompt, profileKit } from './skillsData';

resolveStyle('WES')            // → VisualStyle com óptica, HEX e prompt_core resolvidos
routeTask('quero animar isso') // → rota + skills + template + gate
recommendEngines('p_social_reel') // → motores com verified_on e confidence
profileKit('perfil_08')        // → skills (com dependências), estilos, motores e pipeline do perfil
compilePrompt(style, shot)     // → prompt no schema exato do motor (Seedance 12 blocos, Veo prosa, Kling shots…)
lintPrompt(prompt)             // → erros e avisos antes de mandar gerar
```

Requisito: `tsconfig` com `"resolveJsonModule": true` (Vite/Next já trazem).

---

## 🔧 Manutenção

- **Novo estilo:** entrada em `styles[]` com alias único, `family` existente, `optics.fov_degrees`, HEX e `prompt_core` — os `.md` e o TS se atualizam sozinhos
- **Novo motor:** em `models[]` com `verified_on`, `confidence`, `grammar` + `family_routing`
- **Watchlist de marcas:** `tables.brand_mode.watchlist` (gatilho do lint)
- **Specs vencidas:** `staleEngines()` lista o que precisa reverificação (ciclo de 90 dias)

---

## 📈 Distribuição e análise (resumo)

- **3 hashtags** por publicação (marca + nicho + formato) — rótulo de divulgação vem à parte
- **Pacotes:** Essencial (3/sem) · Performance (4–5/sem, testes A/B) · Premium (sob medida)
- **Matriz CTR × Retenção:** Vencedor → replicar mecânica · Sobrevendeu pela capa → reescrever corpo · Subvalorizado → nova capa/título · Duplo fracasso → arquivar mecânica
- **Hierarquia de iteração:** thumbnail → título → hook (0–10s) → 1º open loop → corpo → closer

---

## 👤 Autor

**Daniel Rodrigues** · Draft Creative Studio Ltd
*Cinema OS v3.1.0 ·  com G9 Modo Marca*

Ideia, arquitetura e conteúdo criativo: todos os direitos do autor. Contribuições e relatos de bug são bem-vindos pelas *Issues*.

---

<div align="center">

**Da premissa ao post — com FOV em graus, não com adjetivo vazio.** 🎬

</div>
