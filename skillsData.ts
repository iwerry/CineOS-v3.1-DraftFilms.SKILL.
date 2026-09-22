/**
 * # Skill Criada por Daniel Rodrigues
 * Terminal AI — Draft Creative Studio Ltd · skillsData.ts v3.1.0 (Visual DNA Pack v3.0 + G9 Modo Marca)
 *
 * PAPEL DESTE ARQUIVO no conjunto de 5:
 *   draft_studio_config.json  → DADOS (fonte única: modelos, perfis, skills, estilos, pipelines, rotas, tabelas, templates)
 *   skillsData.ts (este)      → TIPOS + CARREGADOR + MOTOR (resolve estilo, roteia tarefa, escolhe motor, compila e valida prompts)
 *   BaseSkill.md              → CONSTITUIÇÃO (regras, protocolo, conhecimento de motores)
 *   profiles_guide.md         → PERFIS (gerado a partir do JSON)
 *   skills_cinema_pipeline.md → ACERVO + PIPELINES (gerado a partir do JSON)
 *
 * Requisitos: tsconfig com "resolveJsonModule": true (Vite/Next já suportam).
 * Compat: SKILLS_V26 mantém o formato antigo (skills 32–44) para código existente.
 */
import rawConfig from './draft_studio_config.json';

/* ───────────────────────── TIPOS ───────────────────────── */
export type ModelKind = 'video' | 'image' | 'audio' | 'platform' | 'pipeline' | 'llm';
export type Confidence = 'high' | 'medium' | 'low';
export type Stage = 'foundation' | 'pre' | 'prod' | 'audio' | 'post' | 'dist' | 'analytics' | 'qa';

export interface Optics {
  fov_degrees: number; camera: string; lens: string; aperture: string | null;
  shutter: string; white_balance: string; fps: number; mm_equiv: number;
}
export interface VisualStyle {
  id: string; alias: string; aliases: string[]; full_name: string;
  legacy_skill_id: string | null; legacy_code?: string; family: string; summary: string;
  dna_tags: string[]; negative_locks: string; optics: Optics; palette_hex: string[];
  textures: string; motion_language: string; lighting: string; cultural_refs: string[];
  best_for: string[]; aspect_ratios: string[]; prompt_core: string; sample_prompt?: string;
  engines: { image: string[]; video: string[]; note: string };
}
export interface Skill {
  id: string; code: string; name: string; creator: string; summary: string; category: string;
  aspect_ratios: string[]; default_tags: string[]; negative_locks: string;
  stage: Stage; modes: string[]; requires: string[]; feeds: string[]; since: string; outputs?: string[];
}
export interface ModelSpec {
  id: string; name: string; vendor: string; kind: ModelKind; status: string; released: string;
  verified_on: string; confidence: Confidence; modes?: string[]; duration_s?: [number, number];
  resolutions?: string[]; fps?: number; aspect_ratios?: string[]; native_audio?: boolean; lipsync?: boolean;
  refs?: Record<string, unknown>; multishot?: { max_cuts: number; max_total_s: number };
  speech?: { delimiter: string; max_words_per_10s: number; anti_repeat_clause?: boolean; note?: string };
  grammar: { structure: string[]; rules: string[] };
  strengths?: string[]; weaknesses?: string[]; best_for?: string[]; access?: string[];
  notes?: string; roster?: string[]; features?: string[]; external_skill?: string;
}
export interface Profile {
  id: string; number: string; title: string; target: string; specs: string; pains: string; dna: string;
  recommended_skills: string[]; default_styles: string[]; preferred_models: string[]; default_pipeline: string;
  deliverables: string[]; kpis: string[]; quickstart: { command: string; example: string };
}
export interface PipelineStep { n: number; skill: string; role: string; out: string }
export interface Pipeline { id: string; name: string; default_ratio: string; default_duration_s: number; gates: string[]; note: string; steps: PipelineStep[] }
export interface Route {
  id: string; label: string; triggers_pt: string[]; triggers_en: string[]; primary_skills: string[]; support_skills: string[];
  default_pipeline: string | null; output_kind: string; required_inputs: string[]; template: string; gate: string;
}
export interface Gate { id: string; name: string; rule: string }
export interface MarketRow { id: string; good: string[]; risk: string[]; dir: 'LTR' | 'RTL'; wpm10: [number, number]; note: string }
export interface StudioConfig {
  project: string; studio: string; author: string; version: string; schema_version: string; updated: string;
  defaults: { language: string; ratio: string; fps: number; shutter: string; script_wpm: number; hashtags: number };
  engine_lifecycle: { stale_after_days: number };
  models: ModelSpec[]; profiles: Profile[]; skills: Skill[]; styles: VisualStyle[]; pipelines: Pipeline[]; routes: Route[]; gates: Gate[];
  tables: {
    markets: MarketRow[]; banned_terms: string[]; symptoms_15: string[]; feasibility_veto: string[];
    retention_diagnosis: { drop: string; cause: string; action: string; skills: number[] }[];
    ctr_retention_matrix: Record<string, string>;
    speech_budget: { native_gen_cap_words: number; script_wpm_default: number };
    [k: string]: unknown;
  };
  templates: Record<string, unknown>;
  [k: string]: unknown;
}

