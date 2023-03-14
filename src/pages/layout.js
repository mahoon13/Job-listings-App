import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>job-listing app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ backgroundColor: "var(--light-cyan)", minHeight: "100vh" }}>
        {children}
      </div>
    </>
  );
}
