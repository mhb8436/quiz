# 인터랙티브 퀴즈 플랫폼

Next.js, TypeScript, Tailwind CSS로 구축된 현대적이고 반응형 퀴즈 애플리케이션입니다. 이 플랫폼은 사용자들이 아름다운 사용자 인터페이스와 함께 퀴즈를 만들고, 참여하며, 공유할 수 있게 해줍니다.

## 주요 기능

- 🎯 동적 퀴즈 생성 및 관리
- 📱 모든 기기에 최적화된 반응형 디자인
- 🎨 Tailwind CSS를 활용한 모던한 UI
- 🔒 안전한 인증 시스템
- 📊 실시간 퀴즈 결과
- 🎮 인터랙티브한 퀴즈 경험

## 기술 스택

- **프론트엔드**: Next.js 14, TypeScript, Tailwind CSS
- **백엔드**: Next.js API 라우트
- **데이터베이스**: Prisma with PostgreSQL
- **인증**: NextAuth.js
- **스타일링**: Tailwind CSS, Headless UI

## 시작하기

1. 저장소 클론하기
2. 의존성 설치:
   ```bash
   npm install
   ```
3. 환경 변수 설정:
   ```bash
   cp .env.example .env
   ```
4. 개발 서버 실행:
   ```bash
   npm run dev
   ```

## 환경 변수

다음 변수들을 포함하는 `.env` 파일을 생성하세요:

```env
DATABASE_URL="your_database_url"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

## 기여하기

프로젝트에 기여하고 싶으시다면 Pull Request를 보내주세요.

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 LICENSE 파일을 참조하세요.
