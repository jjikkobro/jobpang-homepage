import AdminShell from "../../_components/AdminShell";
import EventForm from "../../_components/EventForm";

export default function NewEventPage() {
  return (
    <AdminShell title="새 행사 추가">
      <EventForm />
    </AdminShell>
  );
}
