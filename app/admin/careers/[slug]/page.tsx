import AdminShell from "../../_components/AdminShell";
import CareerForm from "../../_components/CareerForm";

type Props = { params: Promise<{ slug: string }> };

export default async function EditCareerPage({ params }: Props) {
  const { slug } = await params;
  return (
    <AdminShell title="포지션 수정">
      <CareerForm editSlug={slug} />
    </AdminShell>
  );
}
