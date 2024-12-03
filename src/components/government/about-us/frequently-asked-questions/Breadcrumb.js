// src/components/government/resources/lassonde-school/Breadcrumb.js
import BreadcrumbNavBar from "../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "Main", href: "/" },
    { label: "Government", href: "/government/" },
    {
      label: "Frequently Asked Questions",
      href: "/government/about-us/frequently-asked-questions",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
