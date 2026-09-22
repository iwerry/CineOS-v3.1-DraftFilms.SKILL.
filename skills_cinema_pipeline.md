<!-- # Skill Criada por Daniel Rodrigues · Terminal AI — Draft Creative Studio Ltd · skills_cinema_pipeline v3.1.0 (tabelas geradas de draft_studio_config.json) -->
# Acervo Profissional — 43 Skills · 47 Estilos · 17 Pipelines

Compatível com ComfyUI, Higgsfield Cinema Studio, Seedance 2.0/2.5, Veo 3.1, Kling 3.0, Grok Imagine, FLUX.2, GPT Image 2 e Nano Banana. Regras e conhecimento de motores: `BaseSkill.md`. Dados: `draft_studio_config.json`. Funções: `skillsData.ts`.

## Como invocar
```bash
/skill:<id|nome> --prompt "<ideia>" --ratio 16:9 --style SINCITY
/pipeline:p_short_film --style FINCHER --ratio 2.39:1
/route "quero analisar essa imagem e gerar o prompt de recriação para o Veo"
/engines --mode t2v --style KUBRICK
/brand:on --marca "X" --produto "Y" --vinculo afiliado   # Modo Marca (G9)
```
Auto-carregamento: **Skill 15** sempre · **16** se ComfyUI · **25** se pós · **53** em todo vídeo · **55/56** antes de entregar · **G9** quando o pedido citar marca/produto real.

## Ciclo de produção em 5 fases
**1 Pré-produção:** 47 História → 21 Roteiro → 52 Bíblia → 22/23 Personagem → 45 Análise de refs → 48 Storyboard

**2 Produção:** 46 Hero Frame → 53 Motor por plano → 19/20 Direção e câmera → estilo (01–14, 27, 28, 50, 51 + Visual DNA) → 24 Atuação → 26/49 Áudio

**3 Pós:** 54 V2V → 25 Darkroom/LUT → 26 Mix → 55 QA

**4 Distribuição:** 17 Hook → 18 Thumb → 29 Calendário (3 hashtags) → 31 Localização → 56 Compliance

**5 Análise:** 30 Retenção e CTR → volta para 17/18/21/28

## Índice de skills (fonte: JSON)
| Código | Skill | Fase | Requer | Alimenta | Modos |
|---|---|---|---|---|---|
| SKILL 01 | Anime Action | Produção | 15 | 25,26 | generate_video, create_image |
| SKILL 02 | Brand Story | Produção | 15,21 | 25,26,29 | generate_video, write_script |
| SKILL 03 | Cartoon | Produção | 15 | — | generate_video, create_image |
| SKILL 04 | 3D CGI | Produção | 15 | 12,13 | generate_video, create_image |
| SKILL 05 | Cinematic | Produção | 15,20 | 25 | generate_video, create_image, plan_production |
| SKILL 06 | Comic to Video | Produção | 15 | — | generate_video |
| SKILL 07 | Fashion Look | Produção | 15 | 25 | generate_video, create_image |
| SKILL 08 | Fight Scene | Produção | 15,20,24 | 26 | generate_video |
| SKILL 09 | Food & Beverage | Produção | 15 | 26 | generate_video, create_image |
| SKILL 10 | Motion Design | Produção | 15 | 27,51 | motion_ui, generate_video |
| SKILL 11 | Music Video | Produção | 15,26 | 25 | generate_video, compose_music |
| SKILL 12 | Product 360 | Produção | 15 | 13 | generate_video |
| SKILL 13 | Product Ad | Produção | 15,17 | 29 | generate_video, write_script |
| SKILL 14 | Real Estate | Produção | 15,20 | 25 | generate_video |
| SKILL 15 | Seedance Base | Fundação | — | — | route_model |
| SKILL 16 | ComfyUI Mastery | Fundação | — | — | route_model, grade_post |
| SKILL 17 | Social Hook | Produção | 15 | 13,29 | write_script, generate_video |
| SKILL 18 | Thumbnail para Redes Sociais | Distribuição | 46 | 29,30 | make_thumbnail, create_image |
| SKILL 19 | Direção de Cinema Digital (Higgsfield / ComfyUI) | Produção | 15,16,20 | 24,25 | generate_video, plan_production, route_model |
| SKILL 20 | Técnicas de Câmera Física e Digital | Produção | 15 | — | generate_video, storyboard |
| SKILL 21 | Roteirização em Master Scenes | Pré-produção | — | 48,17,28 | write_script |
| SKILL 22 | Consistent Characters (Identidade Visual) | Pré-produção | 16 | 23,24 | build_character |
| SKILL 23 | Character Sheet (Do Rascunho à Apresentação) | Pré-produção | 22 | — | build_character, create_image |
| SKILL 24 | Direção de Atuação Sintética (Acting Director OS) | Produção | 22 | 26 | direct_acting |
| SKILL 25 | Pós-Produção e Emulação Química (Darkroom + LUT) | Pós | 16 | — | grade_post |
| SKILL 26 | Áudio Multimodal e Foley Síncrono (SCELA) | Áudio | — | 49 | design_audio, design_sfx |
| SKILL 27 | Motion Design e Launch Video (MiniMax H3 / Higgsfield) | Produção | 15 | 29 | generate_video, motion_ui |
| SKILL 28 | Prompt Engineering Seedance Faceless (Documentário) | Produção | 15,20 | 26 | generate_video |
| SKILL 29 | Calendário Editorial e Distribuição Multi-Plataforma | Distribuição | — | 30 | plan_calendar |
| SKILL 30 | Análise Pós-Publicação e Iteração de Dados | Análise | 29 | 17,18,21,28 | analyze_performance |
| SKILL 31 | Localização e Adaptação Cultural Multi-Idioma | Distribuição | 21 | 29 | localize |
| SKILL 45 | Análise de Imagem e Engenharia Reversa de Prompt | Pré-produção | 15 | 46,48,54,55 | analyze_image, audit_qa |
| SKILL 46 | Direção de Imagem (T2I / I2I / Multi-Referência) | Produção | 15 | 18,48,54 | create_image, make_thumbnail |
| SKILL 47 | Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo) | Pré-produção | — | 21,22,48,52 | write_story, plan_production |
| SKILL 48 | Storyboard, Shot List e Animatic (Pré-Vis) | Pré-produção | 21,20 | 46,53,55 | storyboard, plan_production |
| SKILL 49 | Sound Design Bible, Trilha e Direção de Voz | Áudio | 26 | — | design_audio, design_sfx, compose_music |
| SKILL 50 | Estúdio Educacional (Aula, Explainer, EdTech) | Produção | 21,15 | 26,29 | edu_content, write_script, generate_video |
| SKILL 51 | Motion de Produto Digital (UX/UI para Vídeo) | Produção | 10,27 | 29 | motion_ui, generate_video |
| SKILL 52 | Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento) | Pré-produção | 47,53 | 48,19 | plan_production |
| SKILL 53 | Roteador de Motores e Adaptador de Prompt | Fundação | 15 | 19,46,48,54 | route_model |
| SKILL 54 | Upgrade de Vídeo Comum para Cinema (V2V Restyle) | Pós | 45,46,25 | 26 | upgrade_video, grade_post |
| SKILL 55 | Continuidade e Auditoria de Qualidade (Script Supervisor Sintético) | Qualidade | 15 | — | audit_qa |
| SKILL 56 | Compliance, IP e Proveniência | Qualidade | — | 29 | audit_qa |