/** Formato antigo (skills 32–44) — compatibilidade com código existente. */
export interface LegacySkill {
  id: string; code: string; name: string; creator: string; summary: string; category: string;
  aspect_ratios: string[]; default_tags: string[]; negative_locks: string;
  optical_specs: { fov_degrees: number; camera: string; lens: string; shutter: string; white_balance: string };
  palette_hex: string[]; textures: string; cultural_refs: string[]; fps?: number; sample_prompt: string;
}

/* ───────────────────────── DADOS ───────────────────────── */
export const CONFIG = rawConfig as unknown as StudioConfig;
export const { models: MODELS, profiles: PROFILES, skills: SKILLS, styles: STYLES, pipelines: PIPELINES, routes: ROUTES, gates: GATES, tables: TABLES, templates: TEMPLATES } = CONFIG;

const FAMILY_LABEL: Record<string, string> = {
  comics: 'Quadrinhos & Pop', anime: 'Estilo Visual', animation_3d: 'CGI & 3D', animation_2d: 'Animação', stop_motion: 'Animação',
  cinema_auteur: 'Cinema', documentary: 'Cinema', commercial: 'Comercial', music_pop: 'Música & Arte', retro: 'Quadrinhos & Pop',
  graphic_design: 'Design', ui_motion: 'Tech & Motion', edu: 'Educação', horror: 'Cinema',
};
export const SKILLS_V26: LegacySkill[] = STYLES.filter(s => s.legacy_skill_id).map(s => ({
  id: s.legacy_skill_id as string, code: s.legacy_code ?? '', name: s.full_name, creator: 'Daniel Rodrigues', summary: s.summary,
  category: FAMILY_LABEL[s.family] ?? s.family, aspect_ratios: s.aspect_ratios, default_tags: s.dna_tags, negative_locks: s.negative_locks,
  optical_specs: { fov_degrees: s.optics.fov_degrees, camera: s.optics.camera, lens: s.optics.lens, shutter: s.optics.shutter, white_balance: s.optics.white_balance },
  palette_hex: s.palette_hex, textures: s.textures, cultural_refs: s.cultural_refs, fps: s.optics.fps, sample_prompt: s.sample_prompt ?? s.prompt_core,
}));

/* ───────────────────────── UTILIDADES ───────────────────────── */
const fold = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const key = (s: string) => fold(s).replace(/[^a-z0-9]/g, '').toUpperCase();

/** FOV horizontal (graus) ⇄ distância focal equivalente full-frame (sensor 36 mm). Use mm só para referência humana. */
export const fovToMm = (fov: number) => Math.round(18 / Math.tan((fov * Math.PI) / 360));
export const mmToFov = (mm: number) => Math.round((2 * Math.atan(18 / mm) * 180) / Math.PI);

export const getModel = (id: string) => MODELS.find(m => m.id === id);
export const getSkill = (idOrNum: string | number) => { const id = typeof idOrNum === 'number' ? `skill_${String(idOrNum).padStart(2, '0')}` : idOrNum; return SKILLS.find(s => s.id === id); };
export const getProfile = (q: string | number) => { const k = typeof q === 'number' ? `perfil_${String(q).padStart(2, '0')}` : q; return PROFILES.find(p => p.id === k || p.number === k); };
export const getPipeline = (id: string) => PIPELINES.find(p => p.id === id);

