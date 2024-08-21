## Blog page build with NextJs, TS, tailwind PostgreSQL and Prisma

### Deployment

- none

이 프로젝트는 Next.js와 TypeScript를 사용하여 구축한 풀스택 블로그 애플리케이션입니다.<br/>
Prisma ORM을 사용해 PostgreSQL 데이터베이스와 연결되며 데이터를 관리합니다.

### 주요 기능

- **블로그 포스트 생성 및 관리:**
  - 사용자는 새로운 블로그 포스트를 생성하고, 기존 포스트를 수정 및 삭제할 수 있습니다.
  - 각 포스트는 제목, 내용, 카테고리 등의 필드를 포함합니다.
- **카테고리별 포스트 보기:**
  - 포스트는 카테고리별로 필터링할 수 있으며, 특정 카테고리에 속한 포스트를 쉽게 찾을 수 있습니다.
- **검색 기능:**
  - 사용자는 키워드를 통해 블로그 포스트를 검색할 수 있습니다.
- **API 엔드포인트:**
  - 블로그 포스트와 카테고리에 대한 CRUD 기능을 제공하는 API 엔드포인트가 구현되어 있습니다.
- **다크 모드:**
  - 사용자 인터페이스는 다크 모드를 지원하며, 사용자가 밝은 모드와 어두운 모드 간에 쉽게 전환할 수 있습니다.
  - Tailwind CSS를 사용하여 다크 모드를 구현하고, 사용자의 테마 선택에 따라 스타일이 자동으로 조정됩니다.
- **댓글 기능:**
  - 사용자간에 원활한 소통을 마련하기 위해 댓글 기능을 구현하였습니다.

### 기술 스택

- **프레임워크 및 라이브러리:**

  - **Next.js:** React 기반의 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 위한 프레임워크입니다.
  - **React:** 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.
  - **Tailwind CSS:** 유틸리티-퍼스트 CSS 프레임워크로, 빠르고 효율적인 스타일링을 지원합니다.

- **인증:**

  - **NextAuth.js:** 사용자의 로그인 및 세션 관리를 간편하게 처리하며, 보안성과 확장성이 뛰어난 인증 솔루션을 제공합니다.

- **이미지:**

  - **Next.js Image 컴포넌트:** 최적화된 이미지 로딩과 크기 조정을 지원하는 컴포넌트입니다.

- **데이터베이스:**
  - **PostgreSQL** 관계형 데이터베이스 관리 시스템입니다.
  - **Prisma ORM:** PostgreSQL 데이터베이스와의 상호작용을 관리하며, 강력한 타입 안전성을 제공합니다.

## Captures
<details>
  <summary>펼칠 시 캡쳐 이미지</summary>
<img width="1901" alt="스크린샷 2024-08-20 오후 9 58 19" src="https://github.com/user-attachments/assets/9dc2da55-827a-4eea-818c-24f17b2b04bd">
<img width="1874" alt="스크린샷 2024-08-20 오후 9 58 36" src="https://github.com/user-attachments/assets/0641d849-1e47-4de8-aada-27e924d80bd2">
<img width="1069" alt="스크린샷 2024-08-20 오후 9 58 54" src="https://github.com/user-attachments/assets/6d9b0e68-43f6-4fa3-ac7f-51a3a58f4738">
<img width="1902" alt="스크린샷 2024-08-20 오후 9 59 08" src="https://github.com/user-attachments/assets/63ad19bf-4486-4072-9b4b-a207be09b3e0">
<img width="1876" alt="스크린샷 2024-08-20 오후 9 59 24" src="https://github.com/user-attachments/assets/9358a5c3-df01-496b-9677-34f58129c143">
<img width="1878" alt="스크린샷 2024-08-20 오후 9 59 47" src="https://github.com/user-attachments/assets/91b2bb19-c56d-42ce-8a7b-a98df0a71865">
<img width="1880" alt="스크린샷 2024-08-20 오후 10 01 00" src="https://github.com/user-attachments/assets/954af22a-bf67-43a5-8a06-0d54bb71a14a">
<img width="1857" alt="스크린샷 2024-08-20 오후 10 01 17" src="https://github.com/user-attachments/assets/928769f4-c0ad-455e-8080-ca5b44eafa40">
<img width="2080" alt="스크린샷 2024-08-21 오전 1 11 36" src="https://github.com/user-attachments/assets/4f928bbc-4cb6-4d44-a799-61b30d5cf9ac">

### Theme 모드와 반응형

<img width="1890" alt="스크린샷 2024-08-20 오후 10 01 38" src="https://github.com/user-attachments/assets/e010c0ac-05c0-450d-b906-9b4f102d8931">
<img width="1106" alt="스크린샷 2024-08-20 오후 10 03 16" src="https://github.com/user-attachments/assets/039de108-7dec-4cc1-a760-7dd41cadb8b1">
<img width="676" alt="스크린샷 2024-08-20 오후 10 04 18" src="https://github.com/user-attachments/assets/1024de99-bdc7-4d1e-84e0-2d562cfe31a3"><img width="671" alt="스크린샷 2024-08-20 오후 10 04 42" src="https://github.com/user-attachments/assets/0facecee-972c-498c-a0f2-0a62363bb961">
</details>