### Estilos legados (SKILL 32–44, mantidos por compatibilidade)
| Legado | Alias | Nome completo |
|---|---|---|
| SKILL 32 | MIGNOLA | Mike Mignola — Hellboy / Dark Horse Comics |
| SKILL 33 | SINCITY | Frank Miller — Sin City / Dark Horse Comics (Hardboiled Ink Noir) |
| SKILL 34 | MOEBIUS | Jean Giraud 'Moebius' — Ligne Claire / Heavy Metal / BD Franco-Belga |
| SKILL 35 | AKIRA | Katsuhiro Otomo — Akira / Neo-Tokyo Cel Cyberpunk (1988) |
| SKILL 36 | GHIBLI | Studio Ghibli — Hayao Miyazaki Watercolor Pastoral |
| SKILL 37 | PIXAR | Pixar Animation Studios — PBR Toon 3D Moderno |
| SKILL 38 | XEROX | Walt Disney Animation Studios — Xerox Classic (1961–1977) |
| SKILL 39 | KPOP | K-Pop Comeback MV Gloss — Cultura Pop Coreana (Seul) |
| SKILL 40 | SYNTHWAVE | Synthwave / Outrun — VHS Retro MTV Anos 80 |
| SKILL 41 | DOCREAL | Documentary Photoreal — Cinéma Vérité / National Geographic Realism |
| SKILL 42 | LAIKA | Laika Studios — Stop-Motion Craft (Coraline / Kubo) |
| SKILL 43 | WES | Wes Anderson — Planimetric Pastel (Grand Budapest / Moonrise Kingdom) |
| SKILL 44 | NOIR | Hollywood Film Noir — Eastman Double-X 5222 (Preto e Branco Clássico) |

## Estilos Visual DNA v3.0 (47)
Cada estilo carrega óptica, paleta, textura, movimento, luz, referências, `prompt_core` e motores por família. Use por alias (`/style:WES`).

#### Quadrinhos
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **MIGNOLA** | Mike Mignola — Hellboy / Dark Horse Comics | 84 | 4300K | #8B0000 #CC7722 #1A1A1A | trailer de HQ; true crime estilizado; capas de horror/ocultismo |
| **SINCITY** | Frank Miller — Sin City / Dark Horse Comics (Hardboiled Ink Noir) | 65 | 5600K | #000000 #FFFFFF #D40000 | trailer noir; clipe dramático; anúncio de perfume/bebida noir |
| **MOEBIUS** | Jean Giraud 'Moebius' — Ligne Claire / Heavy Metal / BD Franco-Belga | 94 | 6500K | #D9B382 #4ECDC4 #E86A92 | sci-fi contemplativo; arquitetura onírica; conceito de jogo/game world |
*Motores (imagem → vídeo):* midjourney, flux_2 → seedance_2_5, kling_3_0, wan_2_x. Hero Frame no estilo (still) → i2v; impact frames e stepped 12fps no prompt.

#### Anime
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **AKIRA** | Katsuhiro Otomo — Akira / Neo-Tokyo Cel Cyberpunk (1988) | 78 | 3200K | #FF2E63 #08D9D6 #252A34 | trailer cyberpunk; clipe synth/hip-hop; abertura de game |
| **GHIBLI** | Studio Ghibli — Hayao Miyazaki Watercolor Pastoral | 47 | 5600K | #7FB069 #87CEEB #F4E1C1 | conteúdo infantil/família; turismo e hospitalidade; marca artesanal/orgânica |
| **SHINKAI** | Makoto Shinkai — Luminous Sky Anime (Your Name / Weathering With You) | 54 | 6000K | #4FB3FF #FF9E9E #FFE0B5 | clipe romântico; campanha turismo; abertura de curta |
| **TRIGGER** | Studio Trigger — Neon Flat-Pop Anime (Kill la Kill / Cyberpunk: Edgerunners) | 107 | 4000K | #FF3D81 #00F0FF #FFE600 | trailer de ação; clipe eletrônico; campanha streetwear |
| **LOFI** | Lo-Fi Anime Study Beats — Cozy Night Loop Aesthetic | 47 | 3000K | #F2A65A #264653 #2A9D8F | visualizer de playlist; fundo de live/study; capa de álbum animada |
*Motores (imagem → vídeo):* nano_banana, seedream_5 → seedance_2_5, kling_3_0, wan_2_x. Forte em i2v a partir de still estilizado; evitar pedir '3D'.

