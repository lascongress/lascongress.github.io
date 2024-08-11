// src/components/congress/votes/house/Breadcrumb.js
import BreadcrumbNavBar from "../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "...", href: "/congress" },
    { label: "Votes", href: "/congress/votes" },
    {
      label: "House Votes",
      href: "/congress/votes/house",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
