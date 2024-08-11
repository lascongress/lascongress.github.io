// src/components/government/resources/student-run/Breadcrumb.js
import BreadcrumbNavBar from "../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "...", href: "/" },
    { label: "Government", href: "/government/" },
    {
      label: "Student Run",
      href: "/government/resources/student-run",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
