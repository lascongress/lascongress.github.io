// src/components/congress/meetings/Breadcrumbs.js
import BreadcrumbNavBar from "../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "Main", href: "/" },
    { label: "Congress", href: "/congress/" },
    {
      label: "Meeting Links",
      href: "/congress/meeting-links",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
