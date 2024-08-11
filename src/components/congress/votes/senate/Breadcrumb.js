// src/components/congress/votes/senate/Breadcrumb.js
import BreadcrumbNavBar from "../../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "...", href: "/congress" },
    { label: "Votes", href: "/congress/votes" },
    {
      label: "Senate Votes",
      href: "/congress/votes/senate",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
