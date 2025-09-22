# Dante Labs 자료실

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-brightgreen)](https://dandacompany.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

단테랩스(Dante Labs)의 공식 GitHub Pages 사이트입니다. n8n 워크플로우 데모와 다양한 학습용 위젯을 제공합니다.

## 🔗 주요 링크

🏠 **홈페이지**: [https://dante-datalab.com](https://dante-datalab.com)  
📚 **자료실**: [https://dandacompany.github.io](https://dandacompany.github.io)

## 🚀 주요 기능

### n8n 워크플로우 데모

- **OpenAI Analytics**: OpenAI API를 활용한 분석 및 자동화
- **MCP 서버**: MCP (Model Context Protocol) 서버 통합 워크플로우
- **영어 학습**: 학습 콘텐츠 자동 생성 워크플로우
- **RAG 시스템**: Retrieval-Augmented Generation 시스템 구현
- **웹 스크래퍼**: 데이터 수집 자동화 워크플로우

### 학습 위젯

- **플립 카드**: 인터랙티브 플래시카드 학습 도구
- **오디오 단어 카드**: 음성 지원 어휘 학습 위젯
- **음악 플레이어**: 커스텀 미디어 플레이어

## 💻 로컬 개발

```bash
# 저장소 클론
git clone https://github.com/dandacompany/dandacompany.github.io.git
cd dandacompany.github.io

# 로컬 서버 실행 (Python)
python3 -m http.server 8000

# 또는 Node.js 사용
npx http-server

# 브라우저에서 접속
# http://localhost:8000
```

## 📝 콘텐츠 추가 방법

### n8n 워크플로우 추가

1. JSON 파일을 적절한 카테고리 폴더에 저장 (`n8n-workflows/workflows/[category]/`)
2. `n8n-workflows/workflows-list.js`에 메타데이터 추가:

```javascript
{
    id: 'workflow_id',
    title: '워크플로우 제목',
    description: '설명',
    filename: 'workflow.json',
    folder: 'category'
}
```

### 위젯 추가

1. `widgets/` 폴더에 새 HTML 파일 생성
2. 자체 포함된 HTML/CSS/JavaScript로 구현

## 🔗 관련 프로젝트

- **n8n-nodes-mediafx**: FFmpeg 기반 미디어 처리 n8n 커스텀 노드
  - [GitHub](https://github.com/dandacompany/n8n-nodes-mediafx)
  - [NPM](https://www.npmjs.com/package/n8n-nodes-mediafx)

## 👨‍💻 개발자 정보

**Developer**: Dante  
**Email**: `datapod.k@gmail.com`  
**YouTube Channel**: [단테랩스 (DanteLabs)](https://www.youtube.com/@단테랩스)

## 🤝 기여하기

기여를 환영합니다! 이슈, 기능 요청, 또는 Pull Request를 제출해 주세요.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 지원 및 문의

- **YouTube**: [단테랩스 채널](https://www.youtube.com/@dante-labs)에서 튜토리얼과 데모 확인
- **Email**: `datapod.k@gmail.com`
- **Issues**: [GitHub Issues](https://github.com/dandacompany/dandacompany.github.io/issues)

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

Made with ❤️ by [Dante Labs](https://www.youtube.com/@dante-labs)
