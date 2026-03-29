import { redirect } from "next/navigation";

// /contact 로 들어오면 취팡 소개 페이지(문의 CTA 포함)로 리다이렉트
export default function ContactRedirectPage() {
  redirect("/about");
}
