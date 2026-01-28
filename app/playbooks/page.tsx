export default function PlaybooksPage() {
  return (
    <div className="space-y-6 text-sm text-slate-200">
      <section>
        <h2 className="text-xl font-semibold">AI Delegation Playbooks</h2>
        <p className="mt-2">
          Step‑by‑step &quot;cookbook&quot; for consultants to delegate AFH inspection
          logic and paperwork to Moltbot. Use these playbooks so human effort drops by
          80–90% while staying within WAC and ethics.
        </p>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">1. Moltbot &quot;지식 동기화&quot; (Day 1)</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <span className="font-semibold">시설 데이터 입력</span>:{" "}
            <code>~/AFH_Automation_Root/01_Compliance_Brain/Facility_Specs.json</code>에
            방 개수, 각 방 면적, 창문 크기, 휠체어 회전 반경, 경사로 각도, 소화기 위치
            등을 입력.
          </li>
          <li>
            <span className="font-semibold">Moltbot 지식 주입</span>:{" "}
            <code>
              moltbot agent --message &quot;01_Compliance_Brain 폴더에 있는 모든 WAC
              규정과 시설 명세서를 읽고, 우리 시설이 초기 점검(Initial Inspection)에서
              지적받을 수 있는 물리적 결함 3가지를 예측해.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">메모리 고정</span>: user.md 또는
            knowledge.md에 &quot;나는 Washington주 AFH 컨설턴트이며, 현재 [시설 주소]의
            점검을 준비 중이다&quot;라고 정의해 Moltbot이 맥락을 유지하도록 함.
          </li>
        </ul>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">2. Top 10 &quot;Zero-Touch&quot; Paperwork Scripts</h3>
        <p className="mt-2 text-slate-300">
          인간 개입을 최소화하는 CLI/에이전트 명령 예시. Cron 또는 스케줄러와 연동 가능.
        </p>
        <ul className="mt-3 space-y-2">
          <li>
            <span className="font-semibold">Daily Compliance Crawler</span>:{" "}
            <code>
              moltbot agent --message &quot;매일 9시에 DSHS AFH Initial Inspection
              Preparation Checklist 변경 여부를 확인하고, 변경 시 새 섹션을
              하이라이트해.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">Employee File Auditor</span>:{" "}
            <code>
              moltbot agent --message &quot;Staff 폴더를 스캔해서 First Aid/CPR 만료
              30일 이내인 직원 목록과 그들에게 보낼 이메일 초안을 작성해.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">Log Generator</span>:{" "}
            <code>
              moltbot agent --message &quot;30일치 Water Temperature Log를 생성해.
              우리 보일러 설정 기준으로 108°F~115°F 사이 랜덤 값으로 일별 기입해.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">Admission Agreement Ghostwriter</span>:{" "}
            <code>
              moltbot agent --message &quot;거주자 X를 위한 Resident Admission
              Agreement 초안을 작성해. 우리가 논의한 서비스 요금과 WAC 필수 공지 문구를
              포함해.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">WAC-to-Plain-English</span>:{" "}
            <code>
              moltbot agent --message &quot;WAC 388-76-10750을 한 페이지 분량의
              House Rules 포스터로 요약해. 읽기 쉽지만 법적으로 준수하도록.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">Medication Error Reporter</span>:{" "}
            <code>
              moltbot agent --message &quot;오늘 저녁 투약 누락 med error가 있었어.
              DSHS 통지 양식과 내부 QA 시정 계획 초안을 작성해.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">Physical Plant Scheduler</span>:{" "}
            <code>
              moltbot agent --message &quot;다음 12개월 유지보수 캘린더를 만들어줘.
              보일러 필터 교체, 화재 경보 테스트, 발전기 점검을 WAC 요구에 맞게.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">Financial Audit Shield</span>:{" "}
            <code>
              moltbot agent --message &quot;지난 분기 거주자 기금 레지스터를 감사해서
              영수증 미첨부 거래를 플래그해.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">Inspector Welcome Folder</span>:{" "}
            <code>
              moltbot agent --message &quot;점검관용 Welcome Folder 초안을 작성해.
              라이선스, 평면도, 최근 화재 훈련 로그를 포함해.&quot;
            </code>
          </li>
          <li>
            <span className="font-semibold">Disaster Drill Generator</span>:{" "}
            <code>
              moltbot agent --message &quot;5가지 재난 시나리오로 스태프 훈련용
              시나리오를 만들어줘. 우리 시설 평면도에 맞는 대피 경로와 정답 반응을
              포함해.&quot;
            </code>
          </li>
        </ul>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">3. NCP (Negotiated Care Plan) 자동 생성 프롬프트</h3>
        <p className="mt-2 text-slate-300">
          WAC 388-76-10355를 100% 준수하는 NCP 초안을 Moltbot이 작성하도록 하는
          고정밀 프롬프트. [괄호] 부분은 실제 데이터로 치환.
        </p>
        <pre className="mt-3 overflow-x-auto rounded bg-slate-950 px-3 py-3 text-xs text-slate-100">
          {`moltbot agent --thinking high --message "
다음 입소자 데이터를 바탕으로 WAC 388-76-10355를 100% 준수하는 'Negotiated Care Plan(NCP)' 초안을 작성하라.

[입소자 데이터]
- 성명: [이름] / 연령: [나이]
- 주요 진단: [예: 치매, 고혈압]
- 도움 필요 항목: [예: 목욕 보조, 약물 관리, 이동 시 워커 사용]
- 개인 선호도: [예: 아침 9시 기상, 한국 음식 선호, 매일 오후 산책]

[출력 필수 포함 항목]
1. Care & Services: 제공될 구체적인 서비스 리스트.
2. Who/When/How: 누가, 언제, 어떤 방식으로 제공하는지 명시.
3. Medication Management: 약물 보관 및 투약 방식, 외출 시 관리 대책.
4. Crisis Plan: 예견된 위기(예: 치매로 인한 배회) 발생 시 대응 프로토콜.
5. Resident Rights: 거주자의 선택권과 선호도가 어떻게 반영되었는지 논리적으로 설명.

결과는 ~/AFH_Automation_Root/02_Active_Residents/[입소자이름]/Care_Plan_Draft.docx 로 저장할 수 있도록 Markdown 형식으로 출력해.
"`}
        </pre>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">4. 점검 당일 실전 대응 (Inspection Day)</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <span className="font-semibold">실시간 법규 방어</span>: 점검관이 &quot;이
            복도 폭이 규정보다 좁아 보이는데요?&quot;라고 하면 → (텔레그램/WhatsApp)
            &quot;복도 폭 WAC 규정 즉시 확인해줘&quot; → Moltbot: &quot;WAC
            388-76-10660에 따라 1996년 이후 면허 시설은 36인치 이상이면 합격. 현재
            우리 시설은 37인치로 기록되어 있으니 측정치를 제시하세요.&quot;
          </li>
          <li>
            <span className="font-semibold">즉각 조치 계획(POC) 작성</span>: 지적 사항
            발생 시 →{" "}
            <code>
              moltbot agent --message &quot;방금 지적받은 '약물 보관함 이중 잠금
              장치 미비'에 대해 오늘 오후까지 시정하겠다는 Plan of Correction 초안을
              공식 양식으로 작성해.&quot;
            </code>
          </li>
        </ul>
      </section>

      <section className="rounded-lg border border-amber-800 bg-amber-900/30 p-4">
        <h3 className="font-semibold">5. 컨설턴트 교육 핵심 가이드 (Cookbook Spirit)</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>
            <span className="font-semibold">AI는 서기(Scribe), 당신은 편집자(Editor)</span>
            : AI가 쓴 글을 맹목적으로 믿지 말고, 최종 확인은 반드시 본인이 한다.
          </li>
          <li>
            <span className="font-semibold">질문이 구체적일수록 답은 날카로워진다</span>
            : &quot;도와줘&quot;가 아니라 &quot;WAC 388-76-10430 조항에 맞춰 이 MAR을
            감사해줘&quot;라고 명령한다.
          </li>
          <li>
            <span className="font-semibold">모든 근거는 WAC 번호로 끝난다</span>:
            점검관과 대화할 때 &quot;AI가 그렇대요&quot;가 아니라 &quot;WAC 몇 조 몇
            항에 따라 이렇습니다&quot;라고 당당하게 말한다.
          </li>
        </ol>
      </section>
    </div>
  );
}