#### Animação 3D
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **PIXAR** | Pixar Animation Studios — PBR Toon 3D Moderno | 54 | 5600K | #FF6B35 #004E89 #F7C59F | mascote de marca; educativo infantil; trailer de app casual |
| **SPIDERVERSE** | Spider-Man: Into the Spider-Verse — Comic-Print 3D/2D Hybrid (Sony Pictures Imageworks) | 65 | 5600K | #FF2E93 #00E5FF #FFD400 | trailer de herói original; clipe hip-hop; campanha Gen Z |
| **ARCANE** | Arcane — Fortiche Productions (Painterly 3D/2D Hybrid) | 54 | 4300K | #12B5A5 #E4257A #2A1F3D | trailer de fantasia urbana; abertura de série; clipe alternativo |
*Motores (imagem → vídeo):* flux_2, gpt_image_2 → kling_3_0, seedance_2_0, veo_3_1. SSS/peach fuzz e olhos vivos; consistência via referências.

#### Animação 2D
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **XEROX** | Walt Disney Animation Studios — Xerox Classic (1961–1977) | 47 | 5200K | #2B2B2B #D8C9A7 #8A9A5B | nostalgia/retrô; storybook animado; campanha sazonal |
| **UKIYOE** | Ukiyo-e Woodblock — Hokusai / Hiroshige Edo Print Motion | 47 | 5600K | #1E3A5F #F2E8CF #C0392B | campanha japonesa/cultural; abertura de documentário; clipe artístico |
| **PIXELART** | 16-Bit Pixel Art JRPG — SNES / Mega Drive Era | 47 | neutral | #1A1C2C #5D275D #B13E53 | trailer de game indie; nostalgia gamer; loading screen animada |
*Motores (imagem → vídeo):* gpt_image_2, midjourney → kling_3_0, seedance_2_0. Cadência 12fps declarada; evitar 'smooth 60fps'.

#### Música / Pop
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **KPOP** | K-Pop Comeback MV Gloss — Cultura Pop Coreana (Seul) | 65 | 5600K | #C77DFF #72EFDD #F8F9FA | clipe pop; teaser de comeback; campanha beauty/fashion Gen Z |
*Motores (imagem → vídeo):* nano_banana, seedream_5 → seedance_2_5, kling_3_0. Beat map em segundos; áudio nativo ou Suno.

#### Retrô
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **SYNTHWAVE** | Synthwave / Outrun — VHS Retro MTV Anos 80 | 65 | 3200K | #FF6B6B #4ECDC4 #2C003E | clipe eletrônico; abertura/bumper retrô; campanha gamer |
| **Y2K** | Y2K Chrome Cyber-Optimism — 1999–2003 Futurism | 54 | 6500K | #C0C8D8 #4FD1FF #E8F1FF | campanha tech/fashion; bumper; clipe pop |
| **VAPORWAVE** | Vaporwave — Marble Busts, Pastel Grid, Windows-95 Nostalgia | 47 | 5000K | #FF71CE #01CDFE #05FFA1 | visualizer; capa de álbum animada; arte conceito |
| **SUPER8** | Super 8 Home Movie — Kodachrome Nostalgia | 65 | 5500K | #D9822B #8E2C1F #F1DFB8 | brand story nostálgico; flashback de curta; campanha de memória afetiva |
*Motores (imagem → vídeo):* midjourney, flux_2 → seedance_2_0, kling_3_0, grok_imagine_video. Artefatos (tape warp, grain) declarados como feature.

#### Documental
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **DOCREAL** | Documentary Photoreal — Cinéma Vérité / National Geographic Realism | 47 | ambient | #6B705C #A5A58D #FFE8D6 | brand story autêntica; jornalismo/ONG; true crime |
| **PLANETEARTH** | BBC Natural History — Planet Earth Ultra-Long-Lens Wildlife | 18 | 5000K | #B08D57 #3E5C3A #D9C9A3 | documentário de natureza; ESG/turismo; brand film ambiental |
| **TRUECRIME** | Faceless True-Crime Documentary — Cold Dossier Look | 84 | 5600K | #6B7280 #9CA3AF #374151 | canal faceless; história/ciência; podcast em vídeo |
*Motores (imagem → vídeo):* nano_banana, flux_2 → veo_3_1, seedance_2_5, kling_3_0. Sem golden hour; [live] meio-dia; positivo-only.

#### Stop-motion / Craft
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **LAIKA** | Laika Studios — Stop-Motion Craft (Coraline / Kubo) | 35 | 3200K | #B5651D #4A4E69 #9A8C98 | curta autoral; campanha artesanal; abertura de série |
| **CLAYMATION** | Aardman Animations — Claymation Comedy (Wallace & Gromit / Shaun the Sheep) | 47 | 3200K | #D9A066 #8FB8DE #E4572E | campanha humorística; conteúdo infantil; explicador leve |
| **PAPERCUT** | Paper Cut-Out Diorama — Layered Paper Craft (Kirigami Motion) | 39 | 5000K | #E76F51 #F4A261 #2A9D8F | abertura editorial; storytelling de marca; conteúdo educativo |
*Motores (imagem → vídeo):* flux_2, midjourney → veo_3_1, seedance_2_0, kling_3_0. Jitter/12fps é feature; peça 'step exposure'.

