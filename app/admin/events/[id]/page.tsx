import AdminShell from "../../_components/AdminShell";
import EventForm from "../../_components/EventForm";

type Props = { params: Promise<{ id: string }> };

export default async function EditEventPage({ params }: Props) {
  const { id } = await params;
  return (
    <AdminShell title="행사 수정">
      <EventForm editId={id} />
    </AdminShell>
  );
}
