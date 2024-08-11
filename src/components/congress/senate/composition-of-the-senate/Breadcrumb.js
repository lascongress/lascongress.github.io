// src/components/congress/senate/composition-of-the-senate/Breadcrumb.js
import BreadcrumbNavBar from "../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "...", href: "/congress" },
    { label: "Senate", href: "/congress/senate" },
    {
      label: "Composition of the Senate",
      href: "/congress/senate/composition-of-the-senate",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
