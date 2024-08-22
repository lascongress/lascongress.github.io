// src/components/government/services/Breadcrumb.js
import BreadcrumbNavBar from "../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "Main", href: "/" },
    { label: "Government", href: "/government/" },
    {
      label: "Services",
      href: "/government/services",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
