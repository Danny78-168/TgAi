export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI 自動化網站</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #0f172a;
      color: #f8fafc;
      font-family: system-ui, -apple-system, sans-serif;
      text-align: center;
      padding: 20px;
    }
    .card {
      background: #1e293b;
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      max-width: 480px;
      width: 100%;
      border: 1px solid #334155;
    }
    h1 {
      margin-top: 0;
      color: #38bdf8;
      font-size: 1.8rem;
    }
    p {
      color: #94a3b8;
      line-height: 1.6;
    }
    .badge {
      display: inline-block;
      margin-top: 16px;
      padding: 8px 16px;
      background: #0284c7;
      color: #ffffff;
      border-radius: 999px;
      font-size: 0.9rem;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 網站已連線 GitHub</h1>
    <p>現在你可以隨時打開 Telegram 傳訊息給機器人，AI 就會自動修改這份網頁並更新上線！</p>
    <div class="badge">等待 Telegram 指令中...</div>
  </div>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "geolocation=(), microphone=(), camera=()"
      },
    });
  },
};
