import { TOP_100_QUESTIONS } from "./data";

const CATEGORY_ORDER = [
  "Physical Plant",
  "Resident Rights & Policies",
  "Medication Management",
  "Staffing & Training",
  "Emergency Preparedness",
] as const;

export default function QuestionBankPage() {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    questions: TOP_100_QUESTIONS.filter((q) => q.category === cat),
  }));

  return (
    <div className="space-y-6 text-sm text-slate-200">
      <section>
        <h2 className="text-xl font-semibold">Top 100 AFH Admin & Inspection Questions</h2>
        <p className="mt-2">
          Use this bank to drill consultants on real‑world inspection scenarios. Each
          question should be answered by Moltbot with: (1) WAC/RCW citation, (2)
          plain‑language explanation, and (3) safety/rights rationale.
        </p>
      </section>

      {byCategory.map(({ category, questions }) => (
        <section
          key={category}
          className="rounded-lg border border-slate-800 bg-slate-900/60 p-4"
        >
          <h3 className="font-semibold">{category}</h3>
          <ul className="mt-2 list-none space-y-1 pl-0">
            {questions.map((q) => (
              <li key={q.id} className="flex gap-2">
                <span className="shrink-0 font-mono text-slate-400">Q{q.id}.</span>
                <span>{q.question}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">AI 사고 흐름 예시 (샘플)</h3>
        <ol className="mt-2 list-decimal space-y-3 pl-5">
          <li>
            <span className="font-semibold">
              Q: 거주자가 야간에 배고픔을 호소할 때, 주방 문을 잠가두는 것은 허용되는가?
            </span>
            <p className="mt-1 text-slate-300">
              <span className="font-semibold">AI Thinking</span>: WAC 388‑76‑10515
              (Resident Rights – Freedom from restraints) 확인 → 주방 잠금이 물리적
              구속에 해당할 수 있는지 분석 → 예외적으로 허용되는 경우(인지 저하로 인한
              위험, 의사·면허기관 동의, Negotiated Care Plan 문서화)를 검토 → 기본적으로
              불허, 매우 제한된 상황에서만 논리적으로 소명 가능하다는 결론을 도출.
            </p>
          </li>
          <li>
            <span className="font-semibold">
              Q: 신규 직원이 TB Test 결과가 나오기 전 거주자를 직접 케어해도 되는가?
            </span>
            <p className="mt-1 text-slate-300">
              <span className="font-semibold">AI Thinking</span>: WAC 388‑76‑10165 검색
              → &quot;근무 시작 전&quot; 검사 완료 요건 확인 → 미검사 직원 투입 시
              즉각적 위험(Immediate Jeopardy) 가능성 평가 → 결론: 거주자 직접 케어는
              불허, 행정 업무 등 비접촉 업무만 가능하며 위반 시 Initial Inspection 탈락
              사유가 됨을 컨설팅.
            </p>
          </li>
          <li>
            <span className="font-semibold">
              Q: 거주자가 스스로 약을 복용하겠다고 할 때(Self-Administration), 시설장은
              무엇을 준비해야 하는가?
            </span>
            <p className="mt-1 text-slate-300">
              <span className="font-semibold">AI Thinking</span>: WAC 388‑76‑10435 검색
              → 의사(Physician) 서면 승인, 직인된 &quot;Self-Administration
              Assessment&quot; 완료, 약 보관의 안전성(다른 거주자 비접근 잠금) 조건
              추출 → 결론: 거주자 의사만으로는 불가. [의사 승인 → 시설장 평가 → 안전한
              보관함 설치] 3단계가 서류로 입증되어야 함.
            </p>
          </li>
          <li>
            <span className="font-semibold">
              Q: 부엌 조리대(Countertop)가 나무 재질인데, 점검 통과가 가능한가?
            </span>
            <p className="mt-1 text-slate-300">
              <span className="font-semibold">AI Thinking</span>: WAC 388‑76‑10730 (Food
              storage and preparation) 검색 → 나무는 다공성(Porous) 재질로 박테리아
              번식 위험, &quot;Non-absorbent, easy to clean&quot; 조건 위반 가능성
              높음 → 통과 어려움. 스테인리스·쿼츠 교체 또는 식품 등급 코팅 후 규정
              준수 소명 필요.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
