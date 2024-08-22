// src/components/congress/senate/business-of-the-senate/Breadcrumb.js
import BreadcrumbNavBar from "../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "Congress", href: "/congress" },
    { label: "Senate", href: "/congress/senate" },
    {
      label: "Business of the Senate",
      href: "/congress/senate/business-of-the-senate",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