#### Cinema de autor
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **WES** | Wes Anderson — Planimetric Pastel (Grand Budapest / Moonrise Kingdom) | 39 | 5600K | #E9C46A #F4A261 #2A9D8F | campanha de moda/hotelaria; brand film quirky; clipe indie |
| **NOIR** | Hollywood Film Noir — Eastman Double-X 5222 (Preto e Branco Clássico) | 47 | mono, | #000000 #FFFFFF #8C8C8C | thriller/mistério; perfume/bebida de luxo; true crime |
| **NEWHOLLYWOOD70S** | New Hollywood 1970s — Zoom-Lens Grain (The French Connection / Taxi Driver era) | 54 | 3200K | #8C5A2B #C98C3E #2E3B32 | curta noir urbano; campanha vintage; true crime dramatizado |
| **KUBRICK** | Stanley Kubrick — One-Point Perspective Symmetry (The Shining / 2001) | 75 | 3800K | #B32C2C #E8E1D0 #1B1B1B | curta de suspense; clipe conceitual; campanha arquitetônica |
| **FINCHER** | David Fincher — Desaturated Precision Thriller (Se7en / Zodiac / The Social Network) | 60 | 3200K | #5B6B3A #B8892B #1A1A14 | thriller; true crime dramatizado; campanha corporativa sombria |
| **VILLENEUVE** | Denis Villeneuve — Monolithic Fog Brutalism (Dune / Blade Runner 2049) | 84 | 3000K | #E07B39 #3D2B1F #C9A66B | trailer de sci-fi; brand film de arquitetura; clipe épico |
| **WONGKARWAI** | Wong Kar-wai — Step-Printed Neon Longing (In the Mood for Love / Chungking Express) | 47 | 3200K | #C1121F #2A9D8F #F4A261 | clipe romântico; campanha de perfume; curta urbano |
| **LEONE** | Sergio Leone — Spaghetti Western Extreme Close-Up (Anamorphic Dust) | 65 | 5600K | #C89B5B #8A5A2B #F2DDB0 | curta western; campanha de bebida/couro; clipe rock |
| **BURTON** | Tim Burton — Gothic Whimsy (Spiral Shadows / Striped Palettes) | 54 | 4300K | #1B1B2F #E8E8E8 #6A4C93 | campanha de Halloween; curta fantástico; clipe indie |
*Motores (imagem → vídeo):* nano_banana, flux_2 → veo_3_1, seedance_2_5, kling_3_0. Óptica em graus, WB em Kelvin, um dispositivo de câmera.

#### Educação
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **KURZGESAGT** | Kurzgesagt — In a Nutshell (Flat-Vector Science Explainer) | 47 | neutral | #0B1026 #FF6F91 #FFC75F | explicador de ciência; aula em vídeo; pitch de startup |
| **WHITEBOARD** | Whiteboard Animation — RSA Animate / Educational Hand-Drawn Explainer | 39 | 5600K | #FFFFFF #111111 #E63946 | aula/palestra; explicador B2B; onboarding |
| **STORYBOOK** | Children's Storybook Watercolor — Picture-Book Illustration (EdTech Kids) | 47 | 5600K | #F6D5C4 #A8DADC #F1FAEE | contos infantis; material didático; campanha família |
| **BLUEPRINT** | Technical Blueprint — Engineering Draft Explainer | 47 | neutral | #0B3D91 #FFFFFF #7FD8FF | explicador de produto técnico; manual/treinamento; pitch industrial |
*Motores (imagem → vídeo):* gpt_image_2, nano_banana → kling_3_0, veo_3_1. Diagramas em código [scheme]; metáfora visual por conceito.

#### Design gráfico
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **SWISS** | Swiss / International Typographic Style — Grid Motion Design | 47 | neutral | #FFFFFF #111111 #E30613 | vinheta de marca; apresentação institucional; promo de evento |
| **ARTDECO** | Art Deco Luxury — Gatsby-Era Geometric Gold (Cassandre Poster Motion) | 47 | 3200K | #0B0B0F #D4AF37 #F5E6C8 | perfume/joalheria; convite de gala; abertura de hotel de luxo |
*Motores (imagem → vídeo):* gpt_image_2, flux_2 → kling_3_0, minimax_hailuo. Tipografia crítica renderizada em código.

#### UI / Motion
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **NEUBRUTALIST** | Neubrutalism UI Motion — Hard Shadows / Bold Borders | 47 | neutral | #FFDE59 #FF5757 #5CE1E6 | demo de app criativo; landing page em vídeo; anúncio de SaaS jovem |
| **LIQUIDGLASS** | Liquid Glass UI Motion — Translucent Refractive Interface (2025–26 OS Design Language) | 47 | 6500K | #F5F7FF #A5B4FC #67E8F9 | demo de app premium; anúncio de lançamento; apresentação de investidor |
*Motores (imagem → vídeo):* gpt_image_2, flux_2 → minimax_hailuo, veo_3_1. UI e texto em código (Skill 51); vídeo só ambiente/hero.

#### Comercial
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **CHEFSTABLE** | Chef's Table — Slow Cinematic Gastronomy Portrait | 29 | 3800K | #2B1B12 #C97B3A #E8D5B0 | restaurante autoral; cardápio sazonal; chef influencer |
| **EDITORIAL** | Vogue-Grade Fashion Editorial — High-Fashion Strobe Glamour | 29 | 5600K | #F5F0EB #111111 #B8860B | lookbook; campanha de coleção; beauty/cosméticos |
| **KEYNOTE** | Keynote Minimal Product Film — Macro Precision on Seamless Background | 24 | 5600K | #FFFFFF #111111 #C9CED6 | lançamento eletrônico; e-commerce premium; joalheria/relógio |
| **SPORTS** | Kinetic Sports Anthem — Grit, Grain & Slow-Mo Sweat | 84 | 5600K | #1C1C1C #E63946 #F1FAEE | marca esportiva; academia/luta; campanha motivacional |
*Motores (imagem → vídeo):* flux_2, gpt_image_2 → veo_3_1, kling_3_0, seedance_2_0. HEX de marca e texto literal; macro/produto em motion-control.

#### Horror
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **FOUNDFOOTAGE** | Analog Horror / Found-Footage VHS — Lo-Fi Dread | 65 | 3200K | #3A3D35 #8B9A7B #D8D5C4 | horror curto; ARG/alternate reality; teaser de jogo |
*Motores (imagem → vídeo):* midjourney, flux_2 → veo_3_1, kling_3_0. Imperfeição controlada; nunca gore gratuito.

