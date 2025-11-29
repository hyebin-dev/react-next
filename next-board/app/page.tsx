import Image from "next/image";
import BoardList from "./components/board/BoardList";

export default function Home() {
  return (
    <div className="text-center mt-10">
          <h1 className="text-3xl font-bold">Next.js 게시판 예제</h1>
          <p className="text-gray-600 mt-4">게시판 CRUD 기능을 구현한 템플릿입니다.</p>
        </div>
  );
}
