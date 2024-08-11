// src/components/congress/agendas-and-minutes/Breadcrumb.js
import BreadcrumbNavBar from "../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "...", href: "/" },
    { label: "Congress", href: "/congress/" },
    {
      label: "Agendas and Minutes",
      href: "/congress/agendas-and-minutes",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