/** Resolve MIGNOLA / "sin city" / dna_wes / skill_32 / nome completo → estilo. */
export function resolveStyle(query: string): VisualStyle | undefined {
  const q = key(query);
  if (!q) return undefined;
  return STYLES.find(s => key(s.alias) === q || s.aliases.some(a => key(a) === q) || key(s.id) === q || (s.legacy_skill_id && key(s.legacy_skill_id) === q) || (s.legacy_code && key(s.legacy_code) === q))
    ?? STYLES.find(s => key(s.full_name).includes(q) && q.length >= 4);
}
export const stylesByFamily = (family: string) => STYLES.filter(s => s.family === family);

/** Expande dependências (requires) em ordem topológica; skill_15 é sempre a base. */
export function expandSkillChain(ids: string[], alwaysInclude: string[] = ['skill_15']): string[] {
  const out: string[] = []; const seen = new Set<string>();
  const visit = (id: string) => { if (seen.has(id)) return; seen.add(id); const s = getSkill(id); if (!s) return; s.requires.forEach(visit); out.push(id); };
  [...alwaysInclude, ...ids].forEach(visit);
  return out;
}

/** Pacote completo de um perfil: skills expandidas, estilos, motores e pipeline. */
export function profileKit(q: string | number) {
  const profile = getProfile(q); if (!profile) return undefined;
  return {
    profile, skills: expandSkillChain(profile.recommended_skills).map(getSkill).filter((s): s is Skill => !!s),
    styles: profile.default_styles.map(resolveStyle).filter((s): s is VisualStyle => !!s),
    engines: profile.preferred_models.map(getModel).filter((m): m is ModelSpec => !!m), pipeline: getPipeline(profile.default_pipeline),
  };
}

