// src/components/government/ministry/Breadcrumb.js
import BreadcrumbNavBar from "../../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "Main", href: "/" },
    {
      label: "Ministry",
      href: "/government/about-us/ministry",
    },
    {
      label: "Accountability",
      href: "/government/about-us/ministry/community-affairs",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
