/**
 * n8n 워크플로우 목록
 * 
 * 이 파일은 n8n 워크플로우 데모 페이지에서 사용할 워크플로우 목록을 정의합니다.
 * 새로운 워크플로우를 추가하려면 이 파일에 항목을 추가하세요.
 */

const WORKFLOWS = [
    // OpenAI Analytics 워크플로우
    {
        id: 'openai_analytics_nodes_basic_usage',
        title: 'OpenAI Analytics 노드 기본 사용법',
        description: 'n8n 워크플로우를 통한 OpenAI API 분석 데모',
        filename: 'openai_analytics_nodes_basic_usage.json',
        folder: 'openai-analytics'
    },
    {
        id: 'jd_scraper',
        title: 'JD 스크래퍼',
        description: '채용공고 스크래핑 워크플로우',
        filename: 'jd_scraper.json',
        folder: 'openai-analytics'
    },
    {
        id: 'jd_analyzer',
        title: 'JD 분석기',
        description: '채용공고 분석 워크플로우',
        filename: 'jd_analyzer.json',
        folder: 'openai-analytics'
    },
    {
        id: 'create_jd_skills_embeddings',
        title: 'JD 스킬 임베딩 생성',
        description: '채용공고 스킬 임베딩 생성 워크플로우',
        filename: 'create_jd_skills_embeddings.json',
        folder: 'openai-analytics'
    },
    {
        id: 'create_jd_analyze_assistants',
        title: 'JD 분석 어시스턴트 생성',
        description: '채용공고 분석 어시스턴트 생성 워크플로우',
        filename: 'create_jd_analyze_assistants.json',
        folder: 'openai-analytics'
    },

    // MCP 서버 워크플로우
    {
        id: 'get_website_simple_markdown',
        title: '웹사이트 마크다운 변환',
        description: '웹사이트 내용을 간단한 마크다운으로 가져오는 워크플로우',
        filename: 'Get_Website_Simple_Markdown.json',
        folder: 'mcp_server'
    },
    {
        id: 'kakaotalk_send_me',
        title: '카카오톡 메시지 보내기',
        description: '카카오톡으로 메시지를 보내는 워크플로우',
        filename: 'Kakaotalk_Send_me.json',
        folder: 'mcp_server'
    },
    {
        id: 'dantelabs_coupang_review_analyze_server',
        title: '쿠팡 리뷰 분석 서버',
        description: '쿠팡 상품 리뷰 분석 서버 워크플로우',
        filename: 'DanteLabsCoupangReviewAnalyzeServer.json',
        folder: 'mcp_server'
    },
    {
        id: 'dante_labs_ai_news_maker',
        title: 'AI 뉴스 메이커',
        description: 'AI를 활용한 뉴스 생성 워크플로우',
        filename: 'Dante_Labs_AI_News_Maker.json',
        folder: 'mcp_server'
    },

    // 영어 학습 워크플로우
    {
        id: 'word_flip_card_generator',
        title: '단어 플립카드 생성기',
        description: '영어 단어 학습용 플립카드 생성 워크플로우',
        filename: 'word_flip_card_generator.json',
        folder: 'english'
    },
    {
        id: 'slide_image_generator_by_google_slide',
        title: '구글 슬라이드 이미지 생성기',
        description: '구글 슬라이드를 이용한 이미지 생성 워크플로우',
        filename: 'slide-image-generator-by-google-slide.json',
        folder: 'english'
    },
    {
        id: 'flux_image_generator',
        title: 'Flux 이미지 생성기',
        description: 'Flux를 이용한 이미지 생성 워크플로우',
        filename: 'flux-image-generator.json',
        folder: 'english'
    },
    {
        id: 'google_slide_image_generator',
        title: '구글 슬라이드 이미지 생성기',
        description: '구글 슬라이드를 이용한 학습 이미지 생성 워크플로우',
        filename: 'google-slide-image-generator.json',
        folder: 'english'
    },
    {
        id: 'english_speaking_content_generator',
        title: '영어 말하기 콘텐츠 생성기',
        description: '영어 말하기 연습용 콘텐츠 생성 워크플로우',
        filename: 'english-speaking-content-generator.json',
        folder: 'english'
    }
];

// 새로운 워크플로우를 여기에 추가하세요
// 형식: { id: 'workflow_id', title: '워크플로우 제목', description: '설명', filename: 'file.json', folder: '폴더명' } 