## Pipelines
### `p_social_reel` — Reel/Short/TikTok com Hook
*Proporção 9:16 · ~20s · gates G1, G2, G3, G4, G8* — Hook decide: gere 3 e teste.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 17 Social Hook | 3 variantes de hook (0–1.8s) | `hooks.md` |
| 2 | 21 Roteirização em Master Scenes | Master Scene 145 wpm com b-roll | `script.md` |
| 3 | 46 Direção de Imagem | Hero Frame e capa | `hero.png` |
| 4 | 53 Roteador de Motores e Adaptador de Prompt | Motor por plano | `engine_plan.json` |
| 5 | STYLE (Visual DNA) | Look Visual DNA travado | `style_lock` |
| 6 | 26 Áudio Multimodal e Foley Síncrono | Speech/SFX SCELA | `audio_block` |
| 7 | 18 Thumbnail para Redes Sociais | Thumb/capa 4 palavras | `thumb.png` |
| 8 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Slot no calendário + 3 hashtags | `post.json` |
| 9 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_product_ad` — Anúncio de Produto de Alta Conversão
*Proporção 9:16 · ~20s · gates G2, G3, G4, G8* — Produza 5–10 variações modulares trocando só o hook.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 13 Product Ad | Estrutura hook→benefício→CTA | `ad_script.md` |
| 2 | 17 Social Hook | Hook A/B/C | `hooks.md` |
| 3 | 46 Direção de Imagem | Stills de produto com HEX de marca | `stills` |
| 4 | 12 Product 360 | Rotação/macro | `360.mp4` |
| 5 | STYLE (Visual DNA) | Estilo (ex.: KEYNOTE) | `style_lock` |
| 6 | 26 Áudio Multimodal e Foley Síncrono | Áudio e VO | `audio_block` |
| 7 | 30 Análise Pós-Publicação e Iteração de Dados | Leitura de CTR×Retenção | `report.md` |
| 8 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_brand_film` — Filme Institucional (Brand Story)
*Proporção 16:9 · ~75s · gates G1, G2, G3, G4, G5, G6, G7, G8* — Entregue também cutdowns de 15s e 30s.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 47 Arquiteto de História | Premissa e estrutura | `story_bible` |
| 2 | 52 Bíblia de Pré-Produção | Style bible + orçamento | `production_bible.md` |
| 3 | 21 Roteirização em Master Scenes | Master Scenes | `script.md` |
| 4 | 48 Storyboard, Shot List e Animatic | Storyboard | `storyboard.json` |
| 5 | 22 Consistent Characters | Personagem de marca | `character.json` |
| 6 | 53 Roteador de Motores e Adaptador de Prompt | Motor por plano | `engine_plan.json` |
| 7 | STYLE (Visual DNA) | Look travado | `style_lock` |
| 8 | 24 Direção de Atuação Sintética | ACTING PROFILE | `acting` |
| 9 | 26 Áudio Multimodal e Foley Síncrono | SCELA + trilha | `audio` |
| 10 | 25 Pós-Produção e Emulação Química | Darkroom + LUT | `graded` |
| 11 | 55 Continuidade e Auditoria de Qualidade | QA | `qa_report.md` |
| 12 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_launch_15s` — Launch Video 15s (Motion Design)
*Proporção 16:9 · ~15s · gates G1, G3, G4, G8* — Copy list é contrato; tipografia crítica renderiza em código.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 27 Motion Design e Launch Video | Cinco Leis + beat sheet + copy list | `launch_prompt` |
| 2 | 10 Motion Design | Estilo de motion | `motion_style` |
| 3 | 51 Motion de Produto Digital | UI/tokens se produto digital | `ui_spec` |
| 4 | STYLE (Visual DNA) | Estilo nomeado | `style_lock` |
| 5 | 53 Roteador de Motores e Adaptador de Prompt | Motor/segmentos | `engine_plan.json` |
| 6 | 26 Áudio Multimodal e Foley Síncrono | Silêncio obrigatório | `audio_block` |
| 7 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_short_film` — Curta-Metragem Sintético
*Proporção 2.39:1 · ~300s · gates G1, G2, G3, G4, G5, G6, G7, G8* — Aprove todos os Hero Frames antes de gerar qualquer vídeo.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 47 Arquiteto de História | Story bible | `story_bible` |
| 2 | 21 Roteirização em Master Scenes | Master Scenes | `script.md` |
| 3 | 52 Bíblia de Pré-Produção | Style bible/orçamento/riscos | `production_bible.md` |
| 4 | 22 Consistent Characters | Personagens .json | `characters` |
| 5 | 23 Character Sheet | Character sheets | `sheets` |
| 6 | 48 Storyboard, Shot List e Animatic | Storyboard + animatic | `storyboard.json` |
| 7 | 53 Roteador de Motores e Adaptador de Prompt | Motor por plano | `engine_plan.json` |
| 8 | 19 Direção de Cinema Digital | Hero Frame First + Feasibility Veto | `hero_frames` |
| 9 | 20 Técnicas de Câmera Física e Digital | Câmera motivada | `camera` |
| 10 | STYLE (Visual DNA) | Look travado | `style_lock` |
| 11 | 24 Direção de Atuação Sintética | ACTING PROFILE por take | `acting` |
| 12 | 26 Áudio Multimodal e Foley Síncrono | SCELA | `audio` |
| 13 | 49 Sound Design Bible, Trilha e Direção de Voz | Sound bible | `sound_bible.md` |
| 14 | 25 Pós-Produção e Emulação Química | Darkroom/LUT | `graded` |
| 15 | 55 Continuidade e Auditoria de Qualidade | QA/continuidade | `qa_report.md` |
| 16 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_faceless_doc` — Documentário Faceless Multishot
*Proporção 16:9 · ~480s · gates G1, G3, G4, G7, G8* — Diagramas [scheme] são renderizados em código, nunca gerados.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 47 Arquiteto de História | Tese e estrutura | `story_bible` |
| 2 | 21 Roteirização em Master Scenes | Roteiro 145 wpm + hook | `script.md` |
| 3 | 28 Prompt Engineering Seedance Faceless | Prompts de 10s (12 blocos) | `blocks` |
| 4 | 20 Técnicas de Câmera Física e Digital | FOV/câmera | `camera` |
| 5 | STYLE (Visual DNA) | Ex.: TRUECRIME/DOCREAL | `style_lock` |
| 6 | 26 Áudio Multimodal e Foley Síncrono | Linha AUDIO verbatim | `audio` |
| 7 | 25 Pós-Produção e Emulação Química | Grão/LUT | `graded` |
| 8 | 18 Thumbnail para Redes Sociais | Thumb + título em par | `thumb` |
| 9 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Calendário | `post.json` |
| 10 | 30 Análise Pós-Publicação e Iteração de Dados | Retenção por minuto | `report.md` |

### `p_music_video` — Videoclipe / Visualizer
*Proporção 16:9 · ~90s · gates G1, G2, G3, G4, G6, G8* — Cortes sincronizados ao beat; loop de 8–15s para visualizer.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 49 Sound Design Bible, Trilha e Direção de Voz | Music brief (Suno/skill externo) | `music_brief.json` |
| 2 | 11 Music Video | Performance/Narrativa/Ambient | `concept.md` |
| 3 | 48 Storyboard, Shot List e Animatic | Storyboard no beat | `storyboard.json` |
| 4 | 22 Consistent Characters | Artista consistente | `character.json` |
| 5 | 53 Roteador de Motores e Adaptador de Prompt | Motor por plano | `engine_plan.json` |
| 6 | STYLE (Visual DNA) | Ex.: KPOP/SYNTHWAVE | `style_lock` |
| 7 | 26 Áudio Multimodal e Foley Síncrono | Sync de áudio | `audio` |
| 8 | 25 Pós-Produção e Emulação Química | Grade | `graded` |
| 9 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Teaser vertical + 3 hashtags | `post.json` |

### `p_food_ad` — Gastronomia (Reel/Ad de Delivery)
*Proporção 9:16 · ~15s · gates G2, G3, G4, G8* — 120fps em líquidos; vapor sempre em contraluz.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 09 Food & Beverage | Money shot e macro | `shots.md` |
| 2 | 17 Social Hook | Hook ASMR/awe | `hook.md` |
| 3 | 46 Direção de Imagem | Still do prato | `hero.png` |
| 4 | STYLE (Visual DNA) | Ex.: CHEFSTABLE | `style_lock` |
| 5 | 26 Áudio Multimodal e Foley Síncrono | Foley diegético | `audio` |
| 6 | 18 Thumbnail para Redes Sociais | Capa | `thumb` |
| 7 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Calendário | `post.json` |

### `p_fashion_lookbook` — Lookbook de Moda
*Proporção 9:16 · ~40s · gates G1, G2, G5, G7, G8* — Separe identidade (PuLID/Soul ID) de figurino (IP-Adapter 0.3–0.5).

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 22 Consistent Characters | Modelo consistente | `character.json` |
| 2 | 23 Character Sheet | Sheet + figurino | `sheet` |
| 3 | 07 Fashion Look | Caimento/passarela | `shots.md` |
| 4 | 46 Direção de Imagem | Stills editoriais | `stills` |
| 5 | STYLE (Visual DNA) | Ex.: EDITORIAL | `style_lock` |
| 6 | 26 Áudio Multimodal e Foley Síncrono | Foley de tecido | `audio` |
| 7 | 25 Pós-Produção e Emulação Química | Grade Portra | `graded` |
| 8 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Calendário | `post.json` |
| 9 | 56 Compliance, IP e Proveniência | Compliance/likeness | `checklist` |

### `p_real_estate_tour` — Tour Imobiliário
*Proporção 16:9 · ~60s · gates G2, G3, G4, G7* — Verticais corrigidas; sem janela estourada.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 14 Real Estate | Roteiro espacial | `tour_plan.md` |
| 2 | 20 Técnicas de Câmera Física e Digital | Drone→fachada→Steadicam | `camera` |
| 3 | 46 Direção de Imagem | Stills de hora azul | `stills` |
| 4 | STYLE (Visual DNA) | Ex.: KEYNOTE | `style_lock` |
| 5 | 26 Áudio Multimodal e Foley Síncrono | Ambiência | `audio` |
| 6 | 25 Pós-Produção e Emulação Química | Grade | `graded` |
| 7 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Cortes 9:16 | `post.json` |

### `p_ux_demo` — Demo de Produto Digital (UX/UI)
*Proporção 16:9 · ~25s · gates G1, G4, G8* — UI/tipografia em código; vídeo só para ambiente.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 51 Motion de Produto Digital | Fluxo, estados e tokens | `ui_motion_spec.json` |
| 2 | 10 Motion Design | Estilo de motion | `motion_style` |
| 3 | 27 Motion Design e Launch Video | Beat sheet e copy list | `launch_prompt` |
| 4 | 46 Direção de Imagem | Mockup de dispositivo/hero | `hero` |
| 5 | STYLE (Visual DNA) | Ex.: LIQUIDGLASS | `style_lock` |
| 6 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Versão 9:16 | `post.json` |

### `p_edu_explainer` — Explainer / Micro-aula
*Proporção 16:9 · ~120s · gates G1, G4, G6, G8* — Uma pergunta de recuperação no final.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 50 Estúdio Educacional | Objetivo + plano de aula | `lesson_plan.md` |
| 2 | 21 Roteirização em Master Scenes | Roteiro 145 wpm | `script.md` |
| 3 | 46 Direção de Imagem | Metáforas visuais | `frames` |
| 4 | STYLE (Visual DNA) | Ex.: WHITEBOARD/KURZGESAGT | `style_lock` |
| 5 | 26 Áudio Multimodal e Foley Síncrono | VO + legendas | `audio` |
| 6 | 31 Localização e Adaptação Cultural Multi-Idioma | Localização | `l10n` |
| 7 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Distribuição | `post.json` |

### `p_storyboard_previs` — Storyboard e Pré-Vis
*Proporção 16:9 · ~60s · gates G1, G2, G3* — Todo plano tem job (performance, geografia, impacto, suspense, beauty, detalhe).

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 47 Arquiteto de História | Premissa | `story_bible` |
| 2 | 21 Roteirização em Master Scenes | Master Scenes | `script.md` |
| 3 | 45 Análise de Imagem e Engenharia Reversa de Prompt | Análise de referências | `image_analysis.json` |
| 4 | 48 Storyboard, Shot List e Animatic | Shot list + animatic | `storyboard.json` |
| 5 | 46 Direção de Imagem | Painéis de Hero Frame | `panels` |
| 6 | 55 Continuidade e Auditoria de Qualidade | Continuidade | `continuity.csv` |

### `p_still_campaign` — Campanha de Imagens / Thumbnails
*Proporção 16:9 · ~0s · gates G1, G2, G4, G8* — Julgue em feed size (5 m de distância).

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 45 Análise de Imagem e Engenharia Reversa de Prompt | Analisar referências | `analysis` |
| 2 | 46 Direção de Imagem | Prompt por motor | `image_prompt.json` |
| 3 | STYLE (Visual DNA) | Look travado | `style_lock` |
| 4 | 18 Thumbnail para Redes Sociais | 5 frameworks de CTR | `thumbs` |
| 5 | 30 Análise Pós-Publicação e Iteração de Dados | Teste a/b 48h | `report.md` |

### `p_video_upgrade` — Upgrade de Vídeo Comum → Cinema (V2V)
*Proporção 16:9 · ~30s · gates G2, G3, G5, G7* — Herde performance e câmera do original; refaça só look, lente, luz e grade.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 45 Análise de Imagem e Engenharia Reversa de Prompt | Analisar frames-chave | `analysis` |
| 2 | 54 Upgrade de Vídeo Comum para Cinema | Plano manter/refazer | `upgrade_plan.md` |
| 3 | 46 Direção de Imagem | Hero Frame reestilizado | `hero` |
| 4 | 53 Roteador de Motores e Adaptador de Prompt | Motor V2V | `engine_plan.json` |
| 5 | STYLE (Visual DNA) | Look destino | `style_lock` |
| 6 | 25 Pós-Produção e Emulação Química | Darkroom | `graded` |
| 7 | 26 Áudio Multimodal e Foley Síncrono | Áudio | `audio` |
| 8 | 55 Continuidade e Auditoria de Qualidade | QA | `qa_report.md` |

### `p_localization_sprint` — Sprint de Localização Multi-Idioma
*Proporção 9:16 · ~30s · gates G4, G6, G8* — Escala se retenção inicial ≥80% do original; <60% regerar hook.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 31 Localização e Adaptação Cultural Multi-Idioma | Hook/título/CTA reescritos | `l10n.md` |
| 2 | 26 Áudio Multimodal e Foley Síncrono | VO nativa + lip-sync recalculado | `audio` |
| 3 | 18 Thumbnail para Redes Sociais | Thumb por cultura/RTL | `thumbs` |
| 4 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Redes regionais | `post.json` |
| 5 | 30 Análise Pós-Publicação e Iteração de Dados | 48h vs baseline | `report.md` |

### `p_analytics_loop` — Loop de Análise Pós-Publicação
*Proporção Universal · ~0s · gates G4* — Hierarquia: thumb → título → hook → 1º open loop → corpo → closer.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 30 Análise Pós-Publicação e Iteração de Dados | Diagnóstico por curva + matriz CTR×Retenção | `report.md` |
| 2 | 18 Thumbnail para Redes Sociais | Nova capa/título | `thumb` |
| 3 | 17 Social Hook | Novo hook | `hook` |
| 4 | 21 Roteirização em Master Scenes | Reescrita cirúrgica | `script` |
| 5 | 28 Prompt Engineering Seedance Faceless | Regerar só o bloco afetado | `block` |
| 6 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Próximo ciclo | `calendar.json` |

## Modo Marca (G9) — marcas e produtos reais
Non-IP (G8) é o padrão. O G9 é o caminho opt-in para quem quer usar marca/produto real (afiliado, patrocinado, cedido ou sem vínculo). Regras completas em `BaseSkill.md` §7; dados em `tables.brand_mode` e templates no JSON.

| Pergunta | Por quê |
|---|---|
| 1. Marca e produto exatos? | evita marca inventada ou genérica demais |
| 2. Vínculo: afiliado, patrocinado, cedido ou sem vínculo? | define o texto de divulgação |
| 3. Link (se afiliado) e rótulo na descrição? | divulgação obrigatória |
| 4. Contexto da cena compatível com a marca? | marca fora de violência, vilania e humor depreciativo |
| 5. Orgânico ou anúncio pago? | pago exige autorização escrita da marca |

**Aviso ao usuário (resumo):** marca real não é ilegal, mas é outro caminho, com regras próprias; é nele que a Economia da Atenção (marcação, afiliado, primeiro contato com a marca) pode trabalhar por você. Sem resposta, o estúdio continua em Non-IP com substituto genérico.

**Bloco de divulgação (descrição):** linha do vínculo · produto + link oficial/afiliado · rótulo da plataforma · 3 hashtags + rótulo (`#publi`, `#afiliado`, `#parceria`, `#gifted`, que **não conta** entre as 3) · foto oficial de referência (papel: produto) · autorização escrita (se pago).