/** Classifica um pedido livre (PT/EN) em rotas de tarefa, da mais provável à menos. */
export function routeTask(text: string): { route: Route; score: number }[] {
  const t = fold(text);
  return ROUTES.map(route => {
    const score = [...route.triggers_pt, ...route.triggers_en].reduce((a, tr) => (t.includes(fold(tr)) ? a + fold(tr).split(' ').length + 1 : a), 0);
    return { route, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
}

/* ───────────────────────── MOTORES ───────────────────────── */
export interface EngineNeeds { kind: 'video' | 'image'; styleAlias?: string; needsAudio?: boolean; durationS?: number; ratio?: string; mode?: string }
export interface EngineChoice { model: ModelSpec; score: number; reasons: string[]; warnings: string[] }

export function staleEngines(today = new Date()): ModelSpec[] {
  const limit = CONFIG.engine_lifecycle.stale_after_days * 86400000;
  return MODELS.filter(m => m.status === 'sunsetting' || today.getTime() - new Date(m.verified_on).getTime() > limit);
}

export function recommendEngines(n: EngineNeeds, today = new Date()): EngineChoice[] {
  const style = n.styleAlias ? resolveStyle(n.styleAlias) : undefined;
  const preferred = style ? style.engines[n.kind] : [];
  const stale = new Set(staleEngines(today).map(m => m.id));
  return MODELS.filter(m => m.kind === n.kind && m.status !== 'sunsetting').map(model => {
    let score = 0; const reasons: string[] = []; const warnings: string[] = [];
    const idx = preferred.findIndex(p => p === model.id || p.startsWith(model.id.split('_').slice(0, 2).join('_')));
    if (idx >= 0) { score += 30 - idx * 5; reasons.push(`afinidade com ${style?.alias} (#${idx + 1})`); }
    if (n.kind === 'video') {
      if (n.durationS && model.duration_s) {
        if (n.durationS > model.duration_s[1]) { score -= 25; warnings.push(`duração ${n.durationS}s > máx ${model.duration_s[1]}s: dividir em segmentos com seams`); }
        else { score += 5; reasons.push(`cobre ${n.durationS}s em 1 passe`); }
      }
      if (n.needsAudio) { if (model.native_audio) { score += 10; reasons.push('áudio nativo'); } else { score -= 15; warnings.push('sem áudio nativo: usar Skill 26/49 em pós'); } }
    }
    if (n.ratio && model.aspect_ratios && !model.aspect_ratios.includes(n.ratio)) { score -= 10; warnings.push(`proporção ${n.ratio} não nativa: compor em ${model.aspect_ratios[0]} e recompor`); }
    if (n.mode && model.modes?.includes(n.mode)) { score += 8; reasons.push(`suporta modo ${n.mode}`); }
    if (model.confidence === 'low') { score -= 6; warnings.push('specs não verificadas: confirmar na plataforma'); }
    if (stale.has(model.id)) warnings.push(`verified_on ${model.verified_on} venceu (>${CONFIG.engine_lifecycle.stale_after_days} dias)`);
    return { model, score, reasons, warnings };
  }).sort((a, b) => b.score - a.score);
}

/* ───────────────────────── COMPILADOR DE PROMPT ───────────────────────── */
export interface CompileRequest {
  engineId: string; styleAlias?: string; ratio?: string; durationS?: number; resolution?: string; multishot?: boolean;
  subject?: string; setting?: string; firstFrame?: string; action?: string | string[]; camera?: string; physics?: string; lighting?: string;
  speech?: string; ambience?: string; diegetic?: string[]; score?: string; text?: string; palette?: string[];
  references?: { label: string; role: string }[];
  /** Modo Marca (G9): só tem efeito se brandGate(brand).active. */
  brand?: BrandModeInput;
}
export interface CompiledPrompt { engine: ModelSpec; kind: ModelKind; positive: string; negative?: string; params: Record<string, unknown>; warnings: string[]; disclosure?: string }

const todo = (what: string, w: string[]) => { w.push(`preencher: ${what}`); return `[definir: ${what}]`; };
const asList = (a?: string | string[]) => (a === undefined ? [] : Array.isArray(a) ? a : [a]);

function compileCore(req: CompileRequest): CompiledPrompt {
  const engine = getModel(req.engineId); if (!engine) throw new Error(`motor desconhecido: ${req.engineId}`);
  const style = req.styleAlias ? resolveStyle(req.styleAlias) : undefined;
  const warnings: string[] = [];
  if (req.styleAlias && !style) warnings.push(`estilo não encontrado: ${req.styleAlias}`);
  if (engine.status === 'sunsetting') warnings.push(`${engine.name} está em desativação: ${engine.notes ?? ''}`);
  const ratio = req.ratio ?? style?.aspect_ratios[0] ?? CONFIG.defaults.ratio;
  const o = style?.optics;
  const opticsLine = o ? `FOV ${o.fov_degrees}° (${o.camera}${o.lens ? ', ' + o.lens : ''}${o.aperture ? ', ' + o.aperture : ''}), shutter ${o.shutter}, WB ${o.white_balance}` : todo('FOV em graus + distância da câmera', warnings);
  const paletteLine = (req.palette ?? style?.palette_hex ?? []).join(' ');
  const params: Record<string, unknown> = { aspect_ratio: ratio, ...(req.durationS ? { duration_s: req.durationS } : {}), ...(req.resolution ? { resolution: req.resolution } : {}), ...(engine.fps ? { fps: engine.fps } : {}) };

  /* ---------- IMAGEM ---------- */
  if (engine.kind === 'image') {
    const subject = req.subject ?? todo('assunto', warnings);
    if (engine.id === 'flux_2') {
      const json = {
        scene: [req.setting ?? '', style?.prompt_core ?? ''].filter(Boolean).join('. '), subjects: [{ description: subject, position: 'per composition', action: asList(req.action).join('; ') }],
        style: style?.full_name ?? '', color_palette: req.palette ?? style?.palette_hex ?? [], lighting: req.lighting ?? style?.lighting ?? '', mood: style?.textures ?? '',
        background: req.setting ?? '', composition: req.camera ?? 'rule of thirds', camera: { angle: req.camera ?? 'eye level', fov_degrees: o?.fov_degrees ?? 0, depth_of_field: o?.aperture ?? '' },
      };
      if (req.text) warnings.push('texto em imagem: no FLUX.2 use [flex] e cite o texto literal no JSON (subjects[].description)');
      return { engine, kind: 'image', positive: JSON.stringify(json, null, 2), params, warnings };
    }
    const prose = [
      `Subject: ${subject}`, req.action ? `Action: ${asList(req.action).join('; ')}` : '', req.setting ? `Setting: ${req.setting}` : '', `Optics: ${opticsLine}`,
      `Light: ${req.lighting ?? style?.lighting ?? todo('luz (direção, qualidade, Kelvin, razão)', warnings)}`,
      style ? `Style/DNA: ${style.prompt_core}${paletteLine ? '. Palette ' + paletteLine : ''}` : '',
      req.text ? `TEXT (literal, render exactly once): "${req.text}"` : '',
      style ? `Constraints: keep ${style.dna_tags.slice(0, 3).join(', ')}` : '',
    ].filter(Boolean).join('\n');
    return { engine, kind: 'image', positive: prose, params, warnings };
  }

  /* ---------- VÍDEO ---------- */
  if (req.durationS && engine.duration_s && req.durationS > engine.duration_s[1]) warnings.push(`duração ${req.durationS}s > máx ${engine.duration_s[1]}s de ${engine.name}: dividir em segmentos`);
  if (engine.aspect_ratios && !engine.aspect_ratios.includes(ratio)) warnings.push(`proporção ${ratio} não nativa em ${engine.name}`);
  const actions = asList(req.action);
  const dur = req.durationS ?? engine.duration_s?.[1] ?? 8;
  const shots = req.multishot === false ? 1 : Math.max(1, Math.round(dur / 2));
  const cuts = Array.from({ length: shots - 1 }, (_, i) => +((i + 1) * (dur / shots)).toFixed(1));
  const positiveOnly = engine.grammar.structure.includes('POSITIVE LOCKS');
  const speech = req.speech && engine.speech ? (() => {
    const cap = Math.floor((engine.speech.max_words_per_10s * dur) / 10); const words = req.speech.trim().split(/\s+/).length;
    if (words > cap) warnings.push(`fala com ${words} palavras > ${cap} para ${dur}s (limite ${engine.speech.max_words_per_10s}/10s)`);
    const d = engine.speech.delimiter;
    return `${d}${req.speech}${d}` + (engine.speech.anti_repeat_clause ? ' Deliver the line exactly once at a natural, unhurried pace; do NOT repeat, stutter, or loop any word or phrase.' : '');
  })() : req.speech ? (warnings.push('motor sem fala nativa: usar Skill 26/49'), undefined) : undefined;
  const audioLine = engine.native_audio
    ? [speech ? `SPEECH ${speech}` : '', `AMBIENT: ${req.ambience ?? todo('ambiência geográfica', warnings)}`, req.diegetic?.length ? `DIEGETIC: ${req.diegetic.join('; ')}` : '', `SCORE: ${req.score ?? 'None. Fully diegetic.'}`, 'IP LOCK: generic audio, no real-brand sound, no real voice cloning'].filter(Boolean).join(' | ')
    : 'silent (audio in post: Skill 26/49)';
  const refs = (req.references ?? []).map(r => `${r.label} = ${r.role}`).join('; ');

  if (positiveOnly) {
    const blocks: [string, string][] = [
      ['SCENE CONTEXT', [req.subject, req.setting].filter(Boolean).join(' — ') || todo('resumo da cena', warnings)],
      ['LOCATION MAP', req.setting ?? todo('o que fica onde (âncora espacial)', warnings)],
      ['FIRST FRAME', req.firstFrame ?? actions[0] ?? todo('primeiro frame já em mid-action', warnings)],
      ['FORMAT MODE', shots > 1 ? `multishot, ${shots} shots, ${cuts.length} hard cuts at ${cuts.map(c => c + 's').join(', ')}` : 'single take'],
      ['OPTICS', opticsLine],
      ['CAMERA', req.camera ?? todo('um movimento físico motivado', warnings)],
      ['ACTION TIMING', actions.length ? actions.map((a, i) => `Shot ${i + 1} (${(i * dur / shots).toFixed(1)}–${((i + 1) * dur / shots).toFixed(1)}s): ${a}`).join('\n') : todo('ação por shot', warnings)],
      ['PHYSICS', req.physics ?? todo('peso, inércia, material', warnings)],
      ['LIGHTING', req.lighting ?? style?.lighting ?? todo('fontes práticas + WB em Kelvin', warnings)],
      ['AUDIO', audioLine],
      ['STYLE', style ? `${style.prompt_core}${paletteLine ? '. Palette ' + paletteLine : ''}` : todo('textura, grão, paleta', warnings)],
      ['POSITIVE LOCKS', [style ? style.dna_tags.join(', ') : '', shots > 1 ? `${shots} shots, ${cuts.length} cuts at ${cuts.map(c => c + 's').join(', ')}` : 'single take', refs].filter(Boolean).join('; ')],
    ];
    return { engine, kind: 'video', positive: blocks.map(([k, v]) => `${k}: ${v}`).join('\n'), params, warnings };
  }

  const per = dur / Math.max(actions.length, 1);
  const shotLines = actions.length > 1 ? actions.map((a, i) => `Shot ${i + 1} (${(i * per).toFixed(0)}–${((i + 1) * per).toFixed(0)}s): ${a}`).join('\n') : actions.join(' ');
  const para = [
    req.subject ?? todo('assunto', warnings), req.setting ? `Setting: ${req.setting}.` : '', shotLines || todo('ação', warnings),
    `Camera: ${req.camera ?? todo('movimento motivado', warnings)}. Optics: ${opticsLine}.`, `Lighting: ${req.lighting ?? style?.lighting ?? todo('luz', warnings)}.`,
    style ? `Style: ${style.prompt_core}${paletteLine ? '. Palette ' + paletteLine : ''}.` : '', refs ? `References: ${refs}.` : '', `Audio: ${audioLine}.`,
  ].filter(Boolean).join('\n');
  const negative = style && engine.id === 'veo_3_1' ? style.negative_locks : undefined; // Veo aceita negative_prompt; demais motores: manter positivo-only
  return { engine, kind: 'video', positive: para, negative, params, warnings };
}

/* ───────────────────────── LINT ───────────────────────── */
export interface LintIssue { level: 'error' | 'warn'; code: string; message: string }
export interface LintOptions { engineId?: string; durationS?: number; ratio?: string; brand?: BrandModeInput; description?: string }

export function lintPrompt(text: string, opt: LintOptions = {}): LintIssue[] {
  const issues: LintIssue[] = []; const t = fold(text);
  for (const term of TABLES.banned_terms) if (new RegExp(`(^|[^a-z0-9])${fold(term).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z0-9]|$)`).test(t)) issues.push({ level: 'warn', code: 'EMPTY_TERM', message: `termo vazio/proibido: "${term}" — troque por especificação óptica real` });
  for (const m of text.matchAll(/\b(\d{1,3})\s?mm\b/gi)) {
    const near = fold(text.slice(Math.max(0, (m.index ?? 0) - 12), (m.index ?? 0) + 24));
    if (!/macro|probe|tilt|shift/.test(near)) issues.push({ level: 'warn', code: 'MM_NOTATION', message: `"${m[0]}" → use FOV em graus (≈ ${mmToFov(+m[1])}°)` });
  }
  if (/\bno (motion )?blur\b/i.test(text)) issues.push({ level: 'error', code: 'NO_BLUR', message: 'Feasibility Veto: use obturador 180° (ou 90° para ação crisp), nunca "no blur"' });
  if (/\b(no|without|avoid|never|don't)\s+(people|humans?|persons?|faces?|text|logos?)\b/i.test(text)) issues.push({ level: 'warn', code: 'NEGATIVE_PHRASING', message: 'negação planta o objeto: escreva o que ESTÁ no quadro (POSITIVE LOCKS)' });
  if (/\bFOV\b/.test(text) && !/FOV\s*\d+(\.\d+)?\s*(°|deg)/i.test(text)) issues.push({ level: 'warn', code: 'FOV_UNIT', message: 'FOV deve vir em graus (ex.: FOV 47°)' });
  const tags = (text.match(/#[\p{L}\p{N}_]+/gu) ?? []).filter(x => !isDisclosureTag(x)); // rótulo de divulgação não conta entre as 3
  if (tags.length && tags.length !== CONFIG.defaults.hashtags) issues.push({ level: 'warn', code: 'HASHTAGS', message: `use exatamente ${CONFIG.defaults.hashtags} hashtags (marca + nicho + formato); encontrei ${tags.length}` });
  /* G9 — Modo Marca */
  const found = detectBrands(text);
  if (found.length) {
    const gate = brandGate(opt.brand);
    if (!gate.active) issues.push({ level: 'error', code: 'BRAND_UNGATED', message: `marca real citada (${found.join(', ')}) sem Modo Marca ativo (G9). Responda as 5 perguntas ou use substituto genérico (Non-IP, G8).${gate.missing.length ? ' Faltando: ' + gate.missing.join('; ') : ''}` });
    else {
      const declared = fold(`${opt.brand?.brand ?? ''} ${opt.brand?.product ?? ''}`);
      const extra = found.filter(b => !declared.includes(fold(b)));
      if (extra.length) issues.push({ level: 'warn', code: 'BRAND_UNLISTED', message: `marca(s) fora do que foi declarado no G9: ${extra.join(', ')}` });
    }
  }
  if (opt.brand && brandGate(opt.brand).active && opt.brand.relationship !== 'sem_vinculo' && opt.description !== undefined) {
    const d = fold(opt.description);
    if (!/(#publi|#ad\b|#afiliado|#parceria|#gifted|#sponsored|#recebido|publi|afiliad|patrocin|cedido)/.test(d)) issues.push({ level: 'warn', code: 'BRAND_NO_DISCLOSURE', message: 'descrição sem rótulo de divulgação (publi/afiliado/parceria). Use disclosureBlock().' });
  }
  const model = opt.engineId ? getModel(opt.engineId) : undefined;
  if (model) {
    if (model.status === 'sunsetting') issues.push({ level: 'error', code: 'ENGINE_SUNSET', message: `${model.name} em desativação — migrar (Skill 53)` });
    if (opt.durationS && model.duration_s && opt.durationS > model.duration_s[1]) issues.push({ level: 'error', code: 'DURATION', message: `${opt.durationS}s > máx ${model.duration_s[1]}s em ${model.name}` });
    if (opt.ratio && model.aspect_ratios && !model.aspect_ratios.includes(opt.ratio)) issues.push({ level: 'warn', code: 'RATIO', message: `${opt.ratio} não é nativo em ${model.name}` });
    const sp = text.match(/(?:SPEECH\]?:?\s*)(['"“])(.+?)\1/s);
    if (sp && model.speech && opt.durationS) {
      const words = sp[2].trim().split(/\s+/).length; const cap = Math.floor((model.speech.max_words_per_10s * opt.durationS) / 10);
      if (words > cap) issues.push({ level: 'error', code: 'SPEECH_LEN', message: `fala com ${words} palavras > ${cap} para ${opt.durationS}s` });
    }
  }
  return issues;
}

/* ───────────────────────── MODO MARCA (G9) ───────────────────────── */
/** Non-IP (G8) é o padrão. G9 é opt-in: só ativa com as 5 respostas. Não é aconselhamento jurídico. */
export type BrandRelationship = 'afiliado' | 'patrocinado' | 'cedido' | 'sem_vinculo';
export interface BrandModeInput {
  brand: string; product: string; relationship?: BrandRelationship; link?: string; acceptsDisclosure?: boolean;
  context?: string; contextCompatible?: boolean; usage?: 'organico' | 'anuncio_pago'; writtenAuth?: boolean; referencePhoto?: boolean;
}
export interface BrandModeTable {
  default: boolean; rules: string[]; disclosure_tags: string[]; watchlist: string[];
  disclosure_templates: Record<BrandRelationship, string>; fallback_substitutes: Record<string, string>;
  questions: { id: string; key: string; text: string; options?: string[] }[];
}
export const BRAND_MODE = (TABLES as unknown as { brand_mode: BrandModeTable }).brand_mode;
const DISCLOSURE_TAGS = new Set(BRAND_MODE.disclosure_tags.map(fold));
const isDisclosureTag = (tag: string) => DISCLOSURE_TAGS.has(fold(tag));
const escRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Marcas da watchlist presentes no texto (palavra inteira, sem acento/caixa). */
export function detectBrands(text: string): string[] {
  const t = fold(text);
  return BRAND_MODE.watchlist.filter(b => new RegExp(`(^|[^a-z0-9])${escRe(fold(b))}([^a-z0-9]|$)`).test(t));
}

/** As 5 perguntas do G9. active=true só com tudo respondido; caso contrário, seguir Non-IP. */
export function brandGate(b?: BrandModeInput): { active: boolean; missing: string[]; warnings: string[]; disclosure?: string; disclosureTags: string[] } {
  const missing: string[] = []; const warnings: string[] = [];
  if (!b || !b.brand?.trim() || !b.product?.trim()) missing.push('1) marca e produto exatos');
  if (!b?.relationship) missing.push('2) vínculo (afiliado | patrocinado | cedido | sem_vinculo)');
  if (b?.relationship === 'afiliado' && !b.link?.trim()) missing.push('3) link de afiliado');
  if (b?.relationship && b.relationship !== 'sem_vinculo' && !b.acceptsDisclosure) missing.push('3) aceitar rotular na descrição');
  if (!b?.contextCompatible) missing.push('4) contexto da cena compatível com a marca');
  if (!b?.usage) missing.push('5) uso orgânico ou anúncio pago');
  if (b?.usage === 'anuncio_pago' && !b.writtenAuth) missing.push('5) autorização escrita da marca (anúncio pago)');
  if (b && !b.referencePhoto) warnings.push('sem foto oficial de referência: a IA pode distorcer logo/embalagem (use papel "produto")');
  const active = missing.length === 0;
  const tags = b?.relationship && b.relationship !== 'sem_vinculo' ? ['#publi'] : [];
  return { active, missing, warnings, disclosure: active && b ? disclosureBlock(b) : undefined, disclosureTags: tags };
}

/** Linha de divulgação para a descrição (não conta entre as 3 hashtags). */
export function disclosureBlock(b: BrandModeInput): string {
  const tpl = BRAND_MODE.disclosure_templates[b.relationship ?? 'sem_vinculo'];
  return tpl.replace('{brand}', b.brand).replace('{product}', b.product).replace('{link}', b.link ?? '').trim();
}

/** Compila o prompt e, se o G9 estiver ativo, injeta a especificação do produto e devolve o bloco de divulgação. */
export function compilePrompt(req: CompileRequest): CompiledPrompt {
  const out = compileCore(req);
  if (!req.brand) return out;
  const gate = brandGate(req.brand); out.warnings.push(...gate.warnings);
  if (!gate.active) { out.warnings.push(`G9 inativo (seguindo Non-IP): ${gate.missing.join('; ')}`); return out; }
  const b = req.brand;
  const spec = `${b.brand} ${b.product}, rendered as the plain product shown in the attached official reference photo (role: product); logo and text only as visible in that photo${b.context ? `; placement: ${b.context}` : ''}`;
  if (out.engine.id === 'flux_2') {
    try { const j = JSON.parse(out.positive); if (j.subjects?.[0]) j.subjects[0].description += `; product: ${spec}`; out.positive = JSON.stringify(j, null, 2); } catch { out.positive += `\nPRODUCT: ${spec}`; }
  } else out.positive += `\nPRODUCT SPEC: ${spec}`;
  out.disclosure = gate.disclosure;
  return out;
}

/* ───────────────────────── HELPERS DE PRODUÇÃO ───────────────────────── */
/** Orçamento de palavras: fala nativa (≤25/10s) e leitura de roteiro (145 wpm) por mercado. */
export function wordBudget(seconds: number, market = 'PT-BR') {
  const m = TABLES.markets.find(x => x.id === market) ?? TABLES.markets[0];
  return { market: m.id, spoken: [Math.round((m.wpm10[0] * seconds) / 10), Math.round((m.wpm10[1] * seconds) / 10)] as [number, number],
    nativeGenCap: Math.floor((TABLES.speech_budget.native_gen_cap_words * seconds) / 10), scriptWords145: Math.round((TABLES.speech_budget.script_wpm_default * seconds) / 60), direction: m.dir };
}
/** Exatamente 3 hashtags: marca + nicho + formato/objetivo. */
export const hashtags = (brand: string, niche: string, format: string): [string, string, string] => {
  const h = (s: string) => '#' + fold(s).replace(/[^a-z0-9]/g, '');
  return [h(brand), h(niche), h(format)];
};
/** Skill 30: diagnóstico por ponto de queda. */
export const diagnoseDrop = (drop: string) => TABLES.retention_diagnosis.find(r => fold(r.drop) === fold(drop));
export const ctrRetentionQuadrant = (ctrHigh: boolean, retentionHigh: boolean) =>
  TABLES.ctr_retention_matrix[`${ctrHigh ? 'high' : 'low'}_${retentionHigh ? 'high' : 'low'}`];
/** Auditoria de atuação (Skill 24/55): ≥2 sintomas ⇒ regerar. */
export const actingVerdict = (found: string[]) => ({ count: found.length, regenerate: found.length >= 2, symptoms: found.filter(f => TABLES.symptoms_15.includes(f)) });

export default { CONFIG, MODELS, PROFILES, SKILLS, STYLES, PIPELINES, ROUTES, GATES, SKILLS_V26, resolveStyle, routeTask, recommendEngines, compilePrompt, lintPrompt, profileKit, expandSkillChain, wordBudget, hashtags, brandGate, detectBrands, disclosureBlock };
