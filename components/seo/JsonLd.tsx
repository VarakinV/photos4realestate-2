type JsonLdProps = {
  id?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD injection is standard practice
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
