export default function DashboardLayout(props: {
  children: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      {props.notifications}
      {props.children}
    </div>
  );
}