**Continua proibido mesmo com G9:** rosto/voz de pessoa real sem consentimento, trilha reconhecível, personagens/trade dress de terceiros, alegações inventadas. Não é aconselhamento jurídico; confirme as regras do seu país e da plataforma.

## Metodologia por fase

### Pré-produção
1. **Story bible** (Skill 47): logline → premissa → tema → querer/necessidade/falha → regras de mundo → estrutura por duração.
2. **Style bible** (Skill 52): alias + acento, paleta hex, óptica, referências analisadas (Skill 45), riscos (Veto), especificação de entrega.
3. **Orçamento por lote:** hero frames (imagem, barato) → aprovação → vídeo (por segundo do motor) → áudio → pós. Meça iteração em *segundos gerados*, não em prompts.
4. **Personagens:** `character.json` (Skill 22) + sheet (Skill 23) antes do primeiro frame.

### Produção
- **Por plano:** job → tamanho → FOV° → movimento (1 dispositivo) → luz (One Light) → ação por segundo → áudio → motor.
- **Continuidade:** figurino, props, estado de luz, geografia, eyelines; trave dos dois lados do corte.
- **Multidão / escala:** Hell Grind em 3 camadas + size-ref frame.

### Pós
Linear sRGB → EV → curvas H&D → halation → acutance → grão Monte Carlo → ACES → rebate → LUT `.cube`. **Nenhum upscale sem grão.**

