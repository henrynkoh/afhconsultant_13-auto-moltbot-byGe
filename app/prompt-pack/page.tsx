import { INSPECTION_PROMPT_PACK } from "./data";

export default function PromptPackPage() {
  const totalPrompts = INSPECTION_PROMPT_PACK.reduce(
    (sum, section) => sum + section.items.length,
    0
  );

  return (
    <div className="space-y-6 text-sm text-slate-200">
      <section>
        <h2 className="text-xl font-semibold">
          Inspection 전용 Moltbot Prompt Pack (실전 50개+)
        </h2>
        <p className="mt-2">
          실제 점검 상황을 가정한 고정밀 프롬프트 모음입니다. 각 프롬프트는 Moltbot의{" "}
          <code>--thinking high</code> 옵션과 결합하여, WAC 기반 논리·근거를 포함한
          답변을 끌어내도록 설계되었습니다. 총 <strong>{totalPrompts}개</strong> 프롬프트.
        </p>
      </section>

      {INSPECTION_PROMPT_PACK.map((section) => (
        <section
          key={section.title}
          className="rounded-lg border border-slate-800 bg-slate-900/60 p-4"
        >
          <h3 className="font-semibold">{section.title}</h3>
          {section.description && (
            <p className="mt-1 text-slate-400">{section.description}</p>
          )}
          <ul className="mt-3 space-y-2">
            {section.items.map((item, idx) => (
              <li key={idx}>
                <pre className="overflow-x-auto rounded bg-slate-950 px-3 py-2 text-xs text-slate-100">
                  <code>{item}</code>
                </pre>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
