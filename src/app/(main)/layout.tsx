import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#111110] text-[#f4f0e8]">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
