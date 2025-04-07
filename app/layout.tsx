import '../styles/globals.css'

export const metadata = {
  title: 'Authentication Flow.js',
  description: 'Front-End Assignment (React Next.js TypeScript)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
