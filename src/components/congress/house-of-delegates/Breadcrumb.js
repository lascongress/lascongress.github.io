// src/components/congress/house-of-delegates/Breadcrumb.js
import BreadcrumbNavBar from "../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "Main", href: "/" },
    { label: "Congress", href: "/congress" },
    { label: "House of Delegates", href: "/congress/house-of-delegates" },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
