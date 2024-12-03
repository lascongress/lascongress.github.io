// src/components/government/ministry/Breadcrumb.js
import BreadcrumbNavBar from "../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "Main", href: "/" },
    { label: "Government", href: "/government/" },
    {
      label: "Ministry",
      href: "/government/about-us/ministry",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
