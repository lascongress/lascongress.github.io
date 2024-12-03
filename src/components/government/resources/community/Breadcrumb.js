// src/components/government/resources/student-run/Breadcrumb.js
import BreadcrumbNavBar from "../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "Main", href: "/" },
    { label: "Government", href: "/government/" },
    {
      label: "Community",
      href: "/government/resources/community",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
