/*eslint-disable*/

import { http, HttpResponse } from "msw";

export const handlers = [
  // GET 요청 핸들러
  http.get("/api/users", () =>
    HttpResponse.json([
      { id: 1, name: "김철수", email: "kim@example.com" },
      { id: 2, name: "이영희", email: "lee@example.com" },
    ]),
  ),

  // 동적 라우트 핸들러
  http.get("/api/users/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id: Number(id),
      name: `사용자 ${id}`,
      email: `user${id}@example.com`,
    });
  }),
];
