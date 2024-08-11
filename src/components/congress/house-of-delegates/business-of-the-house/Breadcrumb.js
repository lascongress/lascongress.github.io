// src/components/congress/house-of-delegates/business-of-the-house/Breadcrumb.js
import BreadcrumbNavBar from "../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "...", href: "/congress" },
    { label: "House of Delegates", href: "/congress/house-of-delegates" },
    {
      label: "Business of the House",
      href: "/congress/business-of-the-house",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
