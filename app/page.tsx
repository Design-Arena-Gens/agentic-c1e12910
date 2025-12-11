import Link from "next/link";

const greetings = [
  "你好！很高兴见到你。",
  "欢迎来到这个温馨的问候页面。",
  "愿今天的每一刻都充满笑容。"
];

function formatDate() {
  return new Intl.DateTimeFormat("zh-Hans-CN", {
    dateStyle: "full",
    timeStyle: "medium"
  }).format(new Date());
}

export default function HomePage() {
  const message = greetings[new Date().getSeconds() % greetings.length];

  return (
    <main>
      <h1>你好 👋</h1>
      <p>{message}</p>
      <footer>
        <div>当前时间：{formatDate()}</div>
        <div>
          了解更多：
          <Link href="https://www.vercel.com" target="_blank" rel="noreferrer">
            Vercel 官网
          </Link>
        </div>
      </footer>
    </main>
  );
}