### Distribuição e análise
Recomponha por rede; 3 hashtags; teste thumb+título como par; leia retenção por ponto de queda (`diagnoseDrop`) e devolva ao pipeline.

## Templates prontos
**Master Scene (Skill 21)**
```
MS-01 | 00:00–00:12 | HOOK: <1 frase, ≤2s falado> | CONTEXTO: <1 frase> | TENSÃO: <obstáculo> | PAYOFF: <resolução/loop aberto>
B-ROLL: <planos com job + FOV°>   VO (145 wpm): "<texto>"   A/B HOOK: (a) awe (b) curiosidade (c) dado
```
**Linha de storyboard (Skill 48)** — campos: `shot_id, scene, timecode, duration_s, size, angle, fov_degrees, camera_move, job, subject_action, light, audio_cue, transition, engine_id, hero_frame_prompt, continuity_notes`

**Story bible** — campos: `logline, premise, theme, protagonist, antagonist_force, world_rules, structure, motifs, tone_refs, characters, locations, style_alias, deliverables`

**Análise de imagem (Skill 45)** — campos: `subject, composition, light, palette_hex, materials_textures, style_dna_matches, era_or_film_stock_guess, slop_audit, recreate_prompts, negative_locks, uncertainty_flags`

**Prompt de imagem FLUX.2 (JSON)**
```json
{
 "scene": "",
 "subjects": [
  {
   "description": "",
   "position": "",
   "action": ""
  }
 ],
 "style": "",
 "color_palette": [
  "#RRGGBB"
 ],
 "lighting": "",
 "mood": "",
 "background": "",
 "composition": "",
 "camera": {
  "angle": "",
  "fov_degrees": 0,
  "depth_of_field": ""
 }
}
```
**Launch 15s (Skill 27)** — blocos: Format line · Silence line · Background/world · PALETTE (locked, hex) · THE HERO / THE MASS / THE SURFACE · TYPE TREATMENT · MOTION LANGUAGE · BEAT SHEET (1.5–2s) · COPY LIST (contrato) · CONTENT SAFETY / NON-IP · CONSISTENCY · CAMERA & MOTION · RENDER. Adaptação 9:16: 1080×1920, safe zones 12%/15%, headlines em 2–3 linhas, recomposição.

