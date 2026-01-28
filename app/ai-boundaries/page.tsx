export default function AIBoundariesPage() {
  return (
    <div className="space-y-6 text-sm text-slate-200">
      <section>
        <h2 className="text-xl font-semibold">
          Consultant Guide: AI Use Boundaries (허용 / 금지)
        </h2>
        <p className="mt-2">
          This guide protects consultants and providers from legal and ethical risk when
          delegating AFH inspection logic and paperwork to Moltbot.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-emerald-700 bg-emerald-900/40 p-4">
          <h3 className="font-semibold">✅ 허용 (Green: AI Empowerment)</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">초안 작성</span>: WAC 규정에 맞는 Policy
              &amp; Procedure, Disaster Plan, House Rules 문구 생성.
            </li>
            <li>
              <span className="font-semibold">데이터 분석</span>: 수백 페이지의 MAR, 사건
              보고서, 직원 기록에서 패턴과 오류(누락 서명 등) 찾기.
            </li>
            <li>
              <span className="font-semibold">실시간 보조</span>: 점검 중 텔레그램 /
              WhatsApp으로 모르는 WAC 조항을 Moltbot에게 즉시 질의.
            </li>
            <li>
              <span className="font-semibold">번역 / 요약</span>: WAC 조항을
              입주자·가족·직원이 이해하기 쉬운 평이한 언어로 요약·해설.
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-rose-700 bg-rose-900/40 p-4">
          <h3 className="font-semibold">❌ 금지 (Red: Hard Boundary)</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">허위 기록 생성</span>: 실제로 하지 않은
              화재 훈련, 수온 측정, 약물 투약을 AI로 &quot;지어내기&quot;.
            </li>
            <li>
              <span className="font-semibold">민감정보 노출</span>: 적절한 보호 없이
              거주자 실명, SSN, 상세 건강 정보를 외부 LLM에 그대로 전송.
            </li>
            <li>
              <span className="font-semibold">맹목적 신뢰</span>: AI가 인용한 WAC이
              최신 버전인지, 문맥에 맞는지 검증 없이 그대로 사용하는 행위.
            </li>
            <li>
              <span className="font-semibold">기록 조작</span>: 점검 후 불리한 내용이
              담긴 기존 문서를 AI로 수정·삭제하여 은폐하려는 시도.
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">컨설턴트 3대 원칙</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>
            <span className="font-semibold">AI는 서기(Scribe), 당신은 편집자(Editor)</span>
            : AI가 쓴 문서는 항상 사람이 읽고, 수정하고, 최종 서명한다.
          </li>
          <li>
            <span className="font-semibold">
              질문이 구체적일수록 답은 날카로워진다
            </span>
            : &quot;도와줘&quot; 대신 &quot;WAC 388‑76‑10430 기준으로 이 MAR을 감사해
            줘&quot;라고 지시한다.
          </li>
          <li>
            <span className="font-semibold">모든 근거는 WAC 번호로 끝난다</span>:{" "}
            &quot;AI가 그렇대요&quot;가 아니라 &quot;WAC 몇 조 몇 항에 따라
            그렇습니다&quot;라고 답한다.
          </li>
        </ol>
      </section>
    </div>
  );
}

