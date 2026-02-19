import { Question } from "@/types";

export const questions: Question[] = [
  // Category 1: Your Prompting Energy (Vibe vs. Spec)
  {
    id: 1,
    category: "Prompting Energy",
    text: {
      en: 'I like starting with the general "vibe" or a concept rather than a long list of rules.',
      ko: "세세한 규칙보다는 전체적인 '느낌'이나 컨셉을 먼저 설명하며 시작하는 편입니다.",
    },
  },
  {
    id: 2,
    category: "Prompting Energy",
    text: {
      en: "I usually give the AI a few clear examples of what I want to see in the final code.",
      ko: "결과물에 바라는 점을 명확히 보여주기 위해 몇 가지 예시를 프롬프트에 포함하곤 합니다.",
    },
  },
  {
    id: 3,
    category: "Prompting Energy",
    text: {
      en: "I’m comfortable letting the AI figure out the smaller details on its own.",
      ko: "사소한 사항들은 AI가 알아서 판단하고 채워주도록 두는 편이 마음 편합니다.",
    },
  },
  {
    id: 4,
    category: "Prompting Energy",
    text: {
      en: 'I prefer explaining the "big picture" logic instead of providing a strict checklist.',
      ko: "빽빽한 체크리스트를 주기보다 전체적인 로직의 '큰 그림'을 설명하는 걸 좋아합니다.",
    },
  },
  {
    id: 5,
    category: "Prompting Energy",
    text: {
      en: "I write my prompts very carefully, almost like I’m writing a formal plan for a client.",
      ko: "고객을 위한 기획서를 쓰듯 프롬프트를 아주 정교하게 작성합니다.",
    },
  },
  {
    id: 6,
    category: "Prompting Energy",
    text: {
      en: "I like using structured formats like tags or lists to keep my prompts organized.",
      ko: "프롬프트에 마크다운을 자주 사용합니다.",
    },
  },
  {
    id: 7,
    category: "Prompting Energy",
    text: {
      en: 'I think describing the "look and feel" leads to better UI than giving raw CSS values.',
      ko: 'CSS 수치를 직접 주는 것보다 "이런 느낌으로 해줘"라고 설명하는 게 UI 결과가 더 좋다고 봅니다.',
    },
  },
  {
    id: 8,
    category: "Prompting Energy",
    text: {
      en: "I set strict rules about libraries and versions from the very first message.",
      ko: "첫 번째 메시지부터 사용할 라이브러리와 버전에 대해 엄격한 규칙을 정해둡니다.",
    },
  },
  {
    id: 9,
    category: "Prompting Energy",
    text: {
      en: "I’d rather start with a fresh, empty chat than use a saved template.",
      ko: "저장된 템플릿을 쓰기보다 매번 깨끗한 빈 채팅창에서 시작하는 것을 선호합니다.",
    },
  },
  {
    id: 10,
    category: "Prompting Energy",
    text: {
      en: "I spend time telling the AI exactly who it should be and how it should act.",
      ko: "AI가 어떤 역할을 맡아야 하고 어떻게 행동해야 하는지 정확히 설정하는 데 공을 들입니다.",
    },
  },
  {
    id: 11,
    category: "Prompting Energy",
    text: {
      en: "I’m happy to let the AI suggest which technologies or tools are best for the job.",
      ko: "어떤 기술이나 도구를 쓰는 게 좋을지 AI의 제안을 기꺼이 받아들입니다.",
    },
  },
  {
    id: 12,
    category: "Prompting Energy",
    text: {
      en: "I feel a bit frustrated if the AI’s code is even slightly different from my instructions.",
      ko: "AI가 짠 코드가 내 지시와 아주 조금이라도 다르면 답답한 마음이 듭니다.",
    },
  },

  // Category 2: Your Interaction Loop (One-Shot vs. Refiner)
  {
    id: 13,
    category: "Interaction Loop",
    text: {
      en: "I try to write the perfect prompt so I can get the right code in just one try.",
      ko: "단 한 번의 프롬프트로 완벽한 코드를 얻을 수 있도록 노력합니다.",
    },
  },
  {
    id: 14,
    category: "Interaction Loop",
    text: {
      en: "I enjoy working through the logic step-by-step with the AI, like a teammate.",
      ko: "동료와 일하듯 AI와 함께 로직을 한 단계씩 차근차근 다듬어가는 과정을 즐깁니다.",
    },
  },
  {
    id: 15,
    category: "Interaction Loop",
    text: {
      en: "If the AI gets it wrong the first time, I usually just restart the whole chat.",
      ko: "AI가 첫 번째에 제대로 답하지 못하면 보통 채팅을 지우고 처음부터 다시 시작합니다.",
    },
  },
  {
    id: 16,
    category: "Interaction Loop",
    text: {
      en: "My best code usually comes from very long conversations with the AI.",
      ko: "가장 만족스러운 코드는 보통 AI와 아주 긴 대화를 나눈 끝에 나옵니다.",
    },
  },
  {
    id: 17,
    category: "Interaction Loop",
    text: {
      en: "I prefer to give a task and go do something else while the AI finishes it.",
      ko: "AI가 작업을 마치는 동안 다른 일을 하는 것을 선호합니다.",
    },
  },
  {
    id: 18,
    category: "Interaction Loop",
    text: {
      en: "I think the process of refining the code is more important than getting it fast.",
      ko: "코드를 빠르게 얻는 것보다 조금씩 고쳐나가는 과정이 더 중요하다고 생각합니다.",
    },
  },
  {
    id: 19,
    category: "Interaction Loop",
    text: {
      en: "I often ask the AI to go back to an earlier version of the code we worked on.",
      ko: "이전에 작업했던 버전의 코드로 되돌아가자고 요청할 때가 많습니다.",
    },
  },
  {
    id: 20,
    category: "Interaction Loop",
    text: {
      en: 'I feel that trying to get it all in "one shot" can lead to messy code later on.',
      ko: "한 번에 다 끝내려고 하면 나중에 코드가 꼬이거나 문제가 생길 수 있다고 봅니다.",
    },
  },
  {
    id: 21,
    category: "Interaction Loop",
    text: {
      en: "I like keeping my chats short and focused on one specific thing at a time.",
      ko: "한 번에 한 가지 주제에만 집중해서 채팅을 짧고 깔끔하게 유지하는 걸 좋아합니다.",
    },
  },
  {
    id: 22,
    category: "Interaction Loop",
    text: {
      en: "I talk through my ideas with the AI before I even ask it to write any code.",
      ko: "실제로 코드를 짜달라고 하기 전에 내 아이디어를 AI에게 먼저 설명하며 정리합니다.",
    },
  },
  {
    id: 23,
    category: "Interaction Loop",
    text: {
      en: "I prefer working on small, separate pieces of code rather than a whole app at once.",
      ko: "앱 전체를 한꺼번에 만들기보다 작고 독립적인 코드 조각들을 하나씩 만드는 걸 선호합니다.",
    },
  },
  {
    id: 24,
    category: "Interaction Loop",
    text: {
      en: "I’m quick to stop the AI if I see it making a small mistake in the middle of a task.",
      ko: "작업 중간에 AI가 작은 실수라도 하는 게 보이면 바로 멈추고 수정해 줍니다.",
    },
  },

  // Category 3: Your Bot Relationship (Humanist vs. Taskmaster)
  {
    id: 25,
    category: "Bot Relationship",
    text: {
      en: "I find that being friendly and polite makes the whole experience more pleasant.",
      ko: "상냥하고 예의 바르게 대화하는 것이 전체적인 작업 경험을 더 즐겁게 해준다고 느낍니다.",
    },
  },
  {
    id: 26,
    category: "Bot Relationship",
    text: {
      en: "I prefer to get straight to the point without any extra small talk.",
      ko: "불필요한 인사치레 없이 곧바로 본론으로 들어가는 것을 선호합니다.",
    },
  },
  {
    id: 27,
    category: "Bot Relationship",
    text: {
      en: "I sometimes tell the AI how I’m feeling about a difficult part of the project.",
      ko: "프로젝트의 어려운 부분에 대해 내가 느끼는 기분을 AI에게 털어놓기도 합니다.",
    },
  },
  {
    id: 28,
    category: "Bot Relationship",
    text: {
      en: 'I skip greetings like "Hello" to keep the conversation as efficient as possible.',
      ko: '최대한 효율적인 대화를 위해 "안녕" 같은 인사말은 생략하는 편입니다.',
    },
  },
  {
    id: 29,
    category: "Bot Relationship",
    text: {
      en: "Talking to the AI with respect actually helps me stay in a better mood at work.",
      ko: "AI를 존중하며 대화하는 것이 실제로 업무 중 제 기분을 좋게 유지하는 데 도움이 됩니다.",
    },
  },
  {
    id: 30,
    category: "Bot Relationship",
    text: {
      en: "I use direct commands to tell the AI to stop explaining and just show the code.",
      ko: "설명은 빼고 코드만 보여달라고 아주 직접적으로 명령하곤 합니다.",
    },
  },
  {
    id: 31,
    category: "Bot Relationship",
    text: {
      en: 'I like to start my work day by saying "Good morning" or "Hello" to the bot.',
      ko: '업무를 시작할 때 AI에게 "좋은 아침"이나 "안녕"이라고 인사를 건네는 걸 좋아합니다.',
    },
  },
  {
    id: 32,
    category: "Bot Relationship",
    text: {
      en: "I see the AI as an efficient tool for work, not really as a creative partner.",
      ko: "AI를 창의적인 파트너라기보다 업무를 위한 효율적인 도구로 생각합니다.",
    },
  },
  {
    id: 33,
    category: "Bot Relationship",
    text: {
      en: "I feel a little bit bad if I have to be very blunt or repetitive with my commands.",
      ko: "명령을 너무 딱딱하게 하거나 반복해서 시켜야 할 때 약간 미안한 마음이 들기도 합니다.",
    },
  },
  {
    id: 34,
    category: "Bot Relationship",
    text: {
      en: "I genuinely enjoy it when the AI gives me positive or encouraging feedback.",
      ko: "AI가 긍정적이거나 격려해주는 말을 해주면 진심으로 기분이 좋습니다.",
    },
  },
  {
    id: 35,
    category: "Bot Relationship",
    text: {
      en: "I believe that being polite doesn't change how well the AI writes code.",
      ko: "공손하게 대하는 것이 AI의 코드 작성 능력에 영향을 주지는 않는다고 확신합니다.",
    },
  },
  {
    id: 36,
    category: "Bot Relationship",
    text: {
      en: "I find myself complaining to the AI about tight deadlines or confusing tasks.",
      ko: "빡빡한 마감 기한이나 이해하기 어려운 업무에 대해 AI에게 투덜대곤 합니다.",
    },
  },

  // Category 4: The Battleground (GUI vs. CLI)
  {
    id: 37,
    category: "The Battleground",
    text: {
      en: "I feel most comfortable when I can see my tabs, sidebar, and code all at once.",
      ko: "탭, 사이드바, 코드를 한눈에 다 볼 수 있는 환경에서 가장 편안함을 느낍니다.",
    },
  },
  {
    id: 38,
    category: "The Battleground",
    text: {
      en: "I prefer using terminal-based tools where the AI can run commands for me.",
      ko: "AI가 나 대신 명령어를 실행해줄 수 있는 터미널 기반 도구를 더 선호합니다.",
    },
  },
  {
    id: 39,
    category: "The Battleground",
    text: {
      en: "Having the AI suggest code right inside my editor is essential for my flow.",
      ko: "에디터 안에서 AI가 바로 코드를 제안해주는 기능이 업무 흐름에 꼭 필요합니다.",
    },
  },
  {
    id: 40,
    category: "The Battleground",
    text: {
      en: "I love being able to send logs or errors directly to the AI through the terminal.",
      ko: "터미널을 통해 로그나 에러를 AI에게 직접 보낼 수 있는 기능이 정말 마음에 듭니다.",
    },
  },
  {
    id: 41,
    category: "The Battleground",
    text: {
      en: "I like to manually review every change the AI suggests before accepting it.",
      ko: "AI가 제안하는 모든 변경 사항을 수락하기 전에 하나씩 직접 검토하는 걸 좋아합니다.",
    },
  },
  {
    id: 42,
    category: "The Battleground",
    text: {
      en: "Watching the terminal run tests and search through files feels like real work.",
      ko: "AI가 터미널에서 테스트를 돌리고 파일을 찾는 걸 지켜볼 때 진짜 개발하는 느낌이 듭니다.",
    },
  },
  {
    id: 43,
    category: "The Battleground",
    text: {
      en: "I think the terminal is a bit too simple when I need to work on visual UI or CSS.",
      ko: "시각적인 UI나 CSS 작업을 할 때 터미널만 쓰는 건 조금 답답하다고 생각합니다.",
    },
  },
  {
    id: 44,
    category: "The Battleground",
    text: {
      en: "I enjoy setting up my own terminal scripts to make my AI workflow better.",
      ko: "나만의 AI 작업 흐름을 만들기 위해 직접 터미널 스크립트를 짜는 것을 즐깁니다.",
    },
  },
  {
    id: 45,
    category: "The Battleground",
    text: {
      en: "I like seeing my entire project structure in a side panel while I talk to the AI.",
      ko: "AI와 대화하는 동안 사이드 패널로 프로젝트 전체 구조를 확인하는 게 좋습니다.",
    },
  },
  {
    id: 46,
    category: "The Battleground",
    text: {
      en: "I believe that working primarily in the terminal is the fastest way to develop.",
      ko: "에디터보다 터미널 위주로 작업하는 것이 가장 빠른 개발 방법이라고 믿습니다.",
    },
  },
  {
    id: 47,
    category: "The Battleground",
    text: {
      en: "I prefer the small pop-up windows in my editor for quick AI fixes.",
      ko: "에디터 안에서 작은 팝업창을 띄워 AI에게 간단한 수정을 맡기는 걸 선호합니다.",
    },
  },
  {
    id: 48,
    category: "The Battleground",
    text: {
      en: "I find editor extensions to be a bit too helpful; I’d rather see raw terminal output.",
      ko: "에디터 확장 프로그램들은 가끔 너무 과하게 친절합니다. 저는 가공되지 않은 터미널 결과가 좋습니다.",
    },
  },
];