**Relatório pós-publicação (Skill 30)** — PEÇA · REDE · DATA PUBLICAÇÃO | JANELA · MÉTRICAS-CHAVE · DROP PRINCIPAL · DIAGNÓSTICO · AÇÃO · SKILL ENVOLVIDA · VARIAÇÃO A TESTAR · PRÓXIMA JANELA

**Localização (Skill 31)** — PEÇA ORIGINAL · MERCADO/IDIOMA · ÉPICO CULTURAL · FUNÇÃO EMOCIONAL DO HOOK · HOOK ADAPTADO · TÍTULO ADAPTADO (≤N chars) · THUMB ADAPTADA · VO · RITMO (wpm local) · REFERÊNCIAS AJUSTADAS · PROVA SOCIAL · CTA · REDES · JANELA DE TESTE

**Cliente (Skill 29)** — ver `social_media_clients[]` no JSON (pacote, cadência, redes, 3 hashtags, SLA 48h, métricas).

## Mercados (Skill 31)
| Mercado | Cores favoráveis | Cores de risco | Leitura | Palavras/10s | Nota |
|---|---|---|---|---|---|
| PT-BR | amarelo, verde, laranja | roxo (luto) | LTR | 24–30 | emoji e informalidade funcionam |
| EN-US | vermelho, azul, preto | verde-amarelado | LTR | 20–25 | direto, prova numérica |
| ES-LATAM | quentes saturadas | roxo | LTR | 22–28 | tuteo, contexto familiar |
| DE | azul, cinza, branco | vermelho (alerta) | LTR | 18–22 | precisão, dado real, sem exagero |
| FR | azul, vermelho contido | verde saturado | LTR | 20–26 | elegância, texto curto, sem hype |
| JP | branco, vermelho contido | verde brilhante | LTR | 18–22 | formalidade por nível, contexto visual forte |
| KR | branco, azul, pastel | vermelho | LTR | 20–24 | estética limpa e minuciosa |
| AR | ouro, verde, branco | vermelho intenso ritual | RTL | 20–26 | recompor thumb da direita p/ esquerda |
| HE | azul, branco | verde | RTL | 20–26 | recompor thumb RTL |
| CN | vermelho (auspicioso), dourado | branco em contexto fúnebre | LTR | 20–25 | WeChat, Weibo, Bilibili |
| RU | vermelho, azul, cinza | verde político ambíguo | LTR | 20–26 | tipografia cirílica com fonte adaptada |

## Diagnóstico de retenção (Skill 30)
| Queda | Causa | Ação | Skills |
|---|---|---|---|
| 0–3s | Hook falhou | Reescrever Layer 1 (cold drop); testar 3 variantes | 17,21 |
| 3–30s | Stakes/promessa não conectou | Reforçar Layer 2 (stakes) e encurtar Layer 3 (trailer) | 21 |
| 30–60s | Ritmo | Cortar filler; antecipar o 1º open loop | 21 |
| ~50% | Open loop mal fechado ou beat morto | Mover payoff do bloco anterior; reescrever bloco | 21,28 |
| 70–80% | Payoff do título demorou | Antecipar The Turn/Resolution (~10%) | 21 |
| 90–100% | Closer fraco | Reescrever última linha (gut-punch/pergunta aberta) | 21 |
| re-watch spike | Momento clipável | Usar frame como thumb; cortar Short derivado; testar como hook | 18,17 |

*Gerado do JSON v3.1.0-cinema-os · 2026-09-20 · Criado por Daniel Rodrigues · Direção Geral @ Draft Creative Studio Ltd*